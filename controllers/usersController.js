const fs = require("fs");
const { findSingleUser, replaceUser } = require("../utils/usersUtils");

const usersJsonPath = "./data/users.json";

const users = JSON.parse(fs.readFileSync(usersJsonPath));

// get all users
const getUsers = (_req, res) => {
  res.json(users);
  return;
};

// get a single user
const getSingleUser = (req, res) => {
  const { id } = req.params;
  const foundUser = findSingleUser(users, id);

  if (!foundUser) {
    res.status(404).send(`User does not exist with ID ${id}`);
    return;
  }

  res.json(foundUser);
  return;
};

// update a user's ticket counts
const editUser = (req, res) => {
  if (!Object.keys(req.body).length) {
    res.status(400).send("Include body when editing a user's ticket count");
    return;
  }

  const { ticketsSubmitted, ticketsResolved, ownTicketsResolved } = req.body;
  const { id } = req.params;
  const foundUser = findSingleUser(users, id);

  if (!foundUser) {
    res.status(404).send(`Cannot edit: User does not exist with ID ${id}`);
    return;
  }

  if (ticketsSubmitted) {
    foundUser.ticketsSubmitted = [
      ...foundUser.ticketsSubmitted,
      ticketsSubmitted,
    ];
    updatedUsers = replaceUser(users, foundUser);
    fs.writeFileSync(usersJsonPath, JSON.stringify(updatedUsers));
    res.json(foundUser);
    return;
  }

  if (ticketsResolved) {
    foundUser.ticketsResolved = [
      ...foundUser.ticketsResolved,
      ticketsSubmitted,
    ];
    updatedUsers = replaceUser(users, foundUser);
    fs.writeFileSync(usersJsonPath, JSON.stringify(updatedUsers));
    res.json(foundUser);
    return;
  }

  if (ownTicketsResolved) {
    foundUser.ownTicketsResolved = [
      ...foundUser.ownTicketsResolved,
      ownTicketsResolved,
    ];

    updatedUsers = replaceUser(users, foundUser);
    fs.writeFileSync(usersJsonPath, JSON.stringify(updatedUsers));
    res.json(foundUser);
    return;
  }

  res.status(400).send("Error: Invalid body included when editing a user");
  return;
};

module.exports = { getUsers, getSingleUser, editUser };
