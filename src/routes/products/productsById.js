const fs = require("fs");
const path = require("path");

const allProductsPath = path.join(
  __dirname,
  "../../",
  "db",
  "products",
  "all-products.json"
);

const productsRoute = (request, response, numId) => {
  fs.readFile(allProductsPath, "utf8", (err, data) => {
    if (err) throw err;
    const result = JSON.parse(data).filter(el => numId.includes(el.id));

    const shortResult = result.reduce((acc, el) => {
      const obj = {};
      obj.id = el.id;
      obj.sku = el.sku;
      obj.name = el.name;
      obj.description = el.description;
      return [...acc, obj];
    }, []);

    const resp = {};
    resp.status = "success";
    resp.products = shortResult;

    response.writeHead(200, {
      "Content-Type": "application/json"
    });
    response.write(JSON.stringify(resp));
    response.end();
  });
};

module.exports = productsRoute;
