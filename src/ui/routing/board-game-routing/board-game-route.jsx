import React from 'react';
import BoardGamePage from '../../pages/board-game.page';
import AuthPageLayout from '../../components/layouts/auth-page.layout';
import ScoreTablePage from '../../pages/score-table.page';

const BoardGameRoute = [
  {
    path: '/board',
    element: <AuthPageLayout />,
    children: [
      {
        path: '',
        element: <BoardGamePage />,
      },
      {
        path: 'score',
        element: <ScoreTablePage />,
      },
    ],
  },
];

export default BoardGameRoute;
