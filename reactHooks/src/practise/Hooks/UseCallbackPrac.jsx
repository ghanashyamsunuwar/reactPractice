import React, { useCallback, useState } from 'react'
import Props from './Props';

const UseCallbackPrac = () => {
    const [data, setData] = useState('right');
    const [count, setCount] = useState(0);

    const getData = useCallback(() => {
        return 'janam'
    },[])
  return (
    <div>
        <Props data={data} getData={getData}/>
        <button onClick={() => {setCount(count + 1)}}>
            change data {count}
        </button>
        <h1>usecallback is use to memoizes function defination and use memo is use for meomizes computed value  or variable </h1>
    </div>
  )
}

export default UseCallbackPrac