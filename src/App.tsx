import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstButton from './components/FirstButton'
import RedButton from './components/RedButton/RedButton'
import PropTest from './components/PropTest/PropTest'
function App() {
  const [count, setCount] = useState(0)

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
        <PropTest firstString="Another String" secondString="Wow this is easy" firstInt={99}  />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
