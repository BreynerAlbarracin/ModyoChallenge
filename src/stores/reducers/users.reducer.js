import UsersState from '../state/users.state';
import { UsersActions } from '../actions/users.actions';

function UsersReducer(state = UsersState, action = {}) {
  switch (action.type) {
    case UsersActions.addUserScore:
      return { ...state, users: [...state.users, action.user] };
    case UsersActions.setUser:
      return { ...state, userId: action.userName };
    default:
      return state;
  }
}

export default UsersReducer;
