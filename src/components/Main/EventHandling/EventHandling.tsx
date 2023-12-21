import React, { MouseEventHandler, ReactNode } from 'react';

import styles from './EventHandling.module.css'


function handleClick(message:string ) {
    alert(message);
}

interface CustomButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

function CustomButton({ onClick, children }: CustomButtonProps) { //custom button
  return (
    <div>
      <button
        className={styles.clickButton}
        onClick={(e) => {
          e.stopPropagation();
          onClick(e);
        }}
      >
        {children}
      </button>
    </div>
  );
}

function CustomButtonPropogation({ onClick, children }: CustomButtonProps) { //custom button
  return (
    <button
      className={styles.clickButton}
      onClick={(e) => {
        //e.stopPropagation(); propogation not stopped
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
    alert('Message for button 3');
  };
  const handleNormalButtonClickPropogation = (e: React.MouseEvent<HTMLButtonElement>) => {
    //e.stopPropagation(); // propogation not stopped
    alert('Message for button 3');
  }; 

  return (
    <>
      <div>Event handling</div>
      <p>No Propogation</p>
      <div className={styles.ButtonBox} onClick={() => alert('Base button box clicked')}>
        <CustomButton onClick={() => handleClick("Message for button 1")}>Click Me</CustomButton>
        <CustomButton onClick={() => alert('Message for button 2')}>Click Me 2</CustomButton>
        <button onClick={handleNormalButtonClick}>Click Me 3</button> {/* Attach the event handler */}
      </div>

      <p>Propogation</p>
      <div className={styles.ButtonBox} onClick={() => alert('Base button box clicked')}>
        <CustomButtonPropogation onClick={() => handleClick("Message for button 1")}>Click Me</CustomButtonPropogation>
        <CustomButtonPropogation onClick={() => alert('Message for button 2')}>Click Me 2</CustomButtonPropogation>
        <button onClick={handleNormalButtonClickPropogation}>Click Me 3</button> {/* Attach the event handler */}
      </div>
    </>
  );
}

export default EventHandling