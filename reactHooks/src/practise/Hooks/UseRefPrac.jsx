import React,{useState, useEffect, useRef} from 'react'

const UseRefPrac = () => {
    const [count, setCount] = useState(0);
    //useref usecase one it doesnot chnage its value to initinal when page is rerender that means use ref is not
    //re-render when page re-render

    //CASE ONE
    // in down code when we don't use useref then value of a is made 0 when page is rerender but when code useRef is
    //use it doesn't change its value to zero.

   
    const a = useRef(0);
    useEffect(()=> {
        a.current = a.current + 1;
        console.log(`value of a is ${a.current}`)
    })

     //CASE TWO  
    // it is use to manupulate dom in react
    const ref = useRef();
    const btnColor = useRef();
    const findWho = useRef();
  return (
    <div>
        <h3>For use ref</h3>
        <h1>Enter Your Name</h1>
        <h1>Total Click Button {count}</h1>
        {a.current}
        <input></input>
        <button ref={ref} onClick={()=> {setCount(count + 1)}}>
            Save 
        </button>
        <button ref={btnColor} onClick={()=> {ref.current.style.display = 'none'; btnColor.current.style.backgroundColor = 'red'}}>
            Hide Save Button
        </button>

        <div ref={findWho} style={{display:'none'}}>
            I am Janam dai
        </div>
        <button onClick={() => {findWho.current.style.display = 'block'}}>
            who are you ?
        </button>
    </div>
  )
}

export default UseRefPrac