import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageURL = URL.createObjectURL(file);
      setImages([...images, newImageURL]);
      setCurrentIndex(images.length);
    }
  };
  const handleNext = () => {
    if (images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };
  const handlePrev = () => {
    if (images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };
  const handleRemove = () => {
    if (images.length > 0) {
      const newImages = images.filter((_, index) => index !== currentIndex);
      setImages(newImages);
      setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 0);
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <button className="gallery-tab active">Gallery</button>
        <input
          type="file"
          accept="image/*"
          onChange={handleAddImage}
          style={{ display: 'none' }}
          id="imageUpload"
        />
        <label htmlFor="imageUpload" className="add-image-button">
          + ADD IMAGE
        </label>
        {images.length > 0 && (
          <>
            <button className="remove-image-button" onClick={handleRemove}>- REMOVE IMAGE</button>
            <div className="gallery-controls">
              <button className="gallery-prev" onClick={handlePrev}>←</button>
              <button className="gallery-next" onClick={handleNext}>→</button>
            </div>
          </>
        )}
      </div>
      <div className="gallery-images">
        {images.length > 0 ? (
          <img src={images[currentIndex]} alt={`Gallery Image ${currentIndex + 1}`} />
        ) : (
          <p>No images available. Please add an image.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
