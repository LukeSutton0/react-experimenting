import React from 'react'
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
    name: string;
    cards: Card[]; // This should be an array
  };
}


const CardHandler = ({isDarkTheme, cardList}:CardListProps) => {
  console.log(cardList);

  // const isValidData = cardList.every(item => Array.isArray(item.cards));
  // if (!isValidData) {
  //   console.error('One or more items in cardList.cards are not arrays:', cardList);
  // }

  return (
    <div>
      {cardList.flatMap((item, index) =>
        item.cards.map((card, cardIndex) => (
          <div key={index * cardList.length + cardIndex} className={styles.cardBody}>
            <Link to={card.cardProperties.linkTo} className={styles.cardImage}>
              <img src={`src/assets/cardspecific/${card.cardProperties.img.url}`} alt={card.cardProperties.img.altText} />
            </Link>
            <div className={styles.cardTitle}>
              <Link to={card.cardProperties.linkTo}>
                <p>{card.cardProperties.title}</p>
              </Link>
            </div>
            <a className={styles.cardDocs} target="_blank" href={card.cardProperties.docsLink}>
              <img src="src/assets/icons8-view-48-black.png" alt="View Docs" />
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default CardHandler