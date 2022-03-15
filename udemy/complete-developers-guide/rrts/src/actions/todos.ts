import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from './types';

const url = 'https://jsonplaceholder.typicode.com/todos';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionType.FETCH_TODOS;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionType.DELETE_TODO;
  payload: number;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    dispatch<FetchTodosAction>({
      type: ActionType.FETCH_TODOS,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionType.DELETE_TODO,
    payload: id,
  };
};
