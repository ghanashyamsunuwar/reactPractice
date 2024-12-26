import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './ui/features/counterSlice';
import Sidebar from './ui/components/sidebar'

function App() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

  return (
    <>
    <Sidebar/>
    <button onClick={()=> dispatch(increment())}>+</button>
      {count}
      <button onClick={()=> dispatch(decrement())}>-</button>
    </>
  )
}

export default App
