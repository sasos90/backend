FROM node:10.15.1-alpine

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install

COPY . ./

EXPOSE 3333

CMD ["npm", "run", "start"]
