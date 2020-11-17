const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');
const S = require('string');

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
            const body = raw.replace(frontmatterRe, '');
            const href = '/' + path.join(lang, collection, isIndex ? '' : fileIdentifier);
            let frontmatter = null;
            let error = null;

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
                body,
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
            title: x.frontmatter.title,
            content: S(x.body).trim().stripPunctuation().stripTags().trim().s,
            tags: x.frontmatter.tags || [],
            categories: x.frontmatter.categories || [],
            href: x.href,
        }));

    const outpath = path.resolve(__dirname, '../static/lunr_index.json');
    fs.writeFileSync(outpath, JSON.stringify(lunrData), { encoding: 'utf-8' });

    info(`Index file written. ${lunrData.length} Pages processed:`, outpath);
};

main(process.argv[2]);
