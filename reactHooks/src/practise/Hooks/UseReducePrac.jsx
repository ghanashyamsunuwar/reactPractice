import React, { useReducer } from "react";
const UsereducePrac = () => {
    const reducer = (state, action) => {
        if(action.type == 'INCREMENT'){
            return state + 1;
        }
        if(action.type === 'DECREMENT'){
            return state - 1;
        }
    }
    //usereducer in alternative to usestate and it is user for bigger or complex project 
    const [count, dispatch] = useReducer(reducer, 0)
 
  return (
    <div>
        for reducer
      <h1>{count}</h1>
      <button onClick={() => dispatch({type: "INCREMENT"})}>increment</button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>decrement</button>
    </div>
  );
};
export default UsereducePrac;
