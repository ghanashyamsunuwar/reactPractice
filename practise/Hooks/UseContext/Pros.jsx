import React from 'react'
import { useContext } from 'react'
import { counterContext } from './context/Context'


const Pros = () => {
    const value = useContext(counterContext)
  return (
    <div>
       this is count {value.count}
       <button onClick={()=> value.setCount(value.count + 1)}>
        increment from props
       </button>
    </div>
  )
}

export default Pros