import { Middleware } from '@reduxjs/toolkit';
import { API_SUCCESS, apiAction } from '../dux/api';
import { FETCH_TODO, setTodo } from '../dux/todo';
import { getBaseApiUrl } from '../helpers/generic';

const todoMiddleware: Middleware = () => (next) => (action: any) => {
  const { type, payload } = action;

  next(action);

  switch (type) {
    case FETCH_TODO:
      next(
        apiAction({
          url: `${getBaseApiUrl()}/todos/${payload}`,
          feature: FETCH_TODO
        })
      );
      break;

    case `${FETCH_TODO} ${API_SUCCESS}`:
      if (payload && payload.title) {
        next(setTodo(payload.title));
      }
      break;

    default:
    // do nothing
  }
};

export default todoMiddleware;
