FROM node:14.16

WORKDIR /tmp

# Install hugo. As is often the case, the official apt version is woefully out
# of date.
RUN apt update -y
RUN wget https://github.com/gohugoio/hugo/releases/download/v0.79.1/hugo_0.79.1_Linux-32bit.tar.gz
RUN tar xzf hugo_0.79.1_Linux-32bit.tar.gz
RUN mv ./hugo /usr/local/bin/

WORKDIR /code

COPY package.json package-lock.json ./

RUN npm install 

COPY . .

CMD [ "./scripts/netlify-build.sh" ]