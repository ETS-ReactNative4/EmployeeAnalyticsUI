FROM node:alpine

EXPOSE 3080

WORKDIR '/app'

COPY ./package.json ./

RUN npm install axios --save
RUN npm install js-base64 --save 
RUN npm install

COPY ./ ./

CMD ["npm", "run", "start"]