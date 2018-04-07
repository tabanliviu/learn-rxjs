export type StoreState = { [key: string]: any };
export type StoreSubscriber = (state: StoreState) => void;
export type StoreAction<A extends string> = { type: A, payload: any };
export type StoreReducer<A extends string> = (state: any, action: { type: A, payload: any }) => any;

export class Store<R extends StoreReducer<A>, A extends string> {
  private subscribers: StoreSubscriber[];
  private reducers: { [key: string]: R };
  private state: StoreState;

  constructor(reducers = {} as { [key: string]: R },
              state = {}) {
    this.subscribers = [];
    this.reducers = reducers;
    this.state = this.reduce(state, {} as StoreAction<A>);
  }

  subscribe(fn: StoreSubscriber) {
    this.subscribers = [...this.subscribers, fn];

    fn(this.value);

    return () => {
      this.subscribers = this.subscribers.filter(fn => fn !== fn);
    };
  }

  get value() {
    return this.state;
  }

  dispatch(action: StoreAction<A>) {
    this.state = this.reduce(this.state, action);

    this.subscribers.forEach(subscriberFn => subscriberFn(this.value));
  }

  private reduce(state: StoreState, action: StoreAction<A>): StoreState {
    const newState = {};

    for (const prop in this.reducers) {
      newState[prop] = this.reducers[prop](state[prop], action);
    }

    return newState;
  }
}
