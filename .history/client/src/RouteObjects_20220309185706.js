import Layout from './Components/Layout';
import Board from './components/Board';
import MyTodos from './components/MyTodos';

export const PathObject = {
  root: {
    index: '/',
    board: '/board',
    mytodos: '/mytodos',
    label1: '/label1',
    label2: '/label2',
    label3: '/label3',
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
        path: PathObject.root.label1,
        component: <MyTodos />,
      },
      {
        path: PathObject.root.mytodos,
        component: <MyTodos />,
      },
      {
        path: PathObject.root.mytodos,
        component: <MyTodos />,
      },
    ],
  },
};
