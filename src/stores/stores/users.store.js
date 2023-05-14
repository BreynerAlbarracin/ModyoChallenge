import { configureStore } from 'redux';
import UsersReducer from '../reducers/users.reducer';

const UsersStore = configureStore(UsersReducer);

export default UsersStore;
