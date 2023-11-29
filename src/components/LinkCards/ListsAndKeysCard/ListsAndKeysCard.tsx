import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Cards.module.css'
function ListsAndKeysCard() {
  return (
    <>
        <div  className={styles.cardBody}>
            <Link to="listsandkeys" className={styles.cardImage}>
              <img src="src\assets\cardspecific\listsAndKeys.jpg"></img>
              {/* https://unsplash.com/photos/a-bunch-of-keys-sitting-on-top-of-a-table-q7h8LVeUgFU */}
            </Link>
            <div className={styles.cardTitle}>
              <Link to="listsandkeys">
                <p>List and Keys</p>
              </Link>
            </div>
            <a className={styles.cardDocs} target="_blank" href="https://react.dev/learn/rendering-lists"><img src="src\assets\icons8-view-48-black.png"></img></a>
        </div>
        
        
    </>
  )
}

export default ListsAndKeysCard