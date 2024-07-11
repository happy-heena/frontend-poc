const MAIN_MENU = [
  {
    id: 'home',
    path: '/',
    name: 'Home',
    status: 'active',
  },
  {
    id: 'component',
    path: '/component',
    name: 'Component',
  },
  {
    id: 'action',
    path: '/action',
    name: 'Action',
  },
  {
    id: 'extension',
    path: '/extension',
    name: 'Extension',
  },
];

const SUB_MENU = [
  {
    id: 'movingBox',
    parent: 'action',
    path: '/action/moving-box',
    name: 'Moving Box',
  },
  {
    id: 'smallModal',
    parent: 'component',
    path: '/component/small-modal',
    name: 'Small Modal',
  },
  {
    id: 'googleCalendar',
    parent: 'extension',
    path: '/extension/google-calendar',
    name: 'Google Calendar',
  },
];

export { MAIN_MENU, SUB_MENU };
