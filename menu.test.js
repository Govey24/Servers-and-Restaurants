const {sequelize} = require('./sequelize_index');
const Restaurant = require('./restaurants');
const Menu = require('./menus');
const Item = require('./items');

describe('Menu', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Menu', async () => {
        const menu = await Menu.create({ title: 'Breakfast', restaurant_id: 1 })
        expect(menu.id).toBe(1)
    })
})