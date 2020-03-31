FROM node:12.16.1-alpine as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build api

EXPOSE 3001
CMD ["node", "/app/dist/api/main.js"]
