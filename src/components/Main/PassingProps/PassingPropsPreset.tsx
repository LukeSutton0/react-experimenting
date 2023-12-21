import React from 'react'
import PassingProps from './PassingProps'

function PassingPropsPreset() {
  return (
    <div>
      <PassingProps
            text={{name: "Luke", id: "123xyG"}}
            size={40}
          />
      
      <PassingProps
          text={{name: "Dan", id: "hjfnD"}}
          size={20}
          />
      <PassingProps
          text={{name: "James", id: "2254ay"}}
          size={30}
      />
    </div>
  )
}

export default PassingPropsPreset
