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
        {
          path: 'label1',
          element: <Label1 />,
        },
        {
          path: 'label2',
          element: <Label2 />,
        },
        {
          path: 'label3',
          element: <Label3 />,
        },
      ],
    },
  ]);
};

export default AppRoutes;
