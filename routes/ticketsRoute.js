const express = require("express");
const router = express.Router();

const {
  getUnresolvedTickets,
  getSingleTicket,
  getAllTickets,
  getUserTickets,
  createTicket,
  editTicket,
} = require("../controllers/ticketsController");

// no body required
router.get("/", getUnresolvedTickets);

// no body required
router.get("/all", getAllTickets);

router.get("/all/:id", getUserTickets);

// no body required, just the id from req.params.id
router.get("/:id", getSingleTicket);

// body with all properties filled and req.params.id required
router.post("/", createTicket);

// body with properties for votesFor, votesAgainst, and/or isResolved required
router.patch("/:id", editTicket);

module.exports = router;
