import React, { useState } from 'react'

import styles from './UseStateButton.module.css'



export default function UseStateButton() {
  const [useButtonTest, setButtonTest] = useState("defaultState");
  const [useFavouriteColour, setFavouriteColour] = useState("white")

  function changeText(){
    //get current state
    setButtonTest((currentState) => {
      return currentState === "defaultState" ? "clicked" : "defaultState";
    });
  }

  function favouriteColour(){
    setFavouriteColour((currentState)=>{
      return currentState === "white" ? "black":"white";
    })
  }

  const secondButtonBackground = useFavouriteColour === 'white' ? styles.white : styles.black;

  return (
    <div>
      <button onClick={() => changeText()}>{useButtonTest}</button>
      <button onClick={() => favouriteColour()} className={secondButtonBackground}>
        Change Background
      </button>
    </div>
  );
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