import './App.css'
import usebgColorHooks from './assets/customHooks/bgColorHooks';
import useCounter from './assets/customHooks/customHooks'

function App() {
  // const [add, sub] = useCustomHooks(10);
  const { count, increment, decrement, reset } = useCounter(10);
  const {toggle, white} = usebgColorHooks();

  return (
    <>
    <div style={{backgroundColor: white ? 'blue' : 'black'}}>
      janam custome hooks
      <h1>Count: {count}</h1>
      <h1>{white}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={toggle}>changeBG</button>
    </div>
    </>
  )
}

export default App
