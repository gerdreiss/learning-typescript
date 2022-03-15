import { FetchTodosAction, Todo } from '../actions';
import { ActionType } from '../actions/types';

export const todosReducer = (state: Todo[] = [], action: FetchTodosAction): Todo[] => {
  switch (action.type) {
    case ActionType.FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};
