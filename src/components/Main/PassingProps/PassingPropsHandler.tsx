import React from 'react'
import PassingProps from './PassingProps'

function PassingPropsHandler() {
  return (
    <PassingProps
          text={{name: "Luke", id: "123xyG"}}
          size={40}
        />
  )
}

export default PassingPropsHandler