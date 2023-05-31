import React, { useState } from 'react';
import '../App.css'
import axios from 'axios';


let imagesArray =[]
const ImageUploader = () => {
  const [images, setImages] = useState([]);
  

  const handleImageUpload = (event) => {
    
    const fileList = event.target.files;
    imagesArray = Array.from(fileList);
    setImages(imagesArray);
    
  };
  
  const handleUpload = async () => {
    const formData = new FormData();
    images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      imagesArray.forEach((image) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const link = document.createElement('a');
        link.href = e.target.result;
        link.download = image.name;
        link.click();
      };
      reader.readAsDataURL(image);
    });
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  return (
    <div className="image-uploader">
      <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
      <div className="preview-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={URL.createObjectURL(image)}
            alt={`Preview ${index}`}
            className="preview-image"
          />
        ))}
      </div>
      <button className="upload-button" onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUploader;


