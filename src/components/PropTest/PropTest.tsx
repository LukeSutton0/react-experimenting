
import styles from "./propTest.module.css"

interface  myInterfaceName{
    firstString: string;
    secondString: string;
    firstInt: number; //bigint for large ints
}


function PropTest(props:myInterfaceName) {
  return (
    <div className={styles.flex}>
      <h1>{props.firstString}</h1>
      <p>{props.firstInt}</p>
      <p>{props.secondString}</p>
    </div>
  );
}
 
export default PropTest;