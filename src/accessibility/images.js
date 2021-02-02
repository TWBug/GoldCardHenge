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

    var images = html.querySelectorAll('img');

    for (let image_index = 0; image_index < images.length; image_index++) {
        const alt = images[image_index].attributes.alt;
        var error = false;
        if (language === 'en') {
            if (alt.length > 150) {
                error = true;
            }
        } else {
            if (alt.length > 75) {
                error = true;
            }
        }
        if (error) {
            console.info('path', html_files[index]);
            console.info('image src', images[image_index].attributes.src);
            console.info('image alt', images[image_index].attributes.alt);
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
