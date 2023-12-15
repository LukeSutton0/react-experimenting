import React from 'react'
import { Link, To } from 'react-router-dom';
import styles from './Cards.module.css';


interface CardPropsInterface {
  isDarkTheme: boolean;
  cardList: {
    cardName: string;
    cardProperties: {
      linkTo: string;
      img: {
        url: string;
        altText: string;
      };
      title: string;
      docsLink: string;
    };
  }[];
}

const CardHandler: React.FC<CardPropsInterface> = ({ isDarkTheme, cardList }) => {
  console.log(cardList);
  return (
    <div>
      
      {cardList.map((cardName, index) => (
        <div key={index} className={styles.cardBody}>
          <Link to={cardName.cardProperties.linkTo} className={styles.cardImage}>
            <img src={`src/assets/cardspecific/${cardName.cardProperties.img.url}`} alt={cardName.cardProperties.img.altText} />
          </Link>
          <div className={styles.cardTitle}>
            <Link to={cardName.cardProperties.linkTo}>
              <p>{cardName.cardProperties.title}</p>
            </Link>
          </div>
          <a className={styles.cardDocs} target="_blank" href={cardName.cardProperties.docsLink}>
            <img src="src/assets/icons8-view-48-black.png" alt="View Docs" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default CardHandler