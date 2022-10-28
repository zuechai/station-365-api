const findSingleUser = (usersArray, id) =>
  usersArray.find((user) => user.id === id);

const replaceUser = (usersArray, foundUser) => {
  return usersArray.map((user) => {
    if (user.id === foundUser.id) {
      return foundUser;
    }
    return user;
  });
};

module.exports = { findSingleUser, replaceUser };
