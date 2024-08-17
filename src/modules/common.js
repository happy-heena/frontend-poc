import { createAction, handleActions } from 'redux-actions';

const OPEN_DRAWER = 'common/OPEN_DRAWER';

export const openDrawer = createAction(OPEN_DRAWER);

const initialState = {
  isDrawerOpen: false,
};

const common = handleActions(
  {
    [OPEN_DRAWER]: (state) => ({
      ...state,
      isDrawerOpen: !state.isDrawerOpen,
    }),
  },
  initialState,
);

export default common;
