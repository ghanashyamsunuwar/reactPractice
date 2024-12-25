import React from 'react'
import { useSelector } from 'react-redux'

export const Navbar = () => {
    const count = useSelector((state)=> state.counter.value)
  return (
    <div style={{backgroundColor:'red', width:'300px', height:'300px', display:'flex', flexDirection:'column'}}>
        <span>This is from navbar</span>
        {count}
    </div>
  )
}
