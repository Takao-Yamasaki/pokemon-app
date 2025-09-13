# https://www.docker.com/ja-jp/blog/how-to-dockerize-react-app/
FROM node:18

WORKDIR /pokemon-app

COPY pokemon-app/package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
