import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3;

export const insert = createAction(INSERT, (text) => ({
  id: () => {
    id += 1;
    return id;
  },
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (_id) => _id);
export const remove = createAction(REMOVE, (_id) => _id);

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'learning redux',
      done: true,
    },
    {
      id: 2,
      text: 'use react and redux',
      done: false,
    },
  ],
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todoes: state.todos.concat(todo),
    }),
    [TOGGLE]: (state, { payload: _id }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === _id ? { ...todo, done: !todo.done } : todo,
      ),
    }),
    [REMOVE]: (state, { payload: _id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== _id),
    }),
  },
  initialState,
);

export default todos;
