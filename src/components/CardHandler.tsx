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
  onCardClick: () => void; // Add the onCardClick prop
}


const CardHandler = ({ isDarkTheme, mainOutputRef, cardList, onCardClick }: CardHandlerProps & CardListProps) => {
  // console.log(cardList);
  
  const [viewDocsImage, setViewDocsImage] = useState("src/assets/icons8-view-48-black.png");
  const backgroundColours = {
    black: '#ffffff0d',
    white: '#0000000d'
  }
  const [cardBodyColour,setCardBodyColour] = useState(backgroundColours.black); //Could use local storage
  const [scrollTriggered, setScrollTriggered] = useState(false); // Track scroll trigger
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Update the image source based on dark mode
    const updatedImage = isDarkTheme ? 'src/assets/icons8-view-48-black.png': 'src/assets/icons8-view-48.png';
    const updatedCardBodyColour = isDarkTheme? backgroundColours.black : backgroundColours.white; 
    setViewDocsImage(updatedImage);
    setCardBodyColour(updatedCardBodyColour);
  }, [isDarkTheme]);

  const handleInternalLinkClick = () => {
    onCardClick();
    setScrollTriggered(true); // Trigger the scroll after content update
  };
  
  useEffect(() => {
    if (scrollTriggered && mainOutputRef.current && !loading) {
      const timeoutId = setTimeout(() => {
        mainOutputRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
        setScrollTriggered(false); // Reset the trigger
      }, 100); // Adjust the timeout if needed
  
      // Cleanup timeout if component unmounts or scroll is triggered again
      return () => clearTimeout(timeoutId);
    }
  }, [scrollTriggered, mainOutputRef]);


  useEffect(() => {
    // Simulate a loading delay
    const timeoutId = setTimeout(() => {
      setLoading(false); // Finish loading
    }, 2000); // Adjust the timeout as needed

    // Cleanup timeout if component unmounts or scroll is triggered again
    return () => clearTimeout(timeoutId);
  }, []);


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