# 13 Object-Relational Mapping (ORM): E-Commerce Back End
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The task given was to build the back end of an e-commerce website. This is done by configuring a Rest API utilizing the [Sequelize](https://sequelize.org/docs/v6/getting-started/) library to store data and perform CRUD (create, read, update, delete) operations within the [mysql2](https://www.npmjs.com/package/mysql2) database.

## Installation 
Dependencies:
  1.  [dotenv](https://www.npmjs.com/package/dotenv)
  2.  [express](https://www.npmjs.com/package/express)
  3.  [mysql2](https://www.npmjs.com/package/mysql2)
  4.  [sequelize](https://www.npmjs.com/package/sequelize)
  
To install the dependencies, run:
```
npm i
```

## Usage
To invoke the app navigate to the corresponding directory then run:
```
node server.js
```
This app is not deployed but here you will find a video demonstrating the usage of the app.

There are four models in the database. Category, Product, ProductTag and Tag. The application allows CRUD operations to be performed through the use of an API by hitting certain endpoints to access separate tables. 

## License
This application is licensed under the [MIT License](https://opensource.org/licenses/MIT).