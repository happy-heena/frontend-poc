import { Outlet } from 'react-router-dom';

import { Action, MovingBox } from '@action';
import { Extension, GoogleCalendar } from '@extension';
import { Todo, News, TestRedux } from '@poc';
import { LoginPage, RegisterPage } from '@pages';

import PostListPage from '@pages/PostListPage';
import WritePage from '@pages/WritePage';
import PostPage from '@pages/PostPage';
import ExchangeRate from '@pages/ExchangeRate';
import App from '../App';
import Home from '../contents/common/Home';

const backupRouter = [
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
          {
            path: 'test-redux',
            element: <TestRedux />,
          },
        ],
      },
    ],
  },
];

const defaultRouter = [
  {
    path: '/',
    element: <PostListPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/write',
    element: <WritePage />,
  },
  {
    path: '/:username/:postId',
    element: <PostPage />,
  },
  {
    path: '/exchange-rate',
    element: <ExchangeRate />,
  },
];

export default defaultRouter;
