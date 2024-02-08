import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../dux/counter';
import todoReducer from '../dux/todo';

import apiMiddleware from '../middleware/core/api';
import apiErrorMiddleware from '../middleware/core/apiError';
import todoMiddleware from '../middleware/todo';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer
  },
  middleware: [todoMiddleware, apiMiddleware, apiErrorMiddleware]
});
