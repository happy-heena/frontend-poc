import React from 'react';
import PropTypes from 'prop-types';
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
} from 'react-icons/md';

function TodoListItem({ todo, onRemove, onToggle }) {
  const { id, text, checked } = todo;
  return (
    <div className="todo-list-item">
      <div
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
        className={`todo-checkbox ${checked && 'checked'}`}
        onClick={() => onToggle(id)}
        onKeyDown={() => onToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="todo-text">{text}</div>
      </div>
      <button
        type="button"
        className="todo-remove"
        onClick={() => onRemove(id)}
        aria-label="remove button"
      >
        <MdRemoveCircleOutline />
      </button>
    </div>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoListItem;
