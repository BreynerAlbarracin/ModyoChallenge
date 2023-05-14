const UsersActions = {
  addUser: 'ADD_USER',
  searchUser: 'SEARCH_USER',
};

export function addUser(user) {
  return { type: UsersActions.addUser, user };
}

export function searchUser(userName) {
  return { type: UsersActions.searchUser, userName };
}
