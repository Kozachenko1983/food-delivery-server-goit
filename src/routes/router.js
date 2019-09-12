const express = require("express");
const mainRoute = require("./main/main");
const signUpRoute = require("./users/signUpRoute");
const allproductsRoute = require("./products/productsAll");
const getProductsById = require("./products/productsById");
const getProductsByCategory = require("./products/productsByCategories");
const getUser = require("./users/getUserRoute");
const postOrder = require("./orders/orders");


const apiRoutes = express.Router();

apiRoutes
  .get('/', mainRoute)
  .get('/users/:userId', (request, response) => {
    getUser(request, response)
  })
  .post('/users', signUpRoute)
  // .post('/image', upload.single('image'), getSaveImageHandlers)
  .get('/products', (request, response) => {
    if (request.query.ids) {
      getProductsById(request, response, request.query.ids.split(','))
    } else
    if (request.query.category) {
      getProductsByCategory(request, response)
    } else
    if (request.url === '/products') {
      allproductsRoute(request, response)
    }
  })
  .get('/products/:id', (request, response) => {
    getProductsById(request, response, [request.params.id])
  })
  .post('/orders', postOrder)
  .get('*', (req, res, next) => {
    res.status(404).send('Error');
  });

module.exports = apiRoutes;