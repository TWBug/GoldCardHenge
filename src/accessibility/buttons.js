const fs = require('fs');
const path = require('path');
const HTMLParser = require('node-html-parser');
const base_dir = path.resolve('./public/') + '/';

var html_files = [];
readDir();

for (let index = 0; index < html_files.length; index++) {
    const data = fs.readFileSync(html_files[index], { encoding: 'utf8', flag: 'r' });
    const html = HTMLParser.parse(data);

    var body = html.querySelector('body');
    if (body === null) {
        continue;
    }

    var actions = html.querySelectorAll('a, button');

    for (let action_index = 0; action_index < actions.length; action_index++) {
        var error = true;

        if (typeof actions[action_index].firstChild !== 'undefined') {
            if (actions[action_index].firstChild.rawTagName !== 'svg') {
                error = false;
            } else if (actions[action_index].childNodes.length > 1) {
                error = false;
            }
        } else if (typeof actions[action_index].textContent === 'undefined') {
            error = false;
        }

        if (error) {
            console.info('Path:', html_files[index]);
            console.info('Tag:', actions[action_index].rawTagName);
            console.info('Text:', actions[action_index].textContent);
            console.info('Content:', actions[action_index].toString());
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
