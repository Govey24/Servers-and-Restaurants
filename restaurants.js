const { sequelize, DataTypes, Model } = require('./sequelize_index');
const Menu = require('./menus');
const Item = require('./items');

/**
 * Represents a Restaurant
 */
class Restaurant extends Model {

}
Restaurant.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

Restaurant.hasMany(Menu, { foreignKey: 'restaurant_id' })
Menu.belongsTo(Restaurant, { foreignKey: 'restaurant_id' })
Menu.hasMany(Item, { foreignKey: 'item_id' })
Item.belongsTo(Menu, { foreignKey: 'menu_id' })

module.exports = Restaurant
