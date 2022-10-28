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

// body with all properties filled and req.params.id required
router.put("/", createTicket);

// body with properties for votesFor, votesAgainst, and/or isResolved required
router.patch("/:id", editTicket);

module.exports = router;
