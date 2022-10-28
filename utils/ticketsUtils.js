const findSingleTicket = (ticketsArray, id) =>
  ticketsArray.find((ticket) => ticket.id === id);

const replaceTicket = (ticketsArray, foundticket) => {
  return ticketsArray.map((ticket) => {
    if (ticket.id === foundticket.id) {
      return foundticket;
    }
    return ticket;
  });
};

const filterTickets = (ticketsArray, isResolved) =>
  ticketsArray.filter((ticket) => isResolved === ticket.isResolved);

module.exports = { findSingleTicket, replaceTicket, filterTickets };
