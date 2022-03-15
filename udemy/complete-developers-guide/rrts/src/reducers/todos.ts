import { Action, ActionType, Todo } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
    case ActionType.FETCH_TODOS:
      return action.payload;
    case ActionType.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
