const fs = require('fs');
const path = require('path');
const HTMLParser = require('node-html-parser');
const base_dir = path.resolve('./public/') + '/';

var html_files = [];
readDir();

for (let index = 0; index < html_files.length; index++) {
    const data = fs.readFileSync(html_files[index], { encoding: 'utf8', flag: 'r' });
    const html = HTMLParser.parse(data);
    const clean_path = cleanPath(html_files[index]);

    if (clean_path.substr(0, 7) === '/admin/') {
        continue;
    }

    var body = html.querySelector('body');
    if (body === null) {
        continue;
    }

    const stats = {
        h1: false,
        h2: false,
        h3: false,
        h4: false,
        h5: false,
        h6: false,
    };
    var headline1 = html.querySelector('h1');
    if (headline1 !== null) {
        stats.h1 = true;
    }
    var headline2 = html.querySelector('h2');
    if (headline2 !== null) {
        stats.h2 = true;
    }
    var headline3 = html.querySelector('h3');
    if (headline3 !== null) {
        stats.h3 = true;
    }
    var headline4 = html.querySelector('h4');
    if (headline4 !== null) {
        stats.h4 = true;
    }
    var headline5 = html.querySelector('h5');
    if (headline5 !== null) {
        stats.h5 = true;
    }
    var headline6 = html.querySelector('h6');
    if (headline6 !== null) {
        stats.h6 = true;
    }

    if (stats.h1 === false) {
        console.info('no H1', clean_path);
    }
    if (stats.h1 === true && stats.h2 === false && stats.h3 === true) {
        console.info('H1 and H3 but no H2', clean_path);
    }
    if (stats.h1 === true && stats.h2 === false && stats.h3 === false && stats.h4 === true) {
        console.info('H1 and H4 but no H3 and H2', clean_path);
    }
    if (stats.h1 === true && stats.h2 === true && stats.h3 === false && stats.h4 === true) {
        console.info('H1, H2 and H4 but no H3', clean_path);
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
