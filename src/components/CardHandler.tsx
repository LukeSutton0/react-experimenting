import React from 'react'

interface CardPropsInterface {
    isDarkTheme: boolean;
  }


function CardHandler({isDarkTheme}:CardPropsInterface) {
  return (
    <div>CardHandler goes here</div>
  )
}

export default CardHandler