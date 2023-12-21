import React from 'react'
import PropTest from './PropTest'
function PropTestHandler() {
  return (
    <div>
      <PropTest firstString="Test" secondString="SecondString" firstInt={5}  />
      <PropTest firstString="String" secondString="Aaaaaaaaaaaaaaaaa" firstInt={99}  />
    </div>
  )
}

export default PropTestHandler