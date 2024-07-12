import React, { useCallback, useState, useRef } from 'react';
import '@assets/styles/todo.css';
import TodoContainer from './TodoContainer';
import TodoInsert from './TodoInsert';
import ToDoList from './TodoList';

function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'abc',
      checked: true,
    },
    {
      id: 2,
      text: 'abc',
      checked: true,
    },
    {
      id: 3,
      text: 'abc',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );
  return (
    <TodoContainer>
      <TodoInsert onInsert={onInsert} />
      <ToDoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoContainer>
  );
}

export default Todo;
