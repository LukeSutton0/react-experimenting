import { Link, Outlet } from "react-router-dom";
import styles from './root.module.css'
import MainHeader from "../components/Main/MainHeader/MainHeader";
import ButtonCard from "../components/LinkCards/ButtonCard/ButtonCard.tsx";

import ConditionalRenderCard from "../components/LinkCards/ConditionalRenderCard/ConditionalRenderCard.tsx";

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
            <Link to="proptest">PropTesting</Link>
            <Link to="usestatebutton">UseStateButton</Link>
            <Link to="conditionalrender">ConditionalRender</Link>
            <Link to="listsandkeys">ListsAndKeys</Link>
            <Link to="passingprops">PassingProps</Link>
            <Link to="usereftest">UseRefTest</Link>
            <Link to="eventhandling">EventHandling</Link>
            <Link to="preventdefaultbehaviour">PreventDefaultBehaviour</Link>
            <Link to="customhooks">CustomHooks</Link>
            <Link to="useeffecttest">UseEffectTest</Link>
          </nav>
        </div>  
        <Outlet/>
      </>
    );
  }