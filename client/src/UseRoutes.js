<<<<<<< HEAD
import React from "react";
import { useRoutes } from "react-router-dom";
import Board from "./components/Board";
import Layout from "./components/Layout";
import MyTodos from "./components/MyTodos";
import Label1 from "./components/Notes";

=======
import React from 'react';
import { useRoutes } from 'react-router-dom';
import Board from './components/Board';
import Layout from './components/Layout';
import MyTodos from './components/MyTodos';
import Label1 from './pages/Label/Label1';
import Label2 from './pages/Label/Label2';
import Label3 from './pages/Label/Label3';
>>>>>>> 14c76955495a3f17d490989f7ef9840b67749390
const AppRoutes = () => {
  return useRoutes([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "board",
          element: <Board />,
        },
        {
          path: "mytodos",
          element: <MyTodos />,
        },
        {
<<<<<<< HEAD
          path: "notes",
          element: <Label1 head={{ BgColor: "red", textColor: "white" }} />,
=======
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
>>>>>>> 14c76955495a3f17d490989f7ef9840b67749390
        },
      ],
    },
  ]);
};

export default AppRoutes;
