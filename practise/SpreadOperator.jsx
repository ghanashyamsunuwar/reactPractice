import React, { useState } from "react"

const SpreadOperator = () => {
    const a = [1,2,3]
    const b = [4,5,6]
    const data = [...a, b]
    console.log('firstdata',data)

    const f = {c:1, d:2}
    const g = {d:3, e:4}
    const dataTwo = {...f, ...g}
    console.log(dataTwo)

    const arrayData = [
        {name:'janam', hobbies:["rider","player"]},
        {name :'hero', hobbies:["biker", "singer"]}
    ]
    const [user,setUser] = useState(arrayData)  
    console.log(arrayData)
    

    return (
        <div>
        Practising spreadOperator
        {data}   
        {
            arrayData.map((items)=>(
                <h1>
                    name: {items.name}
                    <h2>
                    {arrayData.hobbies.map((items,index)=>(
                        <h2 key={index}>
                            hobbies: {items}
                        </h2>
                    ))}
                    </h2>    
                </h1>
               
            ))
        }
        </div>
    )
}
export default SpreadOperator;