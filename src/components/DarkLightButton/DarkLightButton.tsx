import React, { useState } from 'react'

function DarkLightButton() {
    const [currentImage, setCurrentImage] = useState('./src/assets/icons8-sun-100.png');
    const handleButtonClick = () => {
        // Check the current image and swap to the other one
        const newImage = currentImage === './src/assets/icons8-sun-100.png ' ? './src/assets/icons8-sun-100.png' : './src/assets/icons8-sun-100.png';
        setCurrentImage(newImage);
      };

  return (
    <div>
      <img src={currentImage} alt="Dark Light Image" onClick={handleButtonClick}/>
    </div>
  )
}

export default DarkLightButton