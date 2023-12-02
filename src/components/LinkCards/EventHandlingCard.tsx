import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cards.module.css'
function EventHandlingCard() {
  return (
    <>
        <div  className={styles.cardBody}>
            <Link to="eventhandling" className={styles.cardImage}>
              <img src="src\assets\cardspecific\eventHandling.jpg"></img>
              {/* https://unsplash.com/photos/crowd-of-people-sitting-on-chairs-inside-room-F2KRf_QfCqw*/}
            </Link>
            <div className={styles.cardTitle}>
              <Link to="eventhandling">
                <p>Event Handling</p>
              </Link>
            </div>
            <a className={styles.cardDocs} target="_blank" href="https://react.dev/learn/responding-to-events"><img src="src\assets\icons8-view-48-black.png"></img></a>
        </div>
        
        
    </>
  )
}

export default EventHandlingCard