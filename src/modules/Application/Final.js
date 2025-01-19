import React from 'react';
import './Final.css'; // External CSS file

const Final = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Contact us</h3>
        <p>Address: amet, consetetur sadipscing elitr, sed diam</p>
        <p>Email id: eirmod tempor invidunt ut labore et dolore</p>
        <p>Phone no: 123456789</p>
      </div>
      <div className="footer-section">
        <h3>Follow us</h3>
        <div className="social-icons">
          <span className="icon">🔗</span> {/* Replace with SVG or actual icons */}
          <span className="icon">📷</span>
          <span className="icon">🐦</span>
          <span className="icon">📹</span>
          <span className="icon">📘</span>
        </div>
      </div>
      <div className="footer-section">
        <h3>Head Office</h3>
        <p>📍 Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
        <p>⏱ Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
        <p>🗓 Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
        <p>📑 Lorem ipsum asd asdsdaweeq Lorem Ipsum</p>
      </div>
      <div className="footer-bottom">
        <p>© 2024 All Rights Reserved. <a href="#">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Final;
