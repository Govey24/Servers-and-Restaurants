const { sequelize, DataTypes, Model } = require('./sequelize_index');
const { Menu } = require('./menus');

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

module.exports = { Restaurant }
