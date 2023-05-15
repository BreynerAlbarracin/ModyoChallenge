import LoginRouter from './login-routing/login-routing';
import BoardGameRoute from './board-game-routing/board-game-route';

const AppRoutes = [
  ...LoginRouter,
  ...BoardGameRoute,
];

export default AppRoutes;
