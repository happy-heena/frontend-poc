import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import counter, { counterSaga } from './counter';
import todos from './todos';
import sample, { sampleSaga } from './sample';
import loading from './loading';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';

const rootReducer = combineReducers({
  auth,
  counter,
  todos,
  sample,
  loading,
  user,
  write,
  post,
});

export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐 주는 역할이다.
  yield all([
    authSaga(),
    userSaga(),
    writeSaga(),
    postSaga(),
    counterSaga(),
    sampleSaga(),
  ]);
}

export default rootReducer;
