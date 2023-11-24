import React, { useState } from 'react'
import ConditionalRender from './ConditionalRender';

function ConditionalRenderHandler() {
  const [showConditionalComponent, setShowConditionalComponent] = useState(false);
  const toggleConditionalComponent = () => {setShowConditionalComponent(!showConditionalComponent);};
  return (
    <>
    <button onClick={toggleConditionalComponent}>
          Toggle Conditional Component
        </button>
        {showConditionalComponent && <ConditionalRender />}
        </>
  )
}

export default ConditionalRenderHandler