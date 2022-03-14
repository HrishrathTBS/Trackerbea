import Layout from './Components/Layout';
import Board from './components/Board';
import MyTodos from './components/MyTodos';

export const PathObject = {
  root: {
    index: '/',
    board: '/board',
    mytodos: '/mytodos',
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
    ],
  },
};
