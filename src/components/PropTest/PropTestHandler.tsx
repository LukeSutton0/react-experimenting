import React from 'react'
import PropTest from './PropTest'
function PropTestHandler() {
  return (
    <>
      <PropTest firstString="Test" secondString="SecondString" firstInt={5}  />
      <PropTest firstString="String" secondString="Aaaaaaaaaaaaaaaaa" firstInt={99}  />
    </>
  )
}

export default PropTestHandler