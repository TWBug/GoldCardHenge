const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');
const S = require('string');
const jieba = require('nodejieba');
const removeMd = require('remove-markdown');

const TRAD_DICT = path.resolve(__dirname, '../dict/trad.dict.utf8');

if (!fs.existsSync(TRAD_DICT)) {
    console.error(`[ERROR]: Could not find traditional diictionary at path -- ${TRAD_DICT}`);
    process.exit(99);
}

const pipe = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

/**
 * Remove hugo shortcodes from a content string.
 *
 * NOTE: For wrapped shortcodes this will preserve the shortcode body and just
 * remove the surrounding shortcode "tag", i.e. the part with brackets.
 *
 * @param {string} str Content string
 */
const stripShortcodes = (str) => {
    return str.replace(/{{\s*?}}/gm, ''); // See NOTE
};

const cleanMd = pipe(removeMd, stripShortcodes);

// Load manually so we can specify the traditional dictionary rather than the
// default.
jieba.load({
    dict: TRAD_DICT,
    hmmDict: jieba.DEFAULT_HMM_DICT,
    userDict: jieba.DEFAULT_USER_DICT,
    idfDict: jieba.DEFAULT_IDF_DICT,
    stopWordDict: jieba.DEFAULT_STOP_WORD_DICT,
});

/**
 * Insert spaces between words in a string of chinese.
 * @param {string} A string of Chinese
 */
const spacifyChinese = (str) => {
    return (
        str &&
        str
            .replace(/\n/gm, '')
            .replace(/[\u4E00-\u9FA5\uF900-\uFA2D]+/g, (match) => ` ${jieba.cut(match).join(' ')} `)
    );
};

const DEFAULT_CONTENT_DIR = path.resolve(__dirname, '../content');

const info = (...args) => {
    console.error(`[INFO]`, ...args);
};

const warn = (...args) => {
    console.error(`[WARNING]`, ...args);
};

const walkDir = (dirpath, fn, options = {}) => {
    const { ignoreDirs = [] } = options;
    const ignored = new Set(ignoreDirs.map((x) => path.resolve(dirpath, x)));

    fs.readdirSync(dirpath).forEach((x) => {
        const absPath = path.join(dirpath, x);
        const stat = fs.statSync(absPath);
        if (stat.isDirectory()) {
            if (ignored.has(absPath)) {
                info('Skipping ignored directory:', absPath);
            } else {
                walkDir(absPath, fn, options); // Recurse
            }
        } else if (stat.isFile()) {
            fn(absPath); // Callback
        } else {
            warn('Unknown type found at path:', absPath);
        }
    });
};

const main = async (contentDir = DEFAULT_CONTENT_DIR) => {
    info('Reading content dir:', contentDir);
    const files = [];
    walkDir(
        contentDir,
        (filePath) => {
            files.push(filePath);
        },
        {
            ignoreDirs: ['./home'], // The home directory is for a single page, ignore it
        }
    );

    const contentFiles = files.filter((x) => x.endsWith('.md'));

    const data = await Promise.all(
        contentFiles.map(async (absPath) => {
            const fileName = path.basename(absPath);
            const [fileIdentifier, _lang, _ext] = fileName.split('.');
            const isIndex = fileIdentifier === '_index' || fileIdentifier === 'index';
            let lang = 'en';

            if (_ext) {
                lang = _lang; // i.e. if the split array is like ["file-name", "zh", "md"] for file-name.zh.md
            }

            const raw = await fs.promises.readFile(absPath, { encoding: 'utf-8' });
            const frontmatterRe = /^---\n([\s\S]+)^---/m;
            const [_, yamlFrontmatter] = raw.match(frontmatterRe);
            const collection = absPath.replace(contentDir, '').replace(fileName, '');
            const body = raw.replace(frontmatterRe, '').trim();
            const href = '/' + path.join(lang, collection, isIndex ? '' : fileIdentifier);
            let frontmatter = null;
            let error = null;

            // Content is used for searching
            // NOTE: stripPunctuation totally mangles chinese strings, so it
            // should only be used with english content
            const content =
                lang === 'zh'
                    ? spacifyChinese(cleanMd(body))
                    : S(cleanMd(body)).stripPunctuation().stripTags().trim().s;

            if (lang === 'zh') {
                debugger;
            }

            try {
                frontmatter = yaml.safeLoad(yamlFrontmatter);
            } catch (err) {
                warn('Error detected while parsing frontmatter for:', absPath, err.message);
                error = err;
            }

            return {
                absPath,
                fileName,
                fileIdentifier,
                href,
                lang,
                frontmatter,
                title:
                    lang === 'zh'
                        ? frontmatter && spacifyChinese(frontmatter.title)
                        : frontmatter && frontmatter.title,
                body,
                content,
                error,

                /// NOTE Raw is useful for debugging but not needed for building the lunr index
                // raw,
            };
        })
    );

    // NOTE: In the case that fontmatter parsing fails, or file parsing fails, we
    // simply don't index those pages. There will be a warning in stdout
    const lunrData = data
        .filter((x) => x && x.frontmatter) // See NOTE
        .map((x) => ({
            title: x.title,
            content: x.content,
            summary: x.frontmatter.summary || '',
            tags: x.frontmatter.tags || [],
            categories: x.frontmatter.categories || [],
            href: x.href,
        }));

    const outpath = path.resolve(__dirname, '../static/lunr_index.json');
    fs.writeFileSync(outpath, JSON.stringify(lunrData), { encoding: 'utf-8' });

    info(`Index file written. ${lunrData.length} Pages processed:`, outpath);
};

main(process.argv[2]);
