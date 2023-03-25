FROM node:18.15

RUN apt-get update -y

RUN apt-get install -y curl openjdk-11-jre-headless \
    && curl -sL https://deb.nodesource.com/setup_14.x | bash -

RUN npm i -g firebase-tools

WORKDIR /backend

CMD ["npm", "run", "serve"]