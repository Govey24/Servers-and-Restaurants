const express = require('express'); //import dependency
const { Restaurant } = require('./restaurants')
const { sequelize } = require('./sequelize_index');
const { body, validationResult } = require('express-validator');
//const Menu = require('./menus')
//const Item = require('./items')

//create a web server (not running at this point)
const app = express();
//specify port on which server will run
const port = 3000;

// serve us static content (web pages from public directory)
app.use(express.static('public'));

// API endpoint which returns the date when user navigates to http://localhost:3000
app.get("/flipcoin", (request, response) => {
  const random = Math.floor(Math.random() * 2);
  if (random === 1) {
    response.send("Heads");
  } else {
    response.send("Tails");
  }
});

app.get("/restaurants/", async (req, res) => {
  const restaurants = await Restaurant.findAll();
  res.send(restaurants);
});

//const {Sequelize, DataTypes, Model} = require('sequelize');
app.get("/restaurants/:id", async (req, res) => {
  const restaurants = await Restaurant.findByPk(req.params.id);
  res.send(restaurants);
});


app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// ERP: POST
app.post('/restaurants', body('imageLink').isURL(), body('name').isLength({max: 50}),
async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array() })
  };
    //use data in req.body to add a new restaurant to the DB
  res.send(req.body)
  res.sendStatus(201);
})

//ERP DELETE
app.delete('/restaurants/:id', async (req, res) => {
  res.send(req.body.name)
  res.sendStatus(400);
})

// Express Route Parameter PUT
app.put("/restaurants/:id:", (req, res) => {
  const result =
    await.Restaurant.update(req, body, {
      where: {
        id: req.params.id(1)
      }
    })
  res.send(result)
});

//start the web server listening
app.listen(port, () => {
  console.log('Server listening at http://localhost:3000')
})