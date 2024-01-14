import {Outlet } from "react-router-dom";
import styles from './root.module.css'
import MainHeader from "../components/Main/MainHeader/MainHeader";
import CardHandler from "../components/CardHandler.tsx"
import { useEffect, useState, useRef } from "react";
import ConsoleLogger from "../components/Main/ConsoleLogger/ConsoleLogger.tsx";
import cardListJson from '../assets/cardList.json'


interface CardList {
  name: string;
  cards: {
    cardName: string;
    cardProperties: {
      linkTo: string;
      img: {
        url: string;
        altText: string;
        lazyColour: string;
      };
      title: string;
      docsLink: string;
    };
  }[];
}

export default function Root() {

    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
    const [cardList, setCardList] = useState<CardList>({name : "", cards: [] }); // Initialize with an empty object
    const mainOutputRef = useRef(null);
    const handleThemeToggle = () => {
      setIsDarkTheme((prevTheme) => !prevTheme);
    };    
    useEffect(() => {
      const modifiedCardList = {
        ...cardListJson,
        cards: cardListJson.cards.slice(0, -1), //remove dummy card
      };
      setCardList(modifiedCardList);
    }, []); //on mount
    return (
      <>
        <div>
          <MainHeader isDarkTheme={isDarkTheme} onThemeToggle={handleThemeToggle}/>
        </div>
        <div className={styles.centreNav}>
          <nav className={styles.navbar}>
            <CardHandler isDarkTheme={isDarkTheme}  mainOutputRef={mainOutputRef} cardList={cardList}/>
          </nav>
        </div> 
        <div ref={mainOutputRef} className={styles.mainBodyWrapper}>
          <div className={styles.mainBody}>
            <Outlet/>
            <ConsoleLogger/>
          </div>
        </div>
      </>
    );
  }