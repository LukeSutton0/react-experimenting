import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cards.module.css'
function CustomHooksCard() {
  return (
    <>
        <div  className={styles.cardBody}>
            <Link to="customhooks" className={styles.cardImage}>
              <img src="src\assets\cardspecific\customHook.jpg"></img>
              {/* https://pixabay.com/photos/hook-fishing-fishing-hook-7418284/*/}
            </Link>
            <div className={styles.cardTitle}>
              <Link to="customhooks">
                <p>Custom Hooks</p>
              </Link>
            </div>
            <a className={styles.cardDocs} target="_blank" href="https://react.dev/learn/reusing-logic-with-custom-hooks"><img src="src\assets\icons8-view-48-black.png"></img></a>
        </div>
        
        
    </>
  )
}

export default CustomHooksCard