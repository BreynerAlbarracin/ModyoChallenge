import { configureStore } from 'redux';
import BoardGameReducer from '../reducers/board-game.reducer';

const BoardGameStore = configureStore(BoardGameReducer);

export default BoardGameStore;
