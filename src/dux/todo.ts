import { IAction } from './interface/ICommonDux';

const prefix = 'todo';
export const FETCH_TODO = `${prefix}/fetchTodo`;
export const SET_TODO = `${prefix}/setTodo`;

export const fetchTodo = (id: number | string) => ({
  type: FETCH_TODO,
  payload: id
});

export const setTodo = (data: string[]) => ({
  type: SET_TODO,
  payload: data
});

const initialState: string[] = [];

const todoReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_TODO:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todoReducer;

// selectors

export const getTodos = ({ todos }: { todos: string[] }) => todos;
