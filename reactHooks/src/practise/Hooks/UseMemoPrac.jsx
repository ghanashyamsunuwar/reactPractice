import React, { useMemo, useState } from "react";
const nums = new Array(30_000_000).fill(0).map((_, i) => {
    return {
      index: i,
      isMagicNumber: i === 29_000_000,
    };
  });
const UseMemoPrac = ({data}) => {
  
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(nums);

//   const magic = number.find(item=> item.isMagicNumber == true)
  const magic = useMemo(() => 
    number.find(item => item.isMagicNumber === true)
  ,[number]);
  return (
    <div>
      <h1>useMemo</h1>
      <a>
        In react when a state change then component are re-render so, if we have
        a code which operation take longer time then such code hang the page so
        we use memo to render such code only once and we can add dependency like
        useEffect on it
      </a>
      <h1>Magical number is {magic.index}</h1>
      <button
        onClick={() => {
         if(count === 10){
            setNumber(new Array(10_000_000).fill(0).map((_, i) => {
                return {
                  index: i,
                  isMagicNumber: i === 9_000_000,
                };
              }))
         }
          setCount(count + 1);
        }}
      >
        find magical number {count}
      </button>
    </div>
  );
};
export default UseMemoPrac;
