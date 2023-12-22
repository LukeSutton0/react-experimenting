function FirstButton() {

    const onButtonClick = () => {
        console.log("You clicked Button 1")
    };

    return (
      <button onClick={onButtonClick}>Button 1</button>
    );
  }

export default FirstButton;