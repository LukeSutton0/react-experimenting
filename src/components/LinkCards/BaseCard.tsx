import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cards.module.css'
function Card() {
  return (
    <>
        <div  className={styles.cardBody}>
            <Link to="" className={styles.cardImage}>
              <img src="src\assets\cardspecific\.jpg"></img>
              {/* https: */}
            </Link>
            <div className={styles.cardTitle}>
              <Link to="">
                <p></p>
              </Link>
            </div>
            <a className={styles.cardDocs} target="_blank" href="https://react.dev/learn/"><img src="src\assets\icons8-view-48-black.png"></img></a>
        </div>
        
        
    </>
  )
}

export default Card