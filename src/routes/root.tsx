import { Link, Outlet } from "react-router-dom";
import styles from './root.module.css'
import MainHeader from "../components/Main/MainHeader/MainHeader";
import ButtonCard from "../components/LinkCards/ButtonCard/ButtonCard.tsx";

import ConditionalRenderCard from "../components/LinkCards/ConditionalRenderCard/ConditionalRenderCard.tsx";
import PropTestCard from "../components/LinkCards/PropTestCard/PropTestCard.tsx";
import CustomHooks2Card from "../components/LinkCards/CustomHooks2Card/CustomHooks2Card.tsx";
import CustomHooksCard from "../components/LinkCards/CustomHooksCard/CustomHooksCard.tsx";

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
            <Link to="usestatebutton">UseStateButton</Link>
            <Link to="conditionalrender">ConditionalRender</Link>
            <Link to="listsandkeys">ListsAndKeys</Link>
            <Link to="passingprops">PassingProps</Link>
            <Link to="usereftest">UseRefTest</Link>
            <Link to="eventhandling">EventHandling</Link>
            <Link to="preventdefaultbehaviour">PreventDefaultBehaviour</Link>
            <CustomHooksCard/>
            <CustomHooks2Card/>
            <Link to="useeffecttest">UseEffectTest</Link>
          </nav>
        </div>  
        <Outlet/>
      </>
    );
  }