import { Link, Outlet } from "react-router-dom";


export default function Root() {
    return (
      <>
        <div id="navbar">
          <h1>Experimenting With React</h1>
          <div>
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
        </div>
        <Outlet/>
      </>
    );
  }