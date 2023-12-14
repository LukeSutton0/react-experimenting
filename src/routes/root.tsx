import { Link, Outlet } from "react-router-dom";
import styles from './root.module.css'
import MainHeader from "../components/Main/MainHeader/MainHeader";
import CardHandler from "../components/CardHandler.tsx"
import { useEffect, useState } from "react";

const cardListData = "src/assets/cardList.json"

export default function Root() {

    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
    const handleThemeToggle = () => {
      setIsDarkTheme((prevTheme) => !prevTheme);
    };
    return (
      <>
        <div>
          <MainHeader isDarkTheme={isDarkTheme} onThemeToggle={handleThemeToggle}/>
        </div>
        <div className={styles.centreNav}>
          <nav className={styles.navbar}>
            {cardListData.cards.map((card, index) => (
            <CardHandler key={index} isDarkTheme={isDarkTheme} card={card} />
          </nav>
        </div>  
        <Outlet/>
      </>
    );
  }