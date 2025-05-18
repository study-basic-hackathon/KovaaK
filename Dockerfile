# nodeイメージから作成
FROM node:22.15.1

# Create app directory
WORKDIR /usr/src/app

RUN npm install -g npm@11.4.0