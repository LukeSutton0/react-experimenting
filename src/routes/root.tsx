import { Link, Outlet } from "react-router-dom";
import DarkLightButton from "../components/DarkLightButton/DarkLightButton";
import styles from './root.module.css'

export default function Root() {
    return (
      <>
        <div className={styles.titlebar}>
          <h1 className={styles.mainHeader}>Experimenting With React</h1>
          <DarkLightButton/>
        </div>
          <div id="navbar">
            <Link to="buttons">Buttons</Link>
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
            </div>
        <Outlet/>
      </>
    );
  }