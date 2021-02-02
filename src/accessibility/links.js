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

    var links = html.querySelectorAll('a, button');


    for (let link_index = 0; link_index < links.length; link_index++) {
        const classes = links[link_index].classNames;

        if (links[link_index].classNames.length === 0) {
            continue;
        }

        var error = true;

        for (let index_item = 0; index_item < links[link_index].classNames.length; index_item++) {
            const class_name = links[link_index].classNames[index_item];
            if (class_name.indexOf('focus') === 0) {
                error = false;
                break;
            }
        }

        if (typeof links[link_index].attributes['aria-hidden'] !== 'undefined') {
            if (links[link_index].attributes['aria-hidden'] === 'true') {
                error = false;
            }
        }

        if (typeof links[link_index].attributes['tabindex'] !== 'undefined') {
            if (links[link_index].attributes['tabindex'] === '-1') {
                error = false;
            }
        }

        if (links[link_index].classNames.indexOf('member') !== '-1') {
            error = false;
        }

        if (error) {
            console.info('path:', html_files[index]);
            console.info('tag:', links[link_index].rawTagName);
            console.info('href:', links[link_index].attributes.href);
            console.info('class:', links[link_index].attributes.class);
            console.info('\n----------------\n');
        }
    }

    // if (links.length > 0) {
    //     break;
    // }
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
