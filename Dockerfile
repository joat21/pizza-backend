FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
RUN cp -r src/generated dist/generated
RUN rm -rf src

CMD ["node", "dist/index.js"]
