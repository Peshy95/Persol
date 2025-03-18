import React from "react"; 
import "./ContactUs.css";
import Image from "/src/assets/back.jpg"; // This path is annoying me

const ContactUs = () => {
  return (
    <div className="contacts-container">
      <div className="contacts-card">
        <div className="contacts-text">
          <h2>Connect with Us Today!</h2>
          <p>
            Ready to elevate your Frames and lenses? <br />
            Contact us for a personalized consultation now!
          </p>
          <div className="contacts-buttons">
            <button className="get-started">Get Started</button>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
        <div className="contacts-image">
          <img src={Image} alt="Chat Icons" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
