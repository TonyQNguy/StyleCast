import React, { useState } from 'react';
import "./edit.css";
import { Link } from "react-router-dom";
const Edit = (props) => {
  const [image, setImage]  = useState('');
  const [itemName, setItemName] = useState('');
  const [selectedButton, setSelectedButton] = useState('');
  const [prefButton, setPrefButton] = useState('');

  const handleTextChange = (event) => {
    console.log(event.target.value);
    setItemName(event.target.value);
  };

  const handleButtonClick = (buttonText) => {
    console.log(buttonText);
    setSelectedButton(buttonText);
  };

  const handlePrefButtonClick = (buttonText) => {
    console.log(buttonText);
    setPrefButton(buttonText);
  };

  const handleImageUpload = (event) => {
    // Handle image upload logic here
    setImage(event.target.value);
    const uploadedImage = event.target.files[0];
    console.log('Uploaded Image:', uploadedImage);
  };

  const addProfile = (event) => { 
    event.preventDefault();
    
    // Create a new item object
    const newItem = {
      img: image,
      name: itemName,
      category: selectedButton,
      preference: prefButton,
    };

    props.onAddItem(newItem);
    
    // Clear Input Fields
    setImage('')
    setItemName('');
    setSelectedButton('');
    setPrefButton('');
  }


  return (
    <form onSubmit={addProfile}>
      <div>
        {/* Image Upload Box */}
        <div>
        <div className="image-box">
          <h1>Catalog</h1>
          <img src="https://placekitten.com/400/300" alt="Placeholder Image" />
        </div>
          <label className="divName" htmlFor="imageUpload">Upload Image: </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <br />
        {/* Text Input */}
        <div>
          <label className="divName" htmlFor="textInput">Item Name </label>
          <br />
          <br />
          <input
            type="text"
            id="textInput"
            value={itemName}
            placeholder="i.g. Favorite Shirt"
            onChange={handleTextChange}
          />
        </div>
        <br />
        {/* 2x3 Grid of Buttons */}
        <p className="divName">Category</p>
        <br />
        <div className="clothingButtons">
          <button onClick={(e) => { handleButtonClick('Shirts'); e.preventDefault(); }}> Shirts </button>
          <button onClick={(e) => { handleButtonClick('Jackets'); e.preventDefault(); }}> Jackets </button>
          <button onClick={(e) => { handleButtonClick('Pants'); e.preventDefault(); }}> Pants </button>
          <button onClick={(e) => { handleButtonClick('Shorts'); e.preventDefault(); }}> Shorts </button>
          <button onClick={(e) => { handleButtonClick('Accs.'); e.preventDefault(); }}> Accs. </button>
          <button onClick={(e) => { handleButtonClick('More'); e.preventDefault(); }}> More </button>
        </div>
        <br />
        {/* Row of Three Buttons */}
        <p className="divName">Weather Preference</p>
        <br />
        <div className="buttonContainer">
          <button className="hotbutton" onClick={(e) => { handlePrefButtonClick('Hot'); e.preventDefault(); }}>Hot</button>
          <button className="coldbutton" onClick={(e) => { handlePrefButtonClick('Cold'); e.preventDefault(); }}>Cold</button>
          
          <Link to="/">
          <button className="changebutton">Confirm</button>
          </Link>
          
        </div>
      </div>
    </form>
  );
};

export default Edit;
