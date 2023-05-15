import { configureStore } from '@reduxjs/toolkit';
import BoardGameReducer from '../reducers/board-game.reducer';
import BoardGameState from '../state/board-game.state';

const BoardGameStore = configureStore({ reducer: BoardGameReducer }, BoardGameState);

export default BoardGameStore;
