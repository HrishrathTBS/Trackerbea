import React from 'react';
import { useRoutes } from 'react-router-dom';
import Board from './components/Board';
import Layout from './components/Layout';
import MyTodos from './components/MyTodos';

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
      ],
    },
  ]);
};

export default AppRoutes;
