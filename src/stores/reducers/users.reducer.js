import UsersState from "../state/users.state";
import { addUser } from "../actions/users.actions";

function UsersReducer(state = UsersState, action = {}) {
  switch (action.type) {
    case addUser():
      return { ...state, users: state.users.push(action.user) };
    default:
      return state;
  }
}

export default UsersReducer;
