import { useState } from "react";
import img1 from "../assets/download (1).jpeg";
import img2 from "../assets/download (2).jpeg";
import img3 from "../assets/download (3).jpeg";
import img4 from "../assets/download (4).jpeg";
import img5 from "../assets/download.jpeg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [img1, img2, img3, img4, img5];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container text-center">
      <button className="carousel-btn" onClick={handlePrev}>
        Prev
      </button>

      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? "carousel-image active" : "carousel-image"}
            style={{ display: index === currentIndex ? "block" : "none" }}
          />
        ))}
      </div>

      <button className="carousel-btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
