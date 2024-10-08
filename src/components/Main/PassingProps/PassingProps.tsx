import styles from "./passingProps.module.css"

interface textInterface{
    name:string,
    id:string
}

function PassingProps({text,size}:{text:textInterface; size:number}) {
    const fontSize = getSizeClass(size)
  
    return (
    <>
      <div className={styles.userInfoBlock}>
        <div className={fontSize} >Name: {text.name}</div>
        <div className={fontSize}>ID: {text.id}</div>
        <div className={fontSize}>Size:{size}</div>
      </div>
    </>
    
  )
}

function getSizeClass(size: number): string {
    if (size <= 20) {
      return styles.smallText;
    } else if (size <= 40) {
      return styles.mediumText;
    } else {
      return styles.largeText;
    }
}

export default PassingProps