# Node.js Microservices Test Project

1)Install Node.js (last stable version) https://nodejs.org/en/

2)Database:
Local mongo connection string : mongodb://127.0.0.1:27017/MicroservicesTestPrj

3)Postman collection and environment is located in products/docs/postman. Import files in Postman.

4)To start gateway:
a)open terminal;
b)execute command: cd gateway;
c)execute command: npm install (need to be executed once after project clone - to install packages);
d)execute command: npm run local

5)To start products server:
a)open second terminal;
b)execute command: cd products;
c)execute command: npm install (need to be executed once after project clone - to install packages);
d)execute command: npm run local;
