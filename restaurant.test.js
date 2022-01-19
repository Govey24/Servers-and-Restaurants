const { sequelize } = require('./sequelize_index');
const { Restaurant } = require('./restaurants');
const { Menu } = require('./menus');
const { Item } = require('./items');

describe('Restaurant', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

//     test('can create a Restaurant', async () => {
//         const restaurant = await Restaurant.create({ name: 'Ronalds', image: 'http://some.image.url' })
//         expect(restaurant.id).toBe(1)
//     })
// })
// test('can find by Primary Key', async () => {
//     const restaurant = await Restaurant.create({name: 'Johns', image: 'image2' })
//     expect(restaurant.id).toBe(2)
})