import { login, logout } from '../stores/actions/app.actions';
import { setUser } from '../stores/actions/users.actions';
import AppStore from '../stores/stores/app.store';
import UsersStore from '../stores/stores/users.store';

export function loginUser(userName) {
  AppStore.dispatch(login());
  UsersStore.dispatch(setUser(userName));
}

export function logoutUser() {
  AppStore.dispatch(logout());
  UsersStore.dispatch(setUser(''));
}
