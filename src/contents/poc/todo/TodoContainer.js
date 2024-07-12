import React from 'react';
import PropTypes from 'prop-types';

function TodoContainer(props) {
  const { children } = props;
  return (
    <div className="todo-container">
      <div className="todo-title">To Do List</div>
      <div className="todo-content">{children}</div>
    </div>
  );
}

TodoContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TodoContainer;
