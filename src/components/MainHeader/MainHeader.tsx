import React, { useState } from 'react'
import styles from './MainHeader.module.css'

function MainHeader() {
    const [currentImage, setCurrentImage] = useState('./src/assets/icons8-sun-50.png');
    const handleButtonClick = () => {
        // Check the current image and swap to the other one
        const newImage = currentImage === './src/assets/icons8-sun-50.png ' ? './src/assets/icons8-sun-50.png' : './src/assets/icons8-sun-50.png';
        setCurrentImage(newImage);
      };

  return (
    <div className={styles.titlebar}>
        <h1 className={styles.mainHeader}>Experimenting With React</h1>
        <img className={styles.darkLight} src={currentImage} alt="Dark Light Image" onClick={handleButtonClick}/>
    </div>
  )
}

export default MainHeader