import assert from 'assert';
import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

const DEBUG = !!process.env.DEBUG;
interface ITranslationLangDict {
    items: Array<{
        id: string;
        translation: string;
    }>;
}
interface ITranslationFile {
    en: ITranslationLangDict;
    zh: ITranslationLangDict;
}

if (require.main === module) {
    const filepath = path.resolve(__dirname, '../../data/translations_en_zh.yaml');
    console.log(`[INFO] Reading translations from YAML: ${filepath}`);
    // @ts-ignore The yaml lib seems to have poor typing.
    const data: ITranslationFile = yaml.load(fs.readFileSync(filepath, { encoding: 'utf-8' }));

    const translations = [
        ['en', data.en.items],
        ['zh', data.zh.items],
    ];

    for (const [lang, data] of translations) {
        const outfile = path.join('i18n', `${lang}.yaml`);
        fs.mkdirSync(path.dirname(outfile), { recursive: true });
        fs.writeFileSync(outfile, yaml.dump(data), { encoding: 'utf8' });
        console.log(`[INFO] Wrote ${outfile}`);
    }
}
