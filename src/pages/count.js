import { inject, observer } from "mobx-react";
import { store, useStore } from "@/stores/index";
import dynamic from "next/dynamic";

const Counter = observer(() => {
  const {
    appStore,
    counterStore: { count, increment, decrement },
  } = useStore();
  const {
    themeToggle,
    theme,
    settings: { name, cookie },
    setSetting,
  } = appStore;
  console.log('render')
  return (
    <div>
      <div>
        <button onClick={() => appStore.themeToggle()}>theme: {theme}</button>
      </div>
      <p>Count: {count}</p>
      

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <p>name: {name} - cookie: {cookie ? 'yes' : 'no'}</p>
      <button
        onClick={() => {
          increment();
          setSetting({
            name: "elvin",
            cookie: false,
          });
        }}
      >
        Set setting
      </button>
    </div>
  );
});

export default Counter;
