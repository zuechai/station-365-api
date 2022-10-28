const fs = require("fs");
const { v4: uuid } = require("uuid");
const {
  findSingleTicket,
  replaceTicket,
  filterTickets,
} = require("../utils/ticketsUtils");

const ticketsJsonPath = "./data/tickets.json";

const tickets = JSON.parse(fs.readFileSync(ticketsJsonPath));

// get all unresolved tickets
const getUnresolvedTickets = (_req, res) => {
  const unresolvedTickets = filterTickets(tickets, false);

  res.json(unresolvedTickets);
};

// get all tickets resolved and unresolved
const getAllTickets = (_req, res) => {
  res.json(tickets);
};

const getUserTickets = (req, res) => {
  const { id: userId } = req.params;
  const userTickets = tickets.filter((ticket) => ticket.submittedBy === userId);
  res.json(userTickets);
  return;
};

// get a single ticket
const getSingleTicket = (req, res) => {
  const { id } = req.params;
  const foundTicket = findSingleTicket(tickets, id);

  if (!foundTicket) {
    res.status(404).send(`Ticket does not exist with ID ${id}`);
    return;
  }

  res.json(foundTicket);
  return;
};

// createTicket
const createTicket = (req, res) => {
  const { body } = req;

  if (!Object.keys(body).length) {
    res.status(400).send("Body must include include all properties, but ID");
    return;
  }

  const newTicket = { id: uuid(), ...body };

  updatedTickets = [...tickets, newTicket];

  fs.writeFileSync(ticketsJsonPath, JSON.stringify(updatedTickets));
  res.json(updatedTickets);
  return;
};

// edit tickets
const editTicket = (req, res) => {
  const { body } = req;
  const { id } = req.params;

  if (!Object.keys(body).length) {
    res.status(400).send("Must include a body to edit the ticket item");
    return;
  }

  const { votesFor, votesAgainst, isResolved } = body;
  const foundTicket = findSingleTicket(tickets, id);

  if (votesFor) {
    if (!idExists(foundTicket.votesFor)) {
      foundTicket.votesFor = [...foundTicket.votesFor, votesFor];
    } else {
      res.status(400).send("ID already exist in the array");
      return;
    }
  }

  if (votesAgainst) {
    if (!idExists(foundTicket.votesAgainst)) {
      foundTicket.votesAgainst = [...foundTicket.votesAgainst, votesAgainst];
    } else {
      res.status(400).send("ID already exist in the array");
      return;
    }
  }

  if (isResolved) {
    foundTicket.isResolved = true;
  }

  const updatedTickets = replaceTicket(tickets, foundTicket);

  fs.writeFileSync(ticketsJsonPath, JSON.stringify(updatedTickets));

  res.json(updatedTickets);
  return;
};

module.exports = {
  getUnresolvedTickets,
  getAllTickets,
  getUserTickets,
  getSingleTicket,
  createTicket,
  editTicket,
};
