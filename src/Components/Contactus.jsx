import React from "react"; 
import "./ContactUs.css";
import chatImage from "/src/assets/back.jpg"; // Ensure path is correct

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
          <img src={chatImage} alt="Chat Icons" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
