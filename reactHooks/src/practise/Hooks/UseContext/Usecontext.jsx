import React, { useState } from 'react'
import Pros from './Pros'
import { counterContext } from './context/Context'

const Usecontext = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <counterContext.Provider value={{count, setCount}}>
       <Pros/>
       <button onClick={()=> setCount(count + 1)}>
        Increment counter
       </button>
       </counterContext.Provider>
    </div>
  )
}

export default Usecontext