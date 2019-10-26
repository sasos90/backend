FROM node:10.15.1-alpine as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

EXPOSE 3333
CMD ["npm", "run", "build", "api", "&&", "npm", "run", "migration:run", "&&", "node", "/app/dist/api/main.js"]
