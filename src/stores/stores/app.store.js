import { configureStore } from '@reduxjs/toolkit';
import AppReducer from '../reducers/app.reducer';
import AppState from '../state/app.state';

const AppStore = configureStore({ reducer: AppReducer }, AppState);

export default AppStore;
