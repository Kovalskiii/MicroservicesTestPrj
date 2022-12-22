# Node.js Microservices Test Project

## 1)Install Node.js (last stable version) https://nodejs.org/en/

## 2)Database:
Local mongo connection string : mongodb://127.0.0.1:27017/MicroservicesTestPrj
</br>
## 3)Postman collection and environment is located in docs/postman. Import files in Postman.

## 4)To start gateway locally:
a)open terminal;
</br>
b)execute command: cd gateway;
</br>
c)execute command: npm install (need to be executed once after project clone - to install packages);
</br>
d)execute command: npm run local

## 5)To start products server locally:
a)open second terminal;
</br>
b)execute command: cd products;
</br>
c)execute command: npm install (need to be executed once after project clone - to install packages);
</br>
d)execute command: npm run local; (to run with production database use command: npm run prod)

## 6)Docker - (for Windows users - install Docker Desktop https://www.docker.com/products/docker-desktop)
a)to build use command: docker-compose build 
</br>
b)to start use command: docker-compose up
</br>
c)to stop use command: docker-compose down
