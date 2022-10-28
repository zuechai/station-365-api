const express = require("express");
const router = express.Router();

const {
  getUsers,
  getSingleUser,
  editUser,
} = require("../controllers/usersController");

router.get("/", getUsers);

router.get("/:id", getSingleUser);

router.patch("/:id", editUser);

module.exports = router;
