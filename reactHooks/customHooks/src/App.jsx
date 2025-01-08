import './App.css'
import useCounter from './assets/customHooks/customHooks'

function App() {
  // const [add, sub] = useCustomHooks(10);
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <>
    <div>
      janam custome hooks
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
    </>
  )
}

export default App
