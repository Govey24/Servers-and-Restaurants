const { sequelize } = require('./sequelize_index');
const { Restaurant } = require('./restaurants');
const { Menu } = require('./menus');
const { Item } = require('./items');

describe('Menu', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the
        // test suite is run
        await sequelize.sync({ force: true }); // clear the whole database
    })

    // test('the data is peanut butter', async () => {
    
    //     // create a restaurant first 
    //     const restaurant = await Restaurant.create({ name: 'MandyRest', imageLink: "xxx"})

    //     // now we can create a menu and link it to the restaurant
    //     const menu = await Menu.create({ title: 'MandyMenu', restaurant_id: 1})
    //     expect(menu.id).toBe(1)
    //   });

    // test('can create a Menu', async () => {
        
    //     try {

    //     } catch (err) {
    //         console.log(err);
    //     }
    // })
})