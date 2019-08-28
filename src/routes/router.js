const mainRoute = require('./main/main');
const productsRoute = require('./products/handleProductsRout');
const signUpRoute = require('./users/signUpRoute');

const router = {
  'signup': signUpRoute,
  'products': productsRoute,
  default: mainRoute
};

module.exports = router;

