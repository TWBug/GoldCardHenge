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

## Emulate a CI Build

A Docker toolchain is provided for emulating the remote CI environment where builds ultimately take place. To run a build via docker use:

```
docker build -t tego/hugo . && docker run --rm -v $(pwd)/public:/code/public tego/hugo
```

This will build the docker image and then run it. The built static files will be in the `public/` folder.