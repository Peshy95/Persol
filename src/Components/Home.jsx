import React from "react";
import './home.css'


const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className=" peshi">
      <img src="src/assets/pexels-tomer-dahari-571687-1331386.jpg" alt="" />
        <div className="peshi-content">
          <h1>Discover Your <br /> Perfect Frames <br /> and Lenses</h1>
          <p>
            At Persol, we offer a stunning selection of frames <br /> and lenses tailored to your style and vision needs.
          </p>
          
          <div className="buttons">
            <button className="shop-btn">Nice</button>
            <button className="learn-btn">Learn More</button>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default Home;
