FROM node:10.15.1-alpine as develop

WORKDIR /usr/src/cache
COPY package.json package-lock.json ./
RUN npm install

WORKDIR /app

EXPOSE 3333
ENTRYPOINT ["/app/entry-point.sh"]
CMD ["npm", "run", "start"]
