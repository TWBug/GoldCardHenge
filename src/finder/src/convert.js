const fs = require('fs');
const YAML = require('yaml');
const flatten = require('flat');
const md5 = require('md5');
const objectToString = require('object-to-string');
const md = require('markdown-it')();

const translation_source = fs.readFileSync('../../data/finder-translation_en_zh.yaml', {
    encoding: 'utf8',
    flag: 'r',
});
const translation_yaml = YAML.parse(translation_source);

// write english translation file
console.info('Convert: translation_en');
const translation_en = {};
var counter = 0;
for (counter = 0; counter < translation_yaml.en.items.length; counter++) {
    translation_en[translation_yaml.en.items[counter].key] =
        translation_yaml.en.items[counter].translation;
}
fs.writeFileSync('./src/lang/en.json', JSON.stringify(translation_en));

// write chinese translation file
console.info('Convert: translation_zh');
const translation_zh = {};
for (counter = 0; counter < translation_yaml.zh.items.length; counter++) {
    translation_zh[translation_yaml.zh.items[counter].key] =
        translation_yaml.zh.items[counter].translation;
}
fs.writeFileSync('./src/lang/zh.json', JSON.stringify(translation_zh));

// write questions data file
console.info('Convert: questions');
const questions_source = fs.readFileSync('../../data/finder-questions_en_zh.yaml', {
    encoding: 'utf8',
    flag: 'r',
});
const questions_yaml = YAML.parse(questions_source);
const questions = [];
for (counter = 0; counter < questions_yaml.en.items.length; counter++) {
    const flat = flatten(questions_yaml.en.items[counter]);
    const string = objectToString(flat);
    questions.push({
        id: md5(string),
        tree_id: questions_yaml.en.items[counter].tree_id,
        tree_order: questions_yaml.en.items[counter].tree_order,
        next_tree_id: questions_yaml.en.items[counter].next_tree_id,
        question_text: {
            en: questions_yaml.en.items[counter].question_text,
            zh: questions_yaml.zh.items[counter].question_text,
        },
        qualifications: questions_yaml.en.items[counter].qualifications,
    });
}
fs.writeFileSync('./src/data/questions.json', JSON.stringify(questions));

// write qualifications data file
console.info('Convert: qualifications');
const qualifications_source = fs.readFileSync('../../data/finder-qualifications_en_zh.yaml', {
    encoding: 'utf8',
    flag: 'r',
});
const qualifications_yaml = YAML.parse(qualifications_source);
const qualifications = [];
for (counter = 0; counter < qualifications_yaml.en.items.length; counter++) {
    const temp = {
        ministry: qualifications_yaml.en.items[counter].ministry,
        regulation_no: qualifications_yaml.en.items[counter].regulation_no,
        weight: qualifications_yaml.en.items[counter].weight,
        info: {
            en: '',
            zh: '',
        },
        link: {
            en: qualifications_yaml.en.items[counter].link,
            zh: qualifications_yaml.zh.items[counter].link,
        },
        provide: {
            en: '',
            zh: '',
        },
        notes: {
            en: qualifications_yaml.en.items[counter].notes,
            zh: qualifications_yaml.zh.items[counter].notes,
        },
    };
    if (typeof qualifications_yaml.en.items[counter].info !== 'undefined') {
        temp.info = {
            en: qualifications_yaml.en.items[counter].info,
            zh: qualifications_yaml.zh.items[counter].info,
        };
    }
    if (typeof qualifications_yaml.en.items[counter].provide !== 'undefined') {
        temp.provide = {
            en: md.render(qualifications_yaml.en.items[counter].provide),
            zh: md.render(qualifications_yaml.zh.items[counter].provide),
        };
    }
    qualifications.push(temp);
}
fs.writeFileSync('./src/data/qualifications.json', JSON.stringify(qualifications));

console.info('Convert: DONE!');
