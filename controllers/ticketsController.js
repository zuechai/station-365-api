const fs = require("fs");

const ticketsJsonPath = "./data/tickets.json";

const tickets = JSON.parse(fs.readFileSync(ticketsJsonPath));

const getTickets = (_req, res) => {
  res.json(tickets);
};

module.exports = { getTickets };
