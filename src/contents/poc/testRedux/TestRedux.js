import React from 'react';
import CounterContainer from './CounterContainer';
import TodoContainer from './TodoContainer';
import Sample from './Sample';

function TestRedux() {
  return (
    <div>
      <CounterContainer />
      <TodoContainer />
      <Sample />
    </div>
  );
}

export default TestRedux;
