const {sequelize, DataTypes, Model} = require('./sequelize_index');
const { Item } = require('./items');

/**
 * Represents an item
 */
class Menu extends Model {

    // add methods here

}
Menu.init({
    title: DataTypes.STRING}, {
    sequelize,
    timestamps: false
});

Menu.hasMany(Item, {as: 'items', foreignKey: 'menu_id'});
Item.belongsTo(Menu, {foreignKey: 'menu_id'});


module.exports = { Menu }