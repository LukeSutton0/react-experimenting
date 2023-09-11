import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstButton from './components/FirstButton'
import RedButton from './components/RedButton/RedButton'
import PropTest from './components/PropTest/PropTest'
import UseStateButton from './components/UseStateButton/UseStateButton'
import ConditionalRender from './components/ConditionalRender/ConditionalRender'
import ListsAndKeys from './components/ListsAndKeys/ListsAndKeys'

function App() {
  const [count, setCount] = useState(0)

  const [showConditionalComponent, setShowConditionalComponent] = useState(false);
  const toggleConditionalComponent = () => {setShowConditionalComponent(!showConditionalComponent);};


  return (
    <>
      <h1>Vite + React</h1>

      <div>
        <FirstButton/>
        <RedButton/>
        <FirstButton/>
      </div>
      <div>
        <PropTest firstString="Test" secondString="MySecondString" firstInt={5}  />
        <PropTest firstString="Another String" secondString="Wow" firstInt={99}  />
      </div>
      <div>
        <UseStateButton/>
      </div>
      <div>
        <button onClick={toggleConditionalComponent}>
          Toggle Conditional Component
        </button>
        {showConditionalComponent && <ConditionalRender />}
      </div>
      <div>
        <ListsAndKeys/>
      </div>
    </>
  )
}

export default App
