FROM node:12.16.1-alpine as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build api

EXPOSE 3001
CMD ["node", "/app/dist/api/main.js"]
#CMD ["npm", "run", "build", "api", "&&", "npm", "run", "migration:run", "&&", "node", "/app/dist/api/main.js"]
