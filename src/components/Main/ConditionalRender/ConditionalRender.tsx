import React, { useState } from 'react'
import ConditionalRenderComp from './ConditionalRenderComp';

export default function ConditionalRender() {
  
    const [showConditionalComponent, setShowConditionalComponent] = useState(false);
    const toggleConditionalComponent = () => {setShowConditionalComponent(!showConditionalComponent);};
    return (
        <>
            <button onClick={toggleConditionalComponent}>
            Toggle Conditional Component
            </button>
            {showConditionalComponent && <ConditionalRenderComp />}
        </>
  )
}
