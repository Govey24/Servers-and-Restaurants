const {sequelize, DataTypes, Model} = require('./sequelize_index');
const Restaurant = require ('./restaurants');
const Item = require('./items');

/**
 * Represents an item
 */
class Menu extends Model {

    // add methods here

}
Menu.init({
    // id: { type: DataTypes.INTEGER, 
    //     primaryKey: true,
    //     autoIncrement: true
    //     },
    title: DataTypes.STRING,
    restaurant_id:{ 
        type: DataTypes.INTEGER, 
        foreignKey: true
    }
}, {
    sequelize,
    timestamps: false,
});


module.exports = Menu