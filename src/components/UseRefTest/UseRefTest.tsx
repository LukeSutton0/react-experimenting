import React, {useState,useRef,useEffect, ChangeEvent} from "react"

function UseRefTest() {
    const [countNum, setCountNum] = useState(0)
    const renderCount = useRef(1)
    useEffect(()=>{
        renderCount.current += 1
    })

    const InputChange = (e : ChangeEvent<HTMLInputElement>) => {  //e = event
        const newValue = parseInt(e.target.value, 10); //base 10
        if (!isNaN(newValue)) {
        setCountNum(newValue);
        }
    };

  return (
    <>
        <div>useRefTest</div>
        <input
        type="number"
        value={countNum.toString()} // Convert number to string for input value
        onChange={InputChange}
      />
        <div>Current num is {countNum}</div>
        <div>This component rendered {renderCount.current} times</div>
    </>  
  )
}

export default UseRefTest