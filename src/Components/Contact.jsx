import React, { useEffect, useState } from "react";
import "./contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [dateTime, setDateTime] = useState("");
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setDateTime(now.toLocaleString());
    };
    
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`);
        },
        () => {
          setLocation("Location access denied");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="contact-container">
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

      <div className="contact-info-container">
        <div className="contact-images">
          <img src="src/assets/contact1.jpg" alt="Customer Service" className="contact-image contact-image1" />
          <img src="src/assets/contact2.jpg" alt="Office Location" className="contact-image contact-image2" />
        </div>

        <div className="contact-details">
          <div className="contact-box">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p><a href="mailto:preciousamusugut@gmail.com">preciousamusugut@gmail.com</a></p>
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
              <p>Kimathi  Street, Nairobi</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ticker">
        <p className="ticker-text">{dateTime} | {location}</p>
      </div>
    </div>
  );
};

export default Contact;
