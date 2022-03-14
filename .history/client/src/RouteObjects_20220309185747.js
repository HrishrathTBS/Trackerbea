import Layout from './Components/Layout';
import Board from './components/Board';
import MyTodos from './components/MyTodos';
import Label1 from './components/Label1';
import Label2 from './components/Label2';
import Label3 from './components/Label3';

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
        component: <Label1 />,
      },
      {
        path: PathObject.root.label2,
        component: <Label2 />,
      },
      {
        path: PathObject.root.label3,
        component: <Label3 />,
      },
    ],
  },
};
