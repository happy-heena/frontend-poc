import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

// 액션 타입 정의 (모듈 이름/액션 이름)
// 액션 이름 충돌 방지를 위해 모듈 이름을 앞에 추가함
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const INCREASE_SAGA = 'counter/INCREASE_SAGA';
const DECREASE_SAGA = 'counter/DECREASE_SAGA';

// 액션 생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsyncSaga = createAction(INCREASE_SAGA, () => undefined);
export const decreaseAsyncSaga = createAction(DECREASE_SAGA, () => undefined);

export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

function* increaseSaga() {
  yield delay(1000); // wait 1 second
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리한다.
  yield takeEvery(INCREASE_SAGA, increaseSaga);
  // takeLatest는 기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업만 수행한다.
  yield takeLatest(DECREASE_SAGA, decreaseSaga);
}

const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [INCREASE]: (state) => ({ number: state.number + 1 }),
    [DECREASE]: (state) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
