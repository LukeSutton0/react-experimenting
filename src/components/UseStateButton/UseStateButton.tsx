import React, { useState } from 'react'

export default function UseStateButton() {
  const [useButtonTest, setButtonTest] = useState("defaultState");

  function changeText(){
    //get current state
    setButtonTest((currentState) => {
      return currentState === "defaultState" ? "clicked" : "defaultState";
    });
  }



  return (
    <button onClick={() => changeText()}>{useButtonTest}</button>
  )
}



 // function reset(){
  //   setButtonTest("defaultState");
  // }
    /* <button onClick={() => reset()}> Reset </button> */




{/* <div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
</div> */}