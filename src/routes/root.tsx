import {Outlet } from "react-router-dom";
import styles from './root.module.css'
import MainHeader from "../components/Main/MainHeader/MainHeader";
import CardHandler from "../components/CardHandler.tsx"
import { useEffect, useState } from "react";


export default function Root() {

    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
    const [cardList, setCardList] = useState([]);

    const handleThemeToggle = () => {
      setIsDarkTheme((prevTheme) => !prevTheme);
    };

    const fetchCards = async () => {
      try {
        const response = await fetch("/src/assets/cardList.json");
        const data = await response.json();
        setCardList(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };
    
    useEffect(() => {
      fetchCards();
    }, []); //on mount
    return (
      <>
        <div>
          <MainHeader isDarkTheme={isDarkTheme} onThemeToggle={handleThemeToggle}/>
        </div>
        <div className={styles.centreNav}>
          <nav className={styles.navbar}>
            <CardHandler isDarkTheme={isDarkTheme} cardList={cardList} />
          </nav>
        </div>  
        <Outlet/>
      </>
    );
  }