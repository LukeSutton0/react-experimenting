import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Cards.module.css'
function PassingPropsCard() {
  return (
    <>
        <div  className={styles.cardBody}>
            <Link to="passingprops" className={styles.cardImage}>
              <img src="src\assets\cardspecific\passingProps.jpg"></img>
              {/* https://unsplash.com/photos/black-nikon-dslr-camera-beside-black-framed-eyeglasses-and-black-framed-eyeglasses-SsoKppt2pqY*/}
            </Link>
            <div className={styles.cardTitle}>
              <Link to="passingprops">
                <p>Passing Props</p>
              </Link>
            </div>
            <a className={styles.cardDocs} target="_blank" href="https://react.dev/learn/passing-props-to-a-component"><img src="src\assets\icons8-view-48-black.png"></img></a>
        </div>
        
        
    </>
  )
}

export default PassingPropsCard