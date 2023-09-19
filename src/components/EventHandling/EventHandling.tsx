import React from 'react'

import styles from './EventHandling.module.css'


function handleClick() {
    alert('You clicked me!');
}





function EventHandling() {
  return (
    <>
        <button className={styles.clickButton} onClick={handleClick}>Click Me</button>
        <button onClick={() => {
            alert('You clicked me!');
        }}>Click Me 2</button>
    </>
  )
}

export default EventHandling