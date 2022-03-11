import React from 'react';
import { useRoutes } from 'react-router-dom';
import Board from './components/Board';
import Layout from './components/Layout';
import MyTodos from './components/MyTodos';
import Label1 from './pages/Label/Label1';
import Team1 from './pages/teams/Team1';
import Team2 from './pages/teams/Team2';
const AppRoutes = () => {
  return useRoutes([
    {
      path: '',
      element: <Layout />,
      children: [
        {
          path: 'board',
          element: <Board />,
        },
        {
          path: 'mytodos',
          element: <MyTodos />,
        },
        {
          path: 'label1',
          element: <Label1 />,
        },
        {
          path: 'team1',
          element: <Team1 />,
        },
        {
          path: 'team2',
          element: <Team2 />,
        },
      ],
    },
  ]);
};

export default AppRoutes;
