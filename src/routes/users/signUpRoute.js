const fs = require("fs");
const path = require("path");

const saveUser = (fileName, data) => {
  const usersPath = path.join(
    __dirname,
    "../../",
    "db",
    "users",
    fileName + ".json"
  );
  fs.writeFile(usersPath, data, err => {
    console.log(err);
  });
};

const signUpRoute = (request, response) => {
  if (request.method === "POST") {
    let body = "";
    request.on("data", data => {
      body += data;
    });

    request.on("end", () => {
      const userData = JSON.parse(body);
      const userName = userData.username;

      const resp = {};
      resp.status = "success";
      resp.user = userData; 

      response.writeHead(201, {
        "Content-Type": "application/json"
      });
      response.write(JSON.stringify(resp));

      response.end();

      saveUser(userName, body);
    });
  }
};

module.exports = signUpRoute;