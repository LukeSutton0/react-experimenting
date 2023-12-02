import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cards.module.css'
function UseStateButtonCard() {
  return (
    <>
        <div  className={styles.cardBody}>
            <Link to="usestatebutton" className={styles.cardImage}>
              <img src="src\assets\cardspecific\useStateButton.jpg"></img>
              {/* https://unsplash.com/photos/black-traffic-light-turned-on-during-night-time-iJ-uantQb9I */}
            </Link>
            <div className={styles.cardTitle}>
              <Link to="usestatebutton">
                <p>Use State Button</p>
              </Link>
            </div>
            <a className={styles.cardDocs} target="_blank" href="https://react.dev/reference/react/useState"><img src="src\assets\icons8-view-48-black.png"></img></a>
        </div>
        
        
    </>
  )
}

export default UseStateButtonCard