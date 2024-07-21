import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  increaseAsync,
  decreaseAsync,
  increaseAsyncSaga,
  decreaseAsyncSaga,
} from '@modules/counter';
import PropTypes from 'prop-types';

function Counter({ number, onIncrease, onDecrease }) {
  const dispatch = useDispatch();
  const onIncreaseAsync = useCallback(
    () => dispatch(increaseAsync()),
    [dispatch],
  );
  const onDecreaseAsync = useCallback(
    () => dispatch(decreaseAsync()),
    [dispatch],
  );
  const onIncreaseAsyncSaga = useCallback(
    () => dispatch(increaseAsyncSaga()),
    [dispatch],
  );
  const onDecreaseAsyncSaga = useCallback(
    () => dispatch(decreaseAsyncSaga()),
    [dispatch],
  );

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button type="button" onClick={onIncrease}>
          +1
        </button>
        <button type="button" onClick={onDecrease}>
          -1
        </button>
        <button type="button" onClick={onIncreaseAsync}>
          +1 after 1 second
        </button>
        <button type="button" onClick={onDecreaseAsync}>
          -1 after 1 second
        </button>
        <button type="button" onClick={onIncreaseAsyncSaga}>
          +1 after 1 second saga
        </button>
        <button type="button" onClick={onDecreaseAsyncSaga}>
          -1 after 1 second saga
        </button>
      </div>
    </div>
  );
}

Counter.propTypes = {
  number: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

export default Counter;
