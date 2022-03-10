import React from "react";
import { useRoutes } from "react-router-dom";
import Board from "./components/Board";
import Layout from "./components/Layout";
import MyTodos from "./components/MyTodos";
import Label1 from "./components/Notes";

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
          path: "notes",
          element: <Label1 head={{ BgColor: "red", textColor: "white" }} />,
        },
      ],
    },
  ]);
};

export default AppRoutes;
