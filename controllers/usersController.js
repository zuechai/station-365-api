const fs = require("fs");

const usersJsonPath = "./data/users.json";

const users = JSON.parse(fs.readFileSync(usersJsonPath));

const getUsers = (_req, res) => {
  res.json(users);
};

// get single user

// create a user

// update a user's ticket counts if they were listed as a participant and/or submitted ticket (tickets or users need to track this as a property)

// update a user's team and position

// delete a user

module.exports = { getUsers };
