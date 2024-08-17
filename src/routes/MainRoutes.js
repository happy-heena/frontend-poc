import DashbardDefault from '@pages/dashboard';
import Dashboard from '../layouts/Dashboard';

const MainRoutes = [
  {
    path: '',
    element: <Dashboard />,
    children: [
      {
        path: '/',
        element: <DashbardDefault />,
      },
    ],
  },
];

export default MainRoutes;
