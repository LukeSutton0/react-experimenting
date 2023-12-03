import React, { useEffect, useState } from 'react'
import styles from './MainHeader.module.css'

interface MainHeaderProps {
  isDarkTheme: boolean;
  onThemeToggle: () => void;
}

function MainHeader({isDarkTheme,onThemeToggle}:MainHeaderProps) {
    const [currentImage, setCurrentImage] = useState('./src/assets/icons8-sun-50.png');

    useEffect(() => {
      console.log('isDarkTheme changed:', isDarkTheme);
      document.documentElement.style.setProperty('--background-color', isDarkTheme ? '#121212' : '#FFFFFF');
      document.documentElement.style.setProperty('--text-color', isDarkTheme ? 'rgba(255, 255, 255, 0.87)' : '#121212');

    }, [isDarkTheme]);



    const handleButtonClick = () => {
        // Check the current image and swap to the other one
        const newImage = currentImage === './src/assets/icons8-sun-50.png' ? './src/assets/icons8-sun-50-black.png' : './src/assets/icons8-sun-50.png';
        setCurrentImage(newImage);
        onThemeToggle(); //Call the onThemeToggle prop to update the theme in the Root component
      };

  return (
    <div className={styles.titlebar}>
        <h1 className={styles.mainHeader}>Experimenting With React</h1>
        <img className={styles.darkLight} src={currentImage} alt="Dark Light Image" onClick={handleButtonClick}/>
    </div>
  )
}

export default MainHeader