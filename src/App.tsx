import { useState } from 'react'
import styles from './App.module.css'
import RedButton from './components/RedButton/RedButton'
import PropTest from './components/PropTest/PropTest'
import UseStateButton from './components/UseStateButton/UseStateButton'
import ConditionalRender from './components/ConditionalRender/ConditionalRender'
import ListsAndKeys from './components/ListsAndKeys/ListsAndKeys'
import UseRefTest from './components/UseRefTest/UseRefTest'
import EventHandling from './components/EventHandling/EventHandling'
import PreventDefaultBehaviour from './components/PreventDefaultBehaviour/PreventDefaultBehaviour'
import CustomHooks from './components/CustomHooks/CustomHooks'
import UseEffectTest from './components/UseEffectTest/UseEffectTest'
import LocalStorageHook from './components/CustomHooks/LocalStorageHook'
import PassingPropsPreset from './components/PassingProps/PassingPropsPreset'

import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home'
import PropTestPreset from './components/PropTest/PropTestPreset'
//docker run -p 5173:5173 lukesutton0/reactexperimenting:1.0

function App() {
  
  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ConditionalRender">Conditional Render</Link></li>
          <li><Link to="/CustomHooks">Custom Hooks</Link></li>
          <li><Link to="/EventHandling">Event Handling</Link></li>
          <li><Link to="/ListsAndKeys">Lists and Keys</Link></li>
          <li><Link to="/PreventDefaultBehaviour">Prevent Default Behaviour</Link></li>
          <li><Link to="/RedButton">Red Button</Link></li>
          <li><Link to="/UseEffectTest">Use Effect Test</Link></li>
          <li><Link to="/UseRefTest">Use Ref Test</Link></li>
          <li><Link to="/UseStateButton">Use State Button</Link></li>
          <li><Link to="/PassingProps">Passing Props</Link></li>
          <li><Link to="/PropTest">Prop Test</Link></li>
        </ul>
      </nav>
      {/* //only changes part inside routes when linked clicked */}
      <div className={styles.routes}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ConditionalRender" element={<ConditionalRender/>} />
        <Route path="/CustomHooks" element={<CustomHooks/>} />
        <Route path="/EventHandling" element={<EventHandling/>} />
        <Route path="/ListsAndKeys" element={<ListsAndKeys/>} />
        <Route path="/PassingProps" element={<PassingPropsPreset/>} />
        <Route path="/PreventDefaultBehaviour" element={<PreventDefaultBehaviour/>} />
        <Route path="/PropTest" element={<PropTestPreset/>} />
        <Route path="/RedButton" element={<RedButton/>} />
        <Route path="/UseEffectTest" element={<UseEffectTest/>} />
        <Route path="/UseRefTest" element={<UseRefTest/>} />
        <Route path="/UseStateButton" element={<UseStateButton/>} />
        <Route/>  
      </Routes>
      </div>
    </>
  )
}

export default App
