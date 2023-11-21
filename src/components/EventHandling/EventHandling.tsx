import React, { MouseEventHandler, ReactNode } from 'react';

import styles from './EventHandling.module.css'


function handleClick(message:string ) {
    alert(message);
    //do other stuff
}

interface CustomButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

function CustomButton({ onClick, children }: CustomButtonProps) { //custom button
  return (
    <button
      className={styles.clickButton}
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
    >
      {children}
    </button>
  );
}

function EventHandling() {
  //use named object to stop propogation and still set alert desc
  const handleNormalButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Stop propagation here
    alert('normal button!');
  };

  return (
    <>
      <div>Event handling</div>
      <div className={styles.ButtonBox} onClick={() => alert('You clicked the button box')}>
        <CustomButton onClick={() => handleClick("My Message")}>Click Me</CustomButton>
        <CustomButton onClick={() => alert('You clicked me!')}>Click Me 2</CustomButton>
        <button onClick={handleNormalButtonClick}>Click Me 3</button> {/* Attach the event handler */}
      </div>
    </>
  );
}

export default EventHandling