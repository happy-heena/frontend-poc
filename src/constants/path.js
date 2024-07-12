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
  {
    id: 'poc',
    path: '/poc',
    name: 'POC',
  },
];

const ACTION = [
  {
    id: 'movingBox',
    parent: 'action',
    path: '/action/moving-box',
    name: 'Moving Box',
  },
];
const EXTENSION = [
  {
    id: 'googleCalendar',
    parent: 'extension',
    path: '/extension/google-calendar',
    name: 'Google Calendar',
  },
];
const COMPONENT = [
  {
    id: 'smallModal',
    parent: 'component',
    path: '/component/small-modal',
    name: 'Small Modal',
  },
  {
    id: 'subMenu',
    parent: 'component',
    path: '/component/sub-menu',
    name: 'Sub Menu',
  },
  {
    id: 'calculator',
    parent: 'component',
    path: '/component/calculator',
    name: 'Calculator',
  },
];

const POC = [
  {
    id: 'todo',
    parent: 'poc',
    path: '/poc/todo',
    name: 'To DO List',
  },
  {
    id: 'news',
    parent: 'poc',
    path: '/poc/news',
    name: 'News',
  },
];
const SUB_MENU = [...COMPONENT, ...ACTION, ...EXTENSION, ...POC];

export { MAIN_MENU, SUB_MENU };
