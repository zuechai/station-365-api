const fs = require("fs");

const usersJsonPath = "./data/users.json";

const users = JSON.parse(fs.readFileSync(usersJsonPath));

const getUsers = (_req, res) => {
  res.json(users);
};

module.exports = { getUsers };
