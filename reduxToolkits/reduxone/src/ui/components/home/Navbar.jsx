import React from 'react'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const count = useSelector((state) => state.counter.value)
  return (
    <div style={{backgroundColor:'red', height:"100px", width:'500px'}}>navbar

    {count}
    </div>
  )
}

export default Navbar