const fs = require("fs");
const path = require("path");
const { readFile } = fs.promises;

const findUser = async userid => {
  console.log(userid);

  const usersPath = path.join(
    __dirname,
    "../../",
    "db",
    "users",
    "allUsers.json"
  );
  const readData = await readFile(usersPath);
  const parsedData = JSON.parse(readData);
  const res = parsedData.find(user => user.id === userid);
  return res;
};

const findUserRoute = async (request, response) => {
  const res = await findUser(request.params.userId);
  response.status(200);
  response.removeHeader("X-Powered-By");
  if (!res) {
    response.json({
      status: "not found"
    });
  } else {
    response.json({
      status: "succes",
      user: res
    });
  }
  response.end();
};

module.exports = findUserRoute;
