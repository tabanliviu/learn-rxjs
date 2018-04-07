import { StoreAction, StoreReducer } from './store';

export type OtherReducerAction = 'ADD_OTHER';

export type OtherReducer = StoreReducer<OtherReducerAction>;

export const initialState = {
  loading: false,
  loaded: false,
  data: []
};

export function otherReducer(state = initialState, action: StoreAction<OtherReducerAction>) {
  switch (action.type) {
    case 'ADD_OTHER':
      const data = [...state.data, action.payload];

      return {
        ...state,
        data
      };
    default:
      return state;
  }
}
