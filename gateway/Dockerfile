FROM node
ENV NODE_ENV=prod DOCKER_PRODUCTS_SERVICE_URL='http://products:8000'
WORKDIR /MicroservicesTestPrj/gateway
COPY /package.json .
COPY /package-lock.json .
RUN npm install
RUN npm install dotenv -save
EXPOSE 8001
COPY . .
CMD ["node", "src/index.js"]
