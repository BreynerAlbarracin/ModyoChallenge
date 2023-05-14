import React from 'react';
import LoginPage from '../pages/login.page';
import BoardGameRoute from './board-game-routing/board-game-route';

const AppRoutes = [
  {
    path: '/',
    element: <LoginPage />,
    children: [BoardGameRoute],
  },
];

export default AppRoutes;
