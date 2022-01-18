const { sequelize, DataTypes, Model } = require('./sequelize_index');
const Menu = require('./menus');

/**
 * Represents a Menu
 */
class Item extends Model {

    // add methods here

}
Item.init({
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    menu_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
    }
}, {
    sequelize,
    timestamps: false,
});

module.exports = Item