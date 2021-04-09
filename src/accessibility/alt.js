const fs = require('fs');
const path = require('path');
const HTMLParser = require('node-html-parser');
const base_dir = path.resolve('./public/') + '/';

const whitelist = ['taiwan-gold-card-logo-white.svg', 'linkedin-white.svg', 'data.image'];

var html_files = [];
readDir();

for (let index = 0; index < html_files.length; index++) {
    const data = fs.readFileSync(html_files[index], { encoding: 'utf8', flag: 'r' });
    const html = HTMLParser.parse(data);

    var body = html.querySelector('body');
    if (body === null) {
        continue;
    }

    var images = html.querySelectorAll('img');

    for (let image_index = 0; image_index < images.length; image_index++) {
        const alt = images[image_index].attributes.alt;
        const path = html_files[index];
        const src = images[image_index].attributes.src;

        var in_whitelist = false;
        for (let i = 0; i < whitelist.length; i++) {
            if (src.indexOf(whitelist[i]) !== -1) {
                in_whitelist = true;
                break;
            }
        }

        if (in_whitelist) {
            continue;
        }

        if (typeof alt === 'undefined') {
            writeError(path, src, 'undefined');
            continue;
        }

        if (alt === null) {
            writeError(path, src, 'null');
            continue;
        }

        if (alt.length === 0) {
            continue;
        }

        if (alt === '"<!') {
            writeError(path, src, 'code');
            continue;
        }

        writeError(path, src, alt);
    }
}

function writeError(path, src, alt) {
    console.info('path: ', cleanPath(path));
    console.info(' src: ', src);
    console.info(' alt: ', alt);
    console.info('\n----------------\n');
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
