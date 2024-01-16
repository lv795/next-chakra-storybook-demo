import { makeObservable,observable, action, computed } from 'mobx';

class AppStore {
  isDark = false;
  settings = {
    name: 'John Doe',
    cookie: true,
  }
  constructor() {
    makeObservable(this, {
      isDark: observable,
      settings: observable,
      theme: computed,
      themeToggle: action.bound,
      setSetting: action.bound,
    });
  }


  get theme() {
    return this.isDark ? 'dark' : 'light';
  }

  setSetting(value) {
    this.settings = value;
  }

  themeToggle(){
      this.isDark = !this.isDark;
    
  }
}

export default AppStore;
