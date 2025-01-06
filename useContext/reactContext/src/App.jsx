import { useState } from 'react'
import './App.css'
import { Button } from './Button'
import { counterContext } from './context/couterContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{backgroundColor: 'green', display:'flex', borderColor:'white'}}>
        {count}
      </div>
      <counterContext.Provider value={{count, setCount}}>
      <Button/>
      </counterContext.Provider>
    </>
  )
}

export default App
