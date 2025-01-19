import React, { useState } from "react";

const Middle = () => {
  const cards = [
    { id: 1, title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 3, title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 4, title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 5, title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  const stats = [
    { id: 1, value: "123+", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor." },
    { id: 2, value: "12+", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor." },
    { id: 3, value: "12+", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor." },
    { id: 4, value: "123", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div style={styles.container}>
      {/* Slider Section */}
      <section style={styles.sliderSection}>
        <button style={styles.navButton} onClick={handlePrev}>
          &#10094;
        </button>
        <div style={styles.slider}>
          {cards.map((card, index) => (
            <div
              key={card.id}
              style={{
                ...styles.card,
                transform: `translateX(${(index - currentIndex) * 100}%)`,
              }}
            >
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <button style={styles.knowMoreButton}>Know More ➤</button>
            </div>
          ))}
        </div>
        <button style={styles.navButton} onClick={handleNext}>
          &#10095;
        </button>
      </section>

      {/* Statistics Section */}
      <section style={styles.statsSection}>
        {stats.map((stat) => (
          <div key={stat.id} style={styles.statItem}>
            <h4 style={styles.statHeader}>{stat.title}</h4>
            <h1 style={styles.statValue}>{stat.value}</h1>
            <p style={styles.statText}>{stat.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

// Styles
const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    lineHeight: 1.5,
    margin: "0",
    padding: "0",
  },
  sliderSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    padding: "20px",
    background: "#f4f4f4",
  },
  slider: {
    display: "flex",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
    overflow: "hidden",
    position: "relative",
  },
  card: {
    minWidth: "300px",
    maxWidth: "300px",
    padding: "20px",
    background: "#003366",
    color: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    position: "absolute",
    transition: "transform 0.5s ease-in-out",
  },
  navButton: {
    background: "none",
    border: "none",
    color: "#003366",
    fontSize: "24px",
    fontWeight: "bold",
    cursor: "pointer",
    padding: "10px",
  },
  knowMoreButton: {
    marginTop: "10px",
    padding: "10px 20px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
  statsSection: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "40px",
    backgroundColor: "#fff",
  },
  statItem: {
    textAlign: "center",
    maxWidth: "200px",
  },
  statHeader: {
    fontSize: "16px",
    color: "#003366",
  },
  statValue: {
    fontSize: "48px",
    color: "#003366",
    margin: "10px 0",
  },
  statText: {
    fontSize: "14px",
    color: "#555",
  },
};

export default Middle;
