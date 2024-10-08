const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action && action.type);
  console.log('previous status', store.getState());
  console.log('action', action);
  next(action);
  console.log('next status', store.getState());
  console.groupEnd();
};

export default loggerMiddleware;
