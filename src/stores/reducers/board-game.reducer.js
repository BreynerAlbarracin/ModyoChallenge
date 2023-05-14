import {
  registerSuccess,
  registerFail,
  loadImagesToPlay,
} from "../actions/board-game.actions";
import BoardGameState from "../state/board-game.state";

function BoardGameReducer(state = BoardGameState, action = {}) {
  switch (action.type) {
    case registerSuccess():
      return { ...state, success: state.success + action.success };
    case registerFail():
      return { ...state, fails: state.fails + action.fails };
    case loadImagesToPlay():
      return { ...state, images: action.imagestoPlay };
    default:
      return state;
  }
}

export default BoardGameReducer;
