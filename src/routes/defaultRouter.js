import { Outlet } from 'react-router-dom';

import { Action, MovingBox } from '@action';
import { Extension, GoogleCalendar } from '@extension';

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
        path: '/lib/*',
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
    ],
  },
];

export default defaultRouter;
