const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize('restaurantDB', 'name', 'image', {
    dialect: 'sqlite',
    storage: './restaurants2.sqlite'
});

 module.exports={sequelize, DataTypes, Model};