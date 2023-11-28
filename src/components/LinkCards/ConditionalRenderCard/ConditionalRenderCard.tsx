import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Cards.module.css'
function ConditionalRenderCard() {
  return (
    <>
        <div  className={styles.cardBody}>
            <Link to="conditionalrender" className={styles.cardImage}>
              <img src="src\assets\cardspecific\conditionalRender.jpg"></img>
              {/* https://unsplash.com/photos/a-person-writing-on-a-piece-of-paper-next-to-a-keyboard-Cg60_WXjvC4?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash */}
            </Link>
            <div className={styles.cardTitle}>
              <Link to="conditionalrender">
                <p>Conditional Rendering</p>
              </Link>
            </div>
            <a className={styles.cardDocs} target="_blank" href="https://react.dev/learn/conditional-rendering"><img src="src\assets\icons8-view-48-black.png"></img></a>
        </div>
        
        
    </>
  )
}

export default ConditionalRenderCard