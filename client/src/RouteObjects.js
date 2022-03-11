import Layout from './Components/Layout';
import Board from './components/Board';
import MyTodos from './components/MyTodos';
import Label1 from './pages/Label/Label1';
import Team1 from './pages/teams/Team1';
import Team2 from './pages/teams/Team2';

export const PathObject = {
  root: {
    index: '/',
    board: '/board',
    mytodos: '/mytodos',
    label1: '/label1',
    team1: '/team1',
    team2: '/team2',
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
        path: PathObject.root.team1,
        component: <Team1 />,
      },
      {
        path: PathObject.root.team2,
        component: <Team2 />,
      },
    ],
  },
};
