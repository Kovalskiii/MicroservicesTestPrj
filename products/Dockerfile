FROM node
ENV NODE_ENV=prod
WORKDIR /MicroservicesTestPrj/products
COPY /package.json .
COPY /package-lock.json .
RUN npm install
RUN npm install dotenv -save
EXPOSE 8000
COPY . .
CMD ["node", "src/index.js"]