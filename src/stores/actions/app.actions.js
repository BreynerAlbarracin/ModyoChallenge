export const AppActions = {
  showLoading: 'SHOW_LOADING',
  hiddenLoading: 'HIDDEN_LOADING',
  login: 'LOGIN',
  logout: 'LOGOUT',
};

export function showLoading() {
  return { type: AppActions.showLoading, loading: true };
}

export function hiddenLoading() {
  return { type: AppActions.hiddenLoading, loading: false };
}

export function login() {
  return { type: AppActions.login, login: true };
}

export function logout() {
  return { type: AppActions.logout, login: false };
}
