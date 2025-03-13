import React from "react";
import './contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Testimonials */}
        <h2>Customer Testimonials</h2>
      <section className="testimonials">
        <div className="testimonial-box">
          <p>"The frames are not only stylish but also durable!"</p>
          <p>- John Doe</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        <div className="testimonial-box">
          <p>"Fantastic service and a lovely collection!"</p>
          <p>- Max Ngugi</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        <div className="testimonial-box">
          <p>"Fits me well and is worth the price!"</p>
          <p>- Tom Kruz</p>
        <p>⭐⭐⭐⭐⭐</p>
        </div>
      </section>


      <section className="contact">
        <h2>Connect with Us Today!</h2>
        <p>Email: <a href="mailto:support@persollenses.com">support@persollenses.com</a></p>
        <p>Phone: <a href="tel:0701234567">0701234567</a></p>
        <p>Office: 456 Main Street, Sydney</p>
      </section>

      
      <footer className="footer">
        <h2>Explore Our Quality Frames and Lenses</h2>
        <p>Your trusted partner for affordable optical products.</p>
        <p>© 2025 Persol Lenses. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;