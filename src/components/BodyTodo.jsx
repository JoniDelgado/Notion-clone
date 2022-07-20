import React, { useReducer } from 'react';
import { TYPES } from '../action/BodyTodoActions';
import {
  bodyTodoReducer,
  bodyTodoInitialState,
} from '../reducer/BodyTodoReducer';

const BodyTodo = () => {
  const [state, dispatch] = useReducer(bodyTodoReducer, bodyTodoInitialState);
  const sumar = () => {
    dispatch({ type: TYPES.CREATE_NEW_TODO });
  };
  const restar = () => {
    dispatch({ type: TYPES.DELETE_CURRENT_TODO });
  };
  return (
    <section className='body-section'>
      <h1>Body todo</h1>
      <h3>{state}</h3>
      <button onClick={sumar}>mas</button>
      <button onClick={restar}>menos</button>
    </section>
  );
};

export default BodyTodo;
