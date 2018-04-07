import { Store } from './store';
import { TodoReducer, todoReducer, TodoReducerAction } from './todoReducer';
import { OtherReducer, otherReducer, OtherReducerAction } from './otherReducer';

class AppStore extends Store<TodoReducer | OtherReducer,
  TodoReducerAction | OtherReducerAction> {
};

const appStore = new AppStore({
  todos: todoReducer,
  other: otherReducer
});

appStore.subscribe(state => {
  log(state);
});

appStore.dispatch({
  type: 'ADD_TODO',
  payload: {
    text: 'A new item'
  }
});

appStore.dispatch({
  type: 'REMOVE_TODO',
  payload: {
    text: 'A new item'
  }
});

function log(arg) {
  console.log(JSON.stringify(arg, null, 2));
}