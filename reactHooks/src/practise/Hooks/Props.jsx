import React, { memo } from 'react'

const Props = ({data}) => {
  
    console.log('navbar is render')
  return (
    <div>
        data is {data}
      
    </div>
  )
}

export default memo(Props)