FROM node
ENV NODE_ENV=prod
WORKDIR /MicroservicesTestPrj/gateway
COPY /package.json .
COPY /package-lock.json .
RUN npm install
RUN npm install dotenv -save
EXPOSE 8001
COPY . .
CMD ["node", "src/index.js"]
