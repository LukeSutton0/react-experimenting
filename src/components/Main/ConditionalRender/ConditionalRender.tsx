import { useState } from 'react'
import ConditionalRenderComp from './ConditionalRenderComp';

export default function ConditionalRender() {
  
    const [showConditionalComponent, setShowConditionalComponent] = useState(false);
    const toggleConditionalComponent = () => {setShowConditionalComponent(!showConditionalComponent);};
    return (
        <div>
            <button onClick={toggleConditionalComponent}>
            Toggle Conditional Component
            </button>
            {showConditionalComponent && <ConditionalRenderComp />}
        </div>
  )
}
