import { configureStore } from '@reduxjs/toolkit';
import UsersReducer from '../reducers/users.reducer';
import UsersState from '../state/users.state';

const usersStatePersistent = JSON.parse(localStorage.getItem('UsersState')) || UsersState;

const UsersStore = configureStore({
  reducer: UsersReducer,
  preloadedState: usersStatePersistent,
});

UsersStore.subscribe(() => {
  localStorage.setItem('UsersState', JSON.stringify(UsersStore.getState()));
});

export default UsersStore;
