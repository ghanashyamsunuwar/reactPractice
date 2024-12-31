import React from 'react'
import Component from './Component'

const HOC = () => {
  return (
    <div style={{display:'flex' , justifyContent:'space-around'}}>
        <div style={{backgroundColor:'Red', width:'100px', height:'100px'}}>
            this is red
            <Component/>
        </div>
        <div style={{backgroundColor:'Green', width:'100px', height:'100px'}}>
            this is green
            <Component/>
        </div>
        <div style={{backgroundColor:'Yellow', width:'100px', height:'100px'}}>
            this is yellow
            <Component/>
        </div>
    </div>
  )
}

export default HOC