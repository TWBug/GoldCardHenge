const fs = require('fs');
const YAML = require('yaml');
const flatten = require('flat');
const md5 = require('md5');
const objectToString = require('object-to-string');

const data = fs.readFileSync('../../data/finder.yaml', { encoding: 'utf8', flag: 'r' });
const yaml = YAML.parse(data);

var index = 0;
for (index = 0; index < yaml.question.length; index++) {
    const flat = flatten(yaml.question[index]);
    const string = objectToString(flat);
    yaml.question[index].id = md5(string);
}
for (index = 0; index < yaml.qualification.length; index++) {
    if (typeof yaml.qualification[index].info === 'undefined') {
        yaml.qualification[index].info = {
            en: '',
            zh: '',
        };
    } else {
        if (typeof yaml.qualification[index].info === 'string') {
            yaml.qualification[index].info = {
                en: yaml.qualification[index].info,
                zh: yaml.qualification[index].info,
            };
        }
    }
    if (typeof yaml.qualification[index].prepare === 'undefined') {
        yaml.qualification[index].prepare = {
            en: [],
            zh: [],
        };
    } else {
        if (typeof yaml.qualification[index].prepare.en === 'undefined') {
            yaml.qualification[index].prepare = {
                en: yaml.qualification[index].prepare,
                zh: yaml.qualification[index].prepare,
            };
        }
    }
}

const json = JSON.stringify(yaml);
fs.writeFileSync('./src/data.json', json);

console.info('Conversion DONE!');
