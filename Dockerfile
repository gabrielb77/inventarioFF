FROM docker.io/alpine:latest

WORKDIR /app

COPY package*.json .
COPY inventario.txt .
COPY server.js .

RUN apk add --update nodejs nodejs-npm ansible
RUN npm install --only=prod

EXPOSE 8080
CMD [ "node", "server.js" ]
