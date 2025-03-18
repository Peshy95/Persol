import React from "react";
import "./contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Customer Testimonials */}
      <h2 className="section-title">Customer Testimonials</h2>
      <section className="testimonials">
        <div className="testimonial-box">
          <img src="src/assets/person.jpg" alt="John Doe" className="testimonial-image" />
          <p className="testimonial-text">"The frames are not only stylish but also durable!"</p>
          <p className="testimonial-author">- John Doe</p>
          <p className="testimonial-rating">⭐⭐⭐⭐⭐</p>
        </div>
        <div className="testimonial-box">
          <img src="src/assets/woman.jpg" alt="Max Ngugi" className="testimonial-image" />
          <p className="testimonial-text">"Fantastic service and a lovely collection!"</p>
          <p className="testimonial-author">- Max Ngugi</p>
          <p className="testimonial-rating">⭐⭐⭐⭐⭐</p>
        </div>
        <div className="testimonial-box">
          <img src="src/assets/man.jpg" alt="Tom Kruz" className="testimonial-image" />
          <p className="testimonial-text">"Fits me well and is worth the price!"</p>
          <p className="testimonial-author">- Tom Kruz</p>
          <p className="testimonial-rating">⭐⭐⭐⭐⭐</p>
        </div>
      </section>

      {/* Contact Section */}
      <div className="contact-info-container">
        {/* Left Side Images */}
        <div className="contact-images">
          <img src="src/assets/contact1.jpg" alt="Customer Service" className="contact-image contact-image1" />
          <img src="src/assets/contact2.jpg" alt="Office Location" className="contact-image contact-image2" />
        </div>

        {/* Right Side Contact Details */}
        <div className="contact-details">
          <div className="contact-box">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p><a href="preciousamusugut@gmail.com">preciousamusugut@gmail.com</a></p>
            </div>
          </div>

          <div className="contact-box">
            <FaPhone className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p><a href="tel:0701234567">0111282300</a></p>
            </div>
          </div>

          <div className="contact-box">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Office</h3>
              <p>456 Main Street, Sydney</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <h2 className="footer-title">Explore Our Quality Frames and Lenses</h2>
        <p className="footer-text">Your trusted partner for affordable optical products.</p>
        <p className="footer-text">© 2025 Persol Lenses. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
