import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import styles from './Cards.module.css';


interface CardProperties {
  linkTo: string;
  img: {
    url: string;
    altText: string;
  };
  title: string;
  docsLink: string;
}

interface Card {
  cardName: string;
  cardProperties: CardProperties;
}

interface CardListProps {
  isDarkTheme: boolean;
  cardList: {
    name: string; //name of cardlist (not = cardName)
    cards: Card[]; // array
  };
}


const CardHandler = ({isDarkTheme, cardList}:CardListProps) => {
  // console.log(cardList);
  const [viewDocsImage, setViewDocsImage] = useState("src/assets/icons8-view-48-black.png");
  const backgroundColours = {
    black: '#ffffff0d',
    white: '#0000000d',
  }
  const [cardBodyColour,setCardBodyColour] = useState(backgroundColours.black);
  

  useEffect(() => {
    console.log("Dark theme button card",isDarkTheme)
    // Update the image source based on dark mode
    const updatedImage = isDarkTheme ? 'src/assets/icons8-view-48-black.png': 'src/assets/icons8-view-48.png';
    const updatedCardBodyColour = isDarkTheme? backgroundColours.black : backgroundColours.white; 
    setViewDocsImage(updatedImage);
    setCardBodyColour(updatedCardBodyColour);
    // document.cardBody.style.background = cardBodyColour;

  }, [isDarkTheme]);

  return (
    <>
      {cardList.cards.map((card, index) => (
        <div key={index} className={styles.cardBody}>
          <Link to={card.cardProperties.linkTo} className={styles.cardImage}>
            <img src={`src/assets/cardspecific/${card.cardProperties.img.url}`} alt={card.cardProperties.img.altText} />
          </Link>
          <div className={styles.cardTitle}>
            <Link to={card.cardProperties.linkTo}>
              <p>{card.cardProperties.title}</p>
            </Link>
          </div>
          <a className={styles.cardDocs} target="_blank" rel="noopener noreferrer" href={card.cardProperties.docsLink}>
            <img src={viewDocsImage} alt="View Docs" />
          </a>
        </div>
      ))}
    </>
  );
};

export default CardHandler