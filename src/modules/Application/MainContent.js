import React, { useState } from 'react';
import './MainContent.css';

const MainContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.hubspot.com%2Fwebsite%2Ftypes-of-websites&psig=AOvVaw2gzvuFivm5qO3Z6IUNi2-L&ust=1732898503783000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCDnZC8_4kDFQAAAAAdAAAAABAE",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fjustwords.in%2Fblog%2F20-websites-that-give-stunning-free-images%2F&psig=AOvVaw2gzvuFivm5qO3Z6IUNi2-L&ust=1732898503783000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCDnZC8_4kDFQAAAAAdAAAAABAI",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fverpex.com%2Fblog%2Fmarketing-tips%2F10-most-popular-types-of-websites&psig=AOvVaw2gzvuFivm5qO3Z6IUNi2-L&ust=1732898503783000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCDnZC8_4kDFQAAAAAdAAAAABAQ",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <button className="know-more-button">Know More ➤</button>
        </div>
        <div className="slider">
          <button className="slider-button prev" onClick={prevSlide}>
            &#10094;
          </button>
          <div className="slider-container">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
                className={`slide ${index === currentSlide ? "active" : ""}`}
              />
            ))}
          </div>
          <button className="slider-button next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </section>
      <section className="upcoming-exams">
        <h2>Upcoming Examinations</h2>
        <div className="exam-list">
          <div className="exam-item">
            <p>02th October 2014</p>
            <p>Level 1 exam</p>
          </div>
          <div className="exam-item">
            <p>Nov-Dec 2016</p>
            <p>Level 2</p>
          </div>
          <div className="exam-item">
            <p>Ongoing this year</p>
            <p>Level 3 (Grad)</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
