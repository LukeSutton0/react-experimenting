import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Cards.module.css'
function CustomHooks2Card() {
  return (
    <>
        <div  className={styles.cardBody}>
            <Link to="customhooks2" className={styles.cardImage}>
              <img src="src\assets\cardspecific\hook2.png"></img>
              {/* https://pixabay.com/vectors/bait-fish-fishing-hook-2026318/ */}
            </Link>
            <div className={styles.cardTitle}>
              <Link to="customhooks2">
                <p>Custom Hooks Two</p>
              </Link>
            </div>
            <a className={styles.cardDocs} target="_blank" href="https://react.dev/learn/reusing-logic-with-custom-hooks"><img src="src\assets\icons8-view-48-black.png"></img></a>
        </div>
        
        
    </>
  )
}

export default CustomHooks2Card