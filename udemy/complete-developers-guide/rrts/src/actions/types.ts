import { DeleteTodoAction, FetchTodosAction } from './todos';

export enum ActionType {
  FETCH_TODOS,
  DELETE_TODO,
}

export type Action = DeleteTodoAction | FetchTodosAction;
