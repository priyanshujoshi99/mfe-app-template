import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseCounter,
  getCountValue,
  increaseCounter
} from '../../dux/counter';
import { fetchTodo, getTodos } from '../../dux/todo';

import styles from './Counter.module.css';

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCountValue);
  const handleAdd = () => dispatch(increaseCounter(1));
  const handleSubtract = () => dispatch(decreaseCounter(1));
  const handleFetch = () => {
    count > 0 && dispatch(fetchTodo(count));
  };
  const todos = useSelector(getTodos);

  return (
    <div className={styles.container}>
      <div className={styles.value} data-testid="count">
        {count}
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.button} onClick={handleSubtract}>
          -
        </button>
        <button className={styles.button} onClick={handleAdd}>
          +
        </button>
      </div>
      <div className={styles.fetchContainer}>
        <button className={styles.button} onClick={handleFetch}>
          FETCH
        </button>
      </div>

      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}> {todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Counter;
