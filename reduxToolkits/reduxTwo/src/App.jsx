import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './ui/features/counter/CounterSlice';
import { Navbar } from './ui/components/Navbar';

function App() {
  
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <>
    <Navbar/>
    <button onClick={()=> dispatch(increment())}>+</button>
     {count}
     <button onClick={() => dispatch(decrement())}>-</button>
    </>
  )
}

export default App
