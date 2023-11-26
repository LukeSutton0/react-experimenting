import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Cards.module.css'
function ButtonCard() {
  return (
    <div className={styles.cardBody}>
        <Link to="buttons">
            <img src="src\assets\button.png"></img>
        </Link>
        
    </div>
  )
}

export default ButtonCard