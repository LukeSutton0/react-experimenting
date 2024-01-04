import styles from './redButton.module.css'

function RedButton(){
    return(
        <div>
            <button className={styles.redButton} onClick={()=> console.log("You clicked the Red Button")}>Red Button</button>
        </div>
    )
}
export default RedButton;