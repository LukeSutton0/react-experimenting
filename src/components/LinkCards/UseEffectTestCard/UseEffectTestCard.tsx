import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Cards.module.css'
function UseEffectTestCard() {
  return (
    <>
        <div className={styles.cardBody}>
            <Link to="useeffecttest" className={styles.cardImage}>
              <img src="src\assets\cardspecific\useEffectTest.jpg"></img>
              {/* https://unsplash.com/photos/a-bright-yellow-light-shining-in-the-dark-o4HzEnjXG8M */}
            </Link>
            <div className={styles.cardTitle}>
              <Link to="useeffecttest">
                <p>Use Effect</p>
              </Link>
            </div>
            <a className={styles.cardDocs} target="_blank" href="https://react.dev/reference/react/useEffect"><img src="src\assets\icons8-view-48-black.png"></img></a>
        </div>
        
        
    </>
  )
}

export default UseEffectTestCard