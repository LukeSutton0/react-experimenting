import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cards.module.css'
function UseRefTestCard() {
  return (
    <>
        <div  className={styles.cardBody}>
            <Link to="usereftest" className={styles.cardImage}>
              <img src="src\assets\cardspecific\useRefTest.png"></img>
              {/* https://www.folio3.com/mobile/blog/how-to-use-useref-hook-efficiently-react/ */}
            </Link>
            <div className={styles.cardTitle}>
              <Link to="usereftest">
                <p>Use Ref</p>
              </Link>
            </div>
            <a className={styles.cardDocs} target="_blank" href="https://react.dev/reference/react/useRef"><img src="src\assets\icons8-view-48-black.png"></img></a>
        </div>
        
        
    </>
  )
}

export default UseRefTestCard