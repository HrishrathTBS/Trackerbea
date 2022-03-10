import Layout from "./Components/Layout";
import Board from "./components/Board";
import MyTodos from "./components/MyTodos";
import Notes from "./components/Notes";

export const PathObject = {
  root: {
    index: "/",
    board: "/board",
    mytodos: "/mytodos",
    notes: "/notes",
  },
};

export const RouteObject = {
  root: {
    path: PathObject.root.index,
    component: <Layout />,
    children: [
      {
        path: PathObject.root.board,
        component: <Board />,
      },
      {
        path: PathObject.root.mytodos,
        component: <MyTodos />,
      },
      {
        path: PathObject.root.notes,
        component: <Notes />,
      },
    ],
  },
};
