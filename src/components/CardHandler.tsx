import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import styles from './Cards.module.css';


interface CardProperties {
  linkTo: string;
  img: {
    url: string;
    altText: string;
    lazyColour: string;
  };
  title: string;
  docsLink: string;
}

interface Card {
  cardName: string;
  cardProperties: CardProperties;
}

interface CardListProps {
  cardList: {
    name: string; //name of cardlist (not = cardName)
    cards: Card[]; // array
  };
}

interface CardHandlerProps{
  isDarkTheme: boolean;
  mainOutputRef:React.RefObject<HTMLDivElement>;
}


const CardHandler = ({ isDarkTheme, mainOutputRef, cardList }: CardHandlerProps & CardListProps) => {
  // console.log(cardList);
  const [viewDocsImage, setViewDocsImage] = useState("src/assets/icons8-view-48-black.png");
  const backgroundColours = {
    black: '#ffffff0d',
    white: '#0000000d'
  }
  const [cardBodyColour,setCardBodyColour] = useState(backgroundColours.black); //Could use local storage
  

  useEffect(() => {
    // Update the image source based on dark mode
    const updatedImage = isDarkTheme ? 'src/assets/icons8-view-48-black.png': 'src/assets/icons8-view-48.png';
    const updatedCardBodyColour = isDarkTheme? backgroundColours.black : backgroundColours.white; 
    setViewDocsImage(updatedImage);
    setCardBodyColour(updatedCardBodyColour);
  }, [isDarkTheme]);

  const handleInternalLinkClick = () => {
    //console.log(mainOutputRef.current);
    mainOutputRef.current?.scrollIntoView({ 
    behavior: "smooth", 
    block: "start", // "start" aligns the element to the top of the visible area
    inline: "nearest",}); // ? = optional chaining
  }



  return (
    <>
      {cardList.cards.map((card, index) => (
        <div key={index} className={styles.cardBody} style={{backgroundColor: cardBodyColour}}>
          <Link to={card.cardProperties.linkTo} className={styles.cardImage} onClick={handleInternalLinkClick}>
            <img src={`src/assets/cardspecific/${card.cardProperties.img.url}`} alt={card.cardProperties.img.altText} />
          </Link>
          <div className={styles.cardTitle}>
            <Link to={card.cardProperties.linkTo} onClick={handleInternalLinkClick}>
              <p>{card.cardProperties.title}</p>
            </Link>
          </div>
          <a className={styles.cardDocs} target="_blank" rel="noopener noreferrer" href={card.cardProperties.docsLink}>
            <img src={viewDocsImage} alt="View Docs Image" />
          </a>
        </div>
      ))}
    </>
  );
};

export default CardHandler