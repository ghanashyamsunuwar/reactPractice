import React from 'react'

const PropsDrilling = () => {
    const data = 'Data from Parent Component'
  return (
    <div>
    <h1>THIS IS PARENT COMPONENT</h1>
    {data}
    <Children data={data}/>
    </div>
  )
}

export default PropsDrilling

const Children = ({data}) => {
    return (
        <div>
            <h1>This is Chilern component : </h1>
        <GrandChildren data={data} />
        </div>
    )
}

const GrandChildren = ({data}) => {
    return (
        <div>
            <h1>This is GrandChilern component : </h1>
            <GrandGrandChildren data={data}/>
        </div>
    )
}
const GrandGrandChildren = ({data}) => {
    return (
        <div>
            <h1>This is GrandGrandChilern component : {data}</h1>
        </div>
    )
}