import { inject, observer } from 'mobx-react';
import { store, useStore } from '@/stores/index'

const Counter = observer(() => {
  const { counterStore: {count , increment,decrement } } = useStore()
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
})

export default Counter;