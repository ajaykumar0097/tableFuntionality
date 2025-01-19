import React, { useState } from "react";

const Last = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      {/* FAQ Section */}
      <section style={styles.faqSection}>
        <h2 style={styles.heading}>FAQ</h2>
        <div style={styles.faqList}>
          {faqData.map((item, index) => (
            <div key={index} style={styles.faqItem}>
              <div style={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
                <p>{item.question}</p>
                <span style={styles.icon}>{activeIndex === index ? "−" : "+"}</span>
              </div>
              {activeIndex === index && (
                <div style={styles.faqAnswer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section style={styles.subscribeSection}>
        <div style={styles.subscribeContent}>
          <h2 style={styles.heading}>Subscribe</h2>
          <p style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna.
          </p>
          <div style={styles.subscribeForm}>
            <input
              type="email"
              placeholder="Enter your Email Address"
              style={styles.input}
            />
            <button style={styles.button}>Subscribe Now ➤</button>
          </div>
        </div>
        <div style={styles.subscribeImage}>
          {/* Example Image Placeholder */}
          <img
            src="https://via.placeholder.com/200x150"
            alt="Subscribe Illustration"
            style={styles.image}
          />
        </div>
      </section>
    </div>
  );
};

// FAQ Data
const faqData = [
  {
    question: "How does an investor gain access to MF Utility?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    question:
      "Will investors be able to have multiple Common Account Numbers?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    question: "How does an investor gain access to MF Utility?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
];

// Styles
const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    color: "#333",
    lineHeight: 1.6,
    margin: 0,
    padding: 0,
  },
  heading: {
    fontSize: "24px",
    color: "#003366",
    textAlign: "center",
    marginBottom: "20px",
  },
  faqSection: {
    padding: "40px 20px",
    backgroundColor: "#f4f4f4",
  },
  faqList: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  faqItem: {
    borderBottom: "1px solid #ddd",
    padding: "10px 0",
  },
  faqQuestion: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
  faqAnswer: {
    padding: "10px 0",
    fontSize: "14px",
    color: "#555",
  },
  icon: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#003366",
  },
  subscribeSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "40px 20px",
    backgroundColor: "#fff",
  },
  subscribeContent: {
    maxWidth: "500px",
  },
  text: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "20px",
  },
  subscribeForm: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#003366",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  },
  subscribeImage: {
    maxWidth: "200px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
  },
};

export default Last;
