import { Link, Outlet } from "react-router-dom";
import styles from './root.module.css'
import MainHeader from "../components/Main/MainHeader/MainHeader";
import ButtonCard from "../components/LinkCards/ButtonCard/ButtonCard.tsx";

import ConditionalRenderCard from "../components/LinkCards/ConditionalRenderCard/ConditionalRenderCard.tsx";
import PropTestCard from "../components/LinkCards/PropTestCard/PropTestCard.tsx";
import CustomHooks2Card from "../components/LinkCards/CustomHooks2Card/CustomHooks2Card.tsx";
import CustomHooksCard from "../components/LinkCards/CustomHooksCard/CustomHooksCard.tsx";
import EventHandlingCard from "../components/LinkCards/EventHandlingCard/EventHandlingCard.tsx";
import ListsAndKeysCard from "../components/LinkCards/ListsAndKeysCard/ListsAndKeysCard.tsx";
import PassingPropsCard from "../components/LinkCards/PassingPropsCard/PassingPropsCard.tsx";
import PreventDefaultBehaviourCard from "../components/LinkCards/PreventDefaultBehaviourCard/PreventDefaultBehaviourCard.tsx";
import UseRefTestCard from "../components/LinkCards/UseRefTestCard/UseRefTestCard.tsx";
import UseEffectTestCard from "../components/LinkCards/UseEffectTestCard/UseEffectTestCard.tsx";
import UseStateButtonCard from "../components/LinkCards/UseStateButtonCard/UseStateButtonCard.tsx";

export default function Root() {
    return (
      <>
        <div>
          <MainHeader/>
        </div>
        <div className={styles.centreNav}>
          <nav className={styles.navbar}>
            <ButtonCard/>
            <ConditionalRenderCard/>
            <PropTestCard/>
            <UseStateButtonCard/>
            <ListsAndKeysCard/>
            <PassingPropsCard/>
            <UseRefTestCard/>
            <EventHandlingCard/>
            <PreventDefaultBehaviourCard/>
            <CustomHooksCard/>
            <CustomHooks2Card/>
            <UseEffectTestCard/>
          </nav>
        </div>  
        <Outlet/>
      </>
    );
  }