import {
  BoardGameActions,
} from '../actions/board-game.actions';
import BoardGameState from '../state/board-game.state';

function BoardGameReducer(state = BoardGameState, action = {}) {
  switch (action.type) {
    case BoardGameActions.registerSuccess:
      return { ...state, success: state.success + action.count };
    case BoardGameActions.registerFail:
      return { ...state, fails: state.fails + action.count };
    case BoardGameActions.loadImagesToPlay:
      return { ...state, images: action.imagesToPlay };
    case BoardGameActions.resetBoard:
      return {
        ...state, images: [], success: 0, fails: 0,
      };
    default:
      return state;
  }
}

export default BoardGameReducer;
