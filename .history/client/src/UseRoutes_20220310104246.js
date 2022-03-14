import React from 'react';
import { useRoutes } from 'react-router-dom';
import Board from './components/Board';
import Layout from './components/Layout';
import MyTodos from './components/MyTodos';
import Label1 from './components/Label1';
import Label2 from './components/Label2';
import Label3 from './pages/Label/Label3';
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
