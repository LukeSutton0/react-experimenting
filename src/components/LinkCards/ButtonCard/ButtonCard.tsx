import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Cards.module.css'
function ButtonCard() {
  return (
    <>
        <div  className={styles.cardBody}>
            <Link to="buttons" className={styles.cardImage}>
              <img src="src\assets\cardspecific\button.png"></img>
            </Link>
            <div className={styles.cardTitle}>
              <Link to="buttons">
                <p>Buttons</p>
              </Link>
            </div>
            <a className={styles.cardDocs} target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"><img src="src\assets\icons8-view-48-black.png"></img></a>
        </div>
        
        
    </>
  )
}

export default ButtonCard