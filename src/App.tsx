import { useState } from 'react'
import './App.css'
import FirstButton from './components/FirstButton'
import RedButton from './components/RedButton/RedButton'
import PropTest from './components/PropTest/PropTest'
import UseStateButton from './components/UseStateButton/UseStateButton'
import ConditionalRender from './components/ConditionalRender/ConditionalRender'
import ListsAndKeys from './components/ListsAndKeys/ListsAndKeys'
import PassingProps from './components/PassingProps/PassingProps'
import UseRefTest from './components/UseRefTest/UseRefTest'

//docker run -p 5173:5173 lukesutton0/reactexperimenting:1.0

function App() {
  const [showConditionalComponent, setShowConditionalComponent] = useState(false);
  const toggleConditionalComponent = () => {setShowConditionalComponent(!showConditionalComponent);};


  return (
    <>
      <h1>Vite + React</h1>
      <hr></hr>
      <div>
        <FirstButton/>
        <RedButton/>
        <FirstButton/>
      </div>
      <hr></hr>
      <div>
        <PropTest firstString="Test" secondString="SecondString" firstInt={5}  />
        <PropTest firstString="String" secondString="Aaaaaaaaaaaaaaaaa" firstInt={99}  />
      </div>
      <hr></hr>
      <div>
        <UseStateButton/>
      </div>
      <hr></hr>
      <div>
        <button onClick={toggleConditionalComponent}>
          Toggle Conditional Component
        </button>
        {showConditionalComponent && <ConditionalRender />}
      </div>
      <hr></hr>
      <div>
        <ListsAndKeys/>
      </div>
      <hr></hr>
      <div>
        <PassingProps
          text={{name: "Luke", id: "123xyG"}}
          size={40}
        />
      </div>
      <hr></hr>
      <div>
        <UseRefTest/>
      </div>
    </>
  )
}

export default App
