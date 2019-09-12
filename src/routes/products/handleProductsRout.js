// const allproductsRoute = require('./productsAll')
// const getProductsById = require('./productsById')
// const getProductsByCategory = require('./productsByCategories')

// const handleProductsRoute = (request, response) => {
//   const adress = request.parsedPath[2];
  
//   if (request.method === 'GET') {
//     if (!adress) {
//       allproductsRoute(request, response)
//       return
//     }
//     if (Number(adress)) {
//       const id = [Number(adress)]
//       getProductsById(request, response, id )
//       return
//     };
//     if (/^\?ids=/.test(adress)){       
//       const ids = adress.split('=')[1].split(',').map(el => Number(el))
//       getProductsById(request, response, ids)
//       return
//     };
//     if (/^\?category=/.test(adress)) {
//       const category = adress.split('=')[1].split(',')[0]
//       getProductsByCategory(request, response, category)
//       return
//     };
//     return;
//   }
// };

// module.exports = handleProductsRoute;