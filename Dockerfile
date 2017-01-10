FROM node:boron

MAINTAINER Jason Wang <962215093@qq.com>

# Create work directory
RUN mkdir -p /user/src/app
WORKDIR /user/src/app

# Copy package.json first
COPY package.json /user/src/app

RUN npm install

COPY . /user/src/app

EXPOSE 8080

CMD ["npm", "start"]
