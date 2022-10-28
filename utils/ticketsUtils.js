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

const idExists = (array, id) => {
  const foundId = array.find((item) => item.id === id);
  if (foundId) {
    return true;
  }
  return false;
};

module.exports = { findSingleTicket, replaceTicket, filterTickets, idExists };
