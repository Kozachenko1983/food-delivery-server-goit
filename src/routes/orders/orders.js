const fs = require("fs");
const path = require("path");
const uniqId = require("uniqid");

const postOrder = (request, response) => {
  let body = "";
  request.on("data", function(data) {
    body += data;
    
    let order = JSON.parse(body);
    order.id = uniqId();

    const ordersPath = path.join(
      __dirname,
      "../../",
      "db",
      "users",
      "orders",
      order.id + ".json"
    );

    fs.writeFile(ordersPath, JSON.stringify(order), err => {
      if (err) throw err;
      console.log("The file has been saved!");

      response.status(200).send({
        status: "success",
        order: order
      });
    });
  });
};



module.exports = postOrder;
