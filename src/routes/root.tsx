import {Outlet } from "react-router-dom";
import styles from './root.module.css'
import MainHeader from "../components/Main/MainHeader/MainHeader";
import CardHandler from "../components/CardHandler.tsx"
import { useEffect, useState, useRef, useMemo } from "react";
import ConsoleLogger from "../components/Main/ConsoleLogger/ConsoleLogger.tsx";
import cardListJson from '../assets/cardList.json'
import Spinner from "../components/Spinner.tsx";


// interface CardList {
//   name: string;
//   cards: {
//     cardName: string;
//     cardProperties: {
//       linkTo: string;
//       img: {
//         url: string;
//         altText: string;
//         lazyColour: string;
//       };
//       title: string;
//       docsLink: string;
//     };
//   }[];
// }

export default function Root() {

    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true); // Loading state
    const mainOutputRef = useRef(null);

    const handleThemeToggle = () => {
      setIsDarkTheme((prevTheme) => !prevTheme);
    };    

  // Memoize the card list processing to optimize performance -> otherwise get stuttering
  const cardList = useMemo(() => {
    return {
      ...cardListJson,
      cards: cardListJson.cards.slice(0, -1), // Remove dummy card
    };
  }, [cardListJson]); // Dependencies: Recalculate only if cardListJson changes
    
  
  const outletRef = useRef<HTMLDivElement | null>(null);
   useEffect(() => {
    // Start the timer when the component mounts
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);
    // Cleanup the timer if the component unmounts before the delay completes
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only on mount

  const handleCardClick = () => {
    setLoading(true); // Set loading back to true
    setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 1000);
  };



    return (
      <>
        <div>
          <MainHeader isDarkTheme={isDarkTheme} onThemeToggle={handleThemeToggle}/>
        </div>
        <div className={styles.centreNav}>
          <nav className={styles.navbar}>
            <CardHandler isDarkTheme={isDarkTheme}  mainOutputRef={mainOutputRef} cardList={cardList}  onCardClick={handleCardClick}/>
          </nav>
        </div> 
        <div ref={mainOutputRef} className={styles.mainBodyWrapper}>
          <div className={styles.main}>
            {loading ? (
              <Spinner />
            ) : (
              <div ref={outletRef} className={styles.mainBody}>
                  <Outlet />
                  <ConsoleLogger />
              </div>
            )}
          </div>
        </div>
      </>
    );
  }