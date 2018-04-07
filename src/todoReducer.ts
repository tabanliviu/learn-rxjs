import { StoreAction, StoreReducer } from './store';

export type TodoReducerAction = 'ADD_TODO' | 'REMOVE_TODO';

export type TodoReducer = StoreReducer<TodoReducerAction>;

export const initialState = {
  loading: false,
  loaded: false,
  data: []
};

export function todoReducer(state = initialState, action: StoreAction<TodoReducerAction>) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        data: state.data.filter(item => item.text !== action.payload.text)
      };
    default:
      return state;
  }
}
