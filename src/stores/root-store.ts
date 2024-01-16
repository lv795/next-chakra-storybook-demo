import CounterStore from './counter'
import AppStore from './app'

export interface RootStore {
  _counterStore: CounterStore
  _appStore: AppStore
}
export class RootStore {
  constructor() {
    this._counterStore = new CounterStore()
    this._appStore = new AppStore()
  }

  get counterStore() {
    return this._counterStore
  }

  get appStore() {
    return this._appStore
  }
}
