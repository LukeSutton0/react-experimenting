import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root.tsx'
import './index.css'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import ButtonHandler from './components/Buttons/ButtonHandler.tsx'
import PropTestHandler from './components/PropTest/PropTestHandler.tsx'
import UseStateButton from './components/UseStateButton/UseStateButton.tsx'
import ConditionalRenderHandler from './components/ConditionalRender/ConditionalRenderHandler.tsx'
import ListsAndKeys from './components/ListsAndKeys/ListsAndKeys.tsx'
import PassingPropsHandler from './components/PassingProps/PassingPropsHandler.tsx'
import UseRefTest from './components/UseRefTest/UseRefTest.tsx'
import EventHandling from './components/EventHandling/EventHandling.tsx'
import PreventDefaultBehaviour from './components/PreventDefaultBehaviour/PreventDefaultBehaviour.tsx'
import CustomHooks from './components/CustomHooks/CustomHooks.tsx'
import UseEffectTest from './components/UseEffectTest/UseEffectTest.tsx'
import CustomHooks2 from './components/CustomHooks/CustomHooks2.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "buttons",
        element: <ButtonHandler/>
      },
      {
        path:"proptest",
        element: <PropTestHandler/>
      },
      {
        path:"usestatebutton",
        element: <UseStateButton/>
      },
      {
        path:"conditionalrender",
        element: <ConditionalRenderHandler/>
      },
      {
        path:"listsandkeys",
        element: <ListsAndKeys/>
      },
      {
        path:"passingprops",
        element: <PassingPropsHandler/>
      },
      {
        path:"usereftest",
        element: <UseRefTest/>
      },
      {
        path:"eventhandling",
        element: <EventHandling/>
      },
      {
        path:"preventdefaultbehaviour",
        element: <PreventDefaultBehaviour/>
      },
      {
        path:"customhooks",
        element: <CustomHooks/>
      },
      {
        path:"customhooks2",
        element: <CustomHooks2/>
      },
      {
        path:"useeffecttest",
        element: <UseEffectTest/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
