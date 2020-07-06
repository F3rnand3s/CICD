FROM node:latest

COPY . /src

WORKDIR /src

RUN npm install 
RUN npm test

EXPOSE 3000

CMD npm start