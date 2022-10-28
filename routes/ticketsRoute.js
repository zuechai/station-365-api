const express = require("express");
const router = express.Router();

const {
  getUnresolvedTickets,
  getSingleTicket,
  getAllTickets,
  createTicket,
  editTicket,
} = require("../controllers/ticketsController");

router.get("/", getUnresolvedTickets);

router.get("/", getAllTickets);

router.get("/:id", getSingleTicket);

router.put("/", createTicket);

router.patch("/:id", editTicket);

module.exports = router;
