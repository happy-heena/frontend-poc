import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

function ToDoList({ todos, onRemove, onToggle }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ToDoList;
