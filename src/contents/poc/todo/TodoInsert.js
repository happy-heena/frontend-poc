import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');

      // submit 이벤트는 브라우저에서 새로고침을 발생시킴. 새로고침 방지
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="todo-insert" onSubmit={onSubmit}>
      <input placeholder="input to do" value={value} onChange={onChange} />
      <button
        type="submit"
        aria-label="insert button"
        className="btn-todo-insert"
      >
        <MdAdd />
      </button>
    </form>
  );
}

TodoInsert.propTypes = {
  onInsert: PropTypes.func.isRequired,
};

export default TodoInsert;
