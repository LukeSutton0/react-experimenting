import React, { useState } from 'react'

function DarkLightButton() {
    const [currentImage, setCurrentImage] = useState('image1.jpg');
    const handleButtonClick = () => {
        // Check the current image and swap to the other one
        const newImage = currentImage === './src/assets/icons8-sun-100.png ' ? 'image2.jpg' : 'image1.jpg';
        setCurrentImage(newImage);
      };

  return (
    <div>
      <img src={currentImage} alt="Dark Light Image" onClick={handleButtonClick}/>
    </div>
  )
}

export default DarkLightButton