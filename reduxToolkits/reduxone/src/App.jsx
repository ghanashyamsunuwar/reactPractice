import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './ui/components/home/navbar'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, multiply } from './ui/feature/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  const [amount, setAmount] = useState();

  const handleChange = (e) => {
    setAmount(e.target.value)
  }
  

  return (
    <>
      <div>
        <Navbar/>
        {count}
        <button onClick={()=> dispatch(increment())} >+</button>
        <button onClick={()=> dispatch(decrement())}>-</button>
        <button onClick={()=> dispatch(multiply())}>*</button>
        <input
        value= {amount}
        type='number'
        onChange={handleChange}
        ></input>
        <button onClick={()=> dispatch(incrementByAmount(amount))}>Submit</button>
      </div>
    </>
  )
}

export default App
