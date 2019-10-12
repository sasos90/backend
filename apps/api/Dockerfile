FROM node:10.15.1-alpine as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

EXPOSE 3333
CMD ["node", "/app/dist/api/main.js"]
