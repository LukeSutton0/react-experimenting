import React from 'react';
import styles from './redButton.module.css'
import FirstButton from './FirstButton'

function RedButton(){
    return(
        <div>
            <FirstButton/>
            <button className={styles.redButton} onClick={()=> console.log("Red")}>Red Button</button>
            <FirstButton/>
        </div>
    )
}
export default RedButton;