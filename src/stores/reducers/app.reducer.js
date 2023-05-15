import {
  AppActions,
} from '../actions/app.actions';
import AppState from '../state/app.state';

function AppReducer(state = AppState, action = {}) {
  switch (action.type) {
    case AppActions.showLoading:
      return { ...state, isLoading: action.loading };
    case AppActions.hiddenLoading:
      return { ...state, isLoading: action.loading };
    case AppActions.login:
      return { ...state, isLogin: action.login };
    case AppActions.logout:
      return { ...state, isLogin: action.login };
    default:
      return state;
  }
}

export default AppReducer;
