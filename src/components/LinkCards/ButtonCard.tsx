import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Cards.module.css'

interface ButtonCardProps {
  isDarkTheme: boolean;
}


function ButtonCard({isDarkTheme}:ButtonCardProps) {
  const [cardImage, setCardImage] = useState("src/assets/icons8-view-48-black.png");
  useEffect(() => {
    console.log("Dark theme button card",isDarkTheme)
    // Update the image source based on dark mode
    const newImage = isDarkTheme ? 'src/assets/icons8-view-48-black.png': 'src/assets/icons8-view-48.png';
    setCardImage(newImage);
  }, [isDarkTheme]);

  return (
    <>
        <div  className={styles.cardBody}>
            <Link to="buttons" className={styles.cardImage}>
              <img src="src\assets\cardspecific\button.png"></img>
            </Link>
            <div className={styles.cardTitle}>
              <Link to="buttons">
                <p>Buttons</p>
              </Link>
            </div>
            <a className={styles.cardDocs} target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"><img src={cardImage} alt="View Docs"></img></a>
        </div>
        
        
    </>
  )
}

export default ButtonCard