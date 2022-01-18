const {sequelize} = require('./sequelize_index');
const Restaurant = require('./restaurants');
const Menu = require('./menus');
const Item = require('./items');

describe('Item', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create an Item', async () => {
        const item = await Item.create({ name: 'Eggs Benedict', price: 5, menu_id: 1 })
        expect(item.id).toBe(1)
    })
})