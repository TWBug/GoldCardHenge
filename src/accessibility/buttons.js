const fs = require('fs');
const path = require('path');
const HTMLParser = require('node-html-parser');
const base_dir = path.resolve('./public/') + '/';

var html_files = [];
readDir();

for (let index = 0; index < html_files.length; index++) {
    const data = fs.readFileSync(html_files[index], { encoding: 'utf8', flag: 'r' });
    const html = HTMLParser.parse(data);

    var language = 'en';
    if (html_files[index].indexOf('/zh/') !== -1) {
        language = 'zh';
    }

    var body = html.querySelector('body');
    if (body === null) {
        continue;
    }

    var actions = html.querySelectorAll('a, button');

    for (let action_index = 0; action_index < actions.length; action_index++) {
        var error = true;

        if (actions[action_index].childNodes.length > 0) {
            error = false;
        } else if (actions[action_index].rawText.length > 0) {
            error = false;
        }

        if (error) {
            console.info('path:', html_files[index]);
            console.info('tag:', actions[action_index].rawTagName);
            console.info('innerHTML:', actions[action_index].innerHTML);
            console.info('text:', actions[action_index].text);
            console.info('textContent:', actions[action_index].textContent);
            console.info('string:', actions[action_index].toString());
            console.info('href:', actions[action_index].getAttribute('href'));
            console.info('class:', actions[action_index].getAttribute('class'));
            console.info('\n----------------\n');
        }
    }
}

function readDir(relative_dir = '') {
    const files = fs.readdirSync(base_dir + '/' + relative_dir);
    files.forEach((file) => {
        var file_path = base_dir + file;
        if (relative_dir !== '') {
            file_path = base_dir + relative_dir + '/' + file;
        }
        if (fs.lstatSync(file_path).isDirectory()) {
            readDir(relative_dir + '/' + file);
        }
        if (file.substr(-5, 5) === '.html') {
            html_files.push(path.resolve(file_path));
        }
    });
}

function cleanPath(path_to_clean) {
    const base = path.resolve('./public/');
    return path_to_clean.substr(base.length);
}
