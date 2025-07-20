import React from "react";
import "./frames.css";

const FramesSection = () => {
  return (
    <section className="frames-section" id="frames">
      <h3 className="quality-title">Frames</h3>
      <br />
      <br />
      <h2 className="frames-heading">
        <em>Discover Our Exceptional Quality and Diverse Selection of Eyewear Frames</em>
      </h2>
      <div className="Nice"></div>
      <div className="frames-cards">
        <div className="card">
          <img src="src/assets/frames3.jpeg" alt="frames 1" />
          <h4>Crafted Fit for Every Person</h4>
          <p>Each frame and lens is crafted to ensure a perfect fit.</p>
        </div>
        <div className="card">
          <img src="src/assets/frame 1.jpg" alt="frames 2" />
          <h4>Diverse Range of Stylish Options</h4>
          <p>From frame to frame, we have it all.</p>
        </div>
        <div className="card">
          <img src="src/assets/frames2.jpeg" alt="frames 3" />
          <h4>Sustainable and High-Quality Frames</h4>
          <p>We use only the finest pieces for durability.</p>
        </div>
      </div>
      <div className="buttons">
        <button className="learn-more">Learn more</button>
        <button className="sign-up">Sign up &gt;</button>
      </div>
    </section>
  );
};

export default FramesSection;
