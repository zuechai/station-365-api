const express = require("express");
const router = express.Router();

const {
  getUnresolvedTickets,
  getSingleTicket,
  getAllTickets,
  createTicket,
  editTicket,
} = require("../controllers/ticketsController");

// no body required
router.get("/", getUnresolvedTickets);

// no body required
router.get("/all", getAllTickets);

// no body required, just the id from req.params.id
router.get("/:id", getSingleTicket);

// body with all properties filled and req.params.id
router.put("/", createTicket);

//
router.patch("/:id", editTicket);

module.exports = router;
