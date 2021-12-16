# Taiwan Gold Card Stage

## Local development

```
// To install dev dependencies run:

npm install

// To run a watcher of CSS and JS:

npm run watch

// To render develop version of CSS and JS run:

npm run develop

// To make a production build of CSS and JS run:

npm run build

// To make a production build of HUGO:

npm run hugo

// To deploy to staging.taiwangoldcard.tw
make staging
```

## Translation Strings and Hugo

If you're familiar with Hugo already you're probably used to putting your translation strings under the `i18n/` directory. This project functions slightly differently. As of this commit we only support two languages: English (en) and Chinese (zh). Due to limitations of Netlify CMS at the time of this writing, the flat yaml file structure used by Hugo is not supported by the CMS. This meant that in order to modify translations via the CMS we needed a translation layer between Netlify format and Hugo format.

The two formats:

* Netlify CMS: Requires every file to be an object at the root. In JSON this means `{ "key": "val..." }`. In YAML this means `key: val...`.
* Hugo: Utilizes an array at the root. In JSON this means `[{ "key": "val..." }]`. In YAML this means `- key: val...`.

Due to this difference we had to write a translation layer. As such, there is one i18n file which can be edited via teh CMS and then transformed to the supported hugo format. This file is located at:

```
data/translations_en_zh.yaml
```

## Emulate a CI Build

A Docker toolchain is provided for emulating the remote CI environment where builds ultimately take place. To run a build via docker use:

```
docker build -t tego/hugo . && docker run --rm -v $(pwd)/public:/code/public tego/hugo
```

This will build the docker image and then run it. The built static files will be in the `public/` folder.