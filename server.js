const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//ejs setup
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// res.render index page
app.get('/', (req, res) => {
  res.render('index');
});


// home route
app.get('/', (req, res) => {
  res.send('Hello World!');
});


// dynamic user route and show on user route on name
app.get('/users/:name', (req, res) => {
  const { name } = req.params;
  res.send(`<h1> Hello, ${name}! </h1>`);
});

app.get('/users/:name/:age', (req, res) => {
  const { age , name } = req.params;
  // res.send(req.params);
  res.send(`<h1> Hello, Your Name is ${name} and age is ${age}! </h1>`);
});


// /Product Route
app.get('/products', (req, res) => {
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 }
  ];

  res.json(products);
});







// listen server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});