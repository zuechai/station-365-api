const express = require("express");
const router = express.Router();

const {
  getUsers,
  getSingleUser,
  editUser,
} = require("../controllers/usersController");

// gets all users
router.get("/", getUsers);

// gets a single user
router.get("/:id", getSingleUser);

// edits a user's properties of ticketsSubmitted, ticketsResolved, ownTicketsResolved
router.patch("/:id", editUser);

module.exports = router;
