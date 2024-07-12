import { Outlet } from 'react-router-dom';

import { Action, MovingBox } from '@action';
import { Extension, GoogleCalendar } from '@extension';
import { Todo, News } from '@poc';

import App from '../App';
import Home from '../contents/common/Home';

const defaultRouter = [
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/action/*',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Action />,
          },
          {
            path: 'moving-box',
            element: <MovingBox />,
          },
        ],
      },
      {
        path: '/extension/*',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Extension />,
          },
          {
            path: 'google-calendar',
            element: <GoogleCalendar />,
          },
        ],
      },
      {
        path: '/poc/*',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Extension />,
          },
          {
            path: 'todo',
            element: <Todo />,
          },
          {
            path: 'news',
            element: <News />,
          },
        ],
      },
    ],
  },
];

export default defaultRouter;
