import React,{useContext} from 'react'
import { counterContext } from './context/couterContext'

export const Button = () => {
    const value = useContext(counterContext)
  return (
    <div>
        {value.count}
        <button onClick={() => value.setCount((count) => count + 1)}>add data</button>
    </div>
  )
}
