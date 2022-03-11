<<<<<<< HEAD
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
=======
import Layout from './Components/Layout';
import Board from './components/Board';
import MyTodos from './components/MyTodos';
import Label1 from './pages/Label/Label1';
import Label2 from '../pages/Label/Label2';
import Label3 from '../pages/Label/Label3';

export const PathObject = {
  root: {
    index: '/',
    board: '/board',
    mytodos: '/mytodos',
    label1: '/label1',
    label2: '/label2',
    label3: '/label3',
>>>>>>> 14c76955495a3f17d490989f7ef9840b67749390
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
<<<<<<< HEAD
        path: PathObject.root.notes,
        component: <Notes />,
=======
        path: PathObject.root.label1,
        component: <Label1 />,
      },
      {
        path: PathObject.root.label2,
        component: <Label2 />,
      },
      {
        path: PathObject.root.label3,
        component: <Label3 />,
>>>>>>> 14c76955495a3f17d490989f7ef9840b67749390
      },
    ],
  },
};
