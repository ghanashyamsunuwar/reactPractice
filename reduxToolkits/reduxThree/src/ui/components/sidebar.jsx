import React from 'react'
import { useSelector } from 'react-redux'

const sidebar = () => {
    const count = useSelector((state)=> state.counter.value)
  return (
    <div>sidebar

        {count}
    </div>
  )
}

export default sidebar