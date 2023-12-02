import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cards.module.css'
function PropTestCard() {
  return (
    <>
        <div  className={styles.cardBody}>
            <Link to="proptest" className={styles.cardImage}>
            <img src="src\assets\cardspecific\propTest.png"></img>
              {/*https://res.cloudinary.com/practicaldev/image/fetch/s--ia59Nw1I--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/s0k2a522gt28n8ooq4c1.PNG*/}
            </Link>
            <div className={styles.cardTitle}>
              <Link to="proptest">
                <p>Prop Test</p>
              </Link>
            </div>
            <a className={styles.cardDocs} href="https://react.dev/learn/conditional-rendering"><img src="src\assets\icons8-view-48-black.png"></img></a>
        </div>
        
        
    </>
  )
}

export default PropTestCard