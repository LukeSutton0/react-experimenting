import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cards.module.css'
function PreventDefaultBehaviourCard() {
  return (
    <>
        <div  className={styles.cardBody}>
            <Link to="preventdefaultbehaviour" className={styles.cardImage}>
              <img src="src\assets\cardspecific\preventDefaultBehaviour.jpg"></img>
              {/* https://unsplash.com/photos/red-white-and-blue-round-logo-IQyDL6uS1a0 */}
            </Link>
            <div className={styles.cardTitle}>
              <Link to="preventdefaultbehaviour">
                <p>Prevent Default Behaviour</p>
              </Link>
            </div>
            <a className={styles.cardDocs} target="_blank" href="https://react.dev/learn/responding-to-events#preventing-default-behavior"><img src="src\assets\icons8-view-48-black.png"></img></a>
        </div>
        
        
    </>
  )
}

export default PreventDefaultBehaviourCard