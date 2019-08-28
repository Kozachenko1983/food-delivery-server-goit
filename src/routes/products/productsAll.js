const fs = require('fs');
const path = require('path');

const allProductsPath = path.join(__dirname, '../../', 'db', 'products', 'all-products.json');

const productsRoute = (request, response) => {  
  const products = fs.statSync(allProductsPath);
  response.writeHead(200, {
    'Content-Type': 'application/json',
    'Content-Length': products.size
  });

  const readStream = fs.createReadStream(allProductsPath);

  readStream.pipe(response);
};

module.exports = productsRoute;