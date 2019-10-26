FROM node:10.15.1-alpine as develop

WORKDIR /usr/src/cache
COPY package.json package-lock.json ./
RUN npm install

WORKDIR /app

RUN apk update && apk add rsync

EXPOSE 3333
ENTRYPOINT ["/app/entry-point.sh"]
CMD ["npm", "run", "build", "api", "&&", "npm", "run", "migration:run", "&&", npm", "run", "start"]
