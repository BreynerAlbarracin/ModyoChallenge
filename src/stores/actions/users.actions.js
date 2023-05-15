export const UsersActions = {
  setUser: 'SET_USER',
  addUserScore: 'ADD_USERS_SCORE',
};

export function addUser(user) {
  return {
    type: UsersActions.addUser,
    user: {
      userId: user,
      success: 0,
      fails: 0,
    },
  };
}

export function addUserScore(user) {
  return { type: UsersActions.addUserScore, user };
}

export function setUser(userName) {
  return { type: UsersActions.setUser, userName };
}
