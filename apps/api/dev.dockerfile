FROM node:12.16.1-alpine as develop

RUN apk update && apk add curl

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . ./

EXPOSE 3001
EXPOSE 9229
CMD ["npm", "run", "start", "api"]
