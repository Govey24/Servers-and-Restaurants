const express = require('express'); //import dependency
const Restaurant = require('./restaurants')
const {sequelize} = require('./sequelize_index');
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

//const {Sequelize, DataTypes, Model} = require('sequelize');
app.get("/restaurants", async (req, res) => {
  const restaurants = await Restaurant.findAll();
  res.json(restaurants);
});


// ERP: POST
app.post('./restaurants'), async (req, res) => {
  const result = await Restaurant.create(
    req.body
  )
  res.send(result)
};

//Express Route Parameter PUT
app.put("/restaurants/:id", (req, res) =>{
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
