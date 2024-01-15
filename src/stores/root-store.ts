import CounterStore from './counter'

export interface RootStore {
  _counterStore: CounterStore
}
export class RootStore {
  constructor() {
    this._counterStore = new CounterStore()
  }

  get counterStore() {
    return this._counterStore
  }
}
