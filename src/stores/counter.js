import { makeAutoObservable, action, runInAction } from 'mobx';

export default class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    runInAction(() => {
      this.count++;
    });
  }

  decrement = () => {
    runInAction(() => {
      this.count--;
    });
  }
}


