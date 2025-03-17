import React, { useState } from "react";
import './sunglasses.css';

const SunglassesData = [
  {
    brand: "Ray-Ban",
    image: "src/assets/ray-ban-black.webp",
    description: "Classic and stylish sunglasses that offer superior UV protection.",
    moreImages: ["src/assets/rayban1.webp", "src/assets/rayban2.webp","src/assets/ray-ban-black.webp"],
    moreDescriptions: ["Aviator style with polarized lenses.", "Wayfarer style with a modern touch."],
  },
  {
    brand: "Oakley",
    image: "src/assets/aokley.jpeg",
    description: "High-performance sunglasses designed for sports and outdoor activities.",
    moreImages: ["src/assets/oakley1.avif", "src/assets/oakley2.png"],
    moreDescriptions: ["Sporty wraparound design.", "Lightweight frames with UV protection."],
  },
  {
    brand: "Gucci",
    image: "src/assets/gucci-Sunglasses.webp",
    description: "Luxury sunglasses with a blend of fashion and elegance.",
    moreImages: ["src/assets/gucci1.jpg", "src/assets/gucci2.jpg"],
    moreDescriptions: ["Oversized frames with iconic Gucci branding.", "Sleek and stylish for modern elegance."],
  },
  {
    brand: "Prada",
    image: "src/assets/prada.jpeg",
    description: "Bold and sophisticated sunglasses with high-end craftsmanship.",
    moreImages: ["src/assets/prada1.jpg", "src/assets/prada2.avif"],
    moreDescriptions: ["Elegant cat-eye frames.", "Minimalist design with luxury appeal."],
  },
];

const Sunglasses = () => {
  const [expandedBrand, setExpandedBrand] = useState(null);

  const toggleMoreInfo = (brand) => {
    setExpandedBrand(expandedBrand === brand ? null : brand);
  };

  return (
    <div className="sunglasses-container">
      <h1>Sunglasses Collection</h1>
      {expandedBrand === null ? (
        <div className="sunglasses-scroll">
          {SunglassesData.map((sunglass, index) => (
            <div key={index} className="sunglass-card">
              <img src={sunglass.image} alt={sunglass.brand} className="sunglass-image" />
              <h3>{sunglass.brand}</h3>
              <p>{sunglass.description}</p>
              <button onClick={() => toggleMoreInfo(sunglass.brand)}>Show More</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="sunglass-details">
          {SunglassesData.filter(sunglass => sunglass.brand === expandedBrand).map((sunglass, index) => (
            <div key={index}>
              <button onClick={() => setExpandedBrand(null)} className="back-button">Back</button>
              {sunglass.moreImages.map((img, idx) => (
                <div key={idx} className="sunglass-variant">
                  <img src={img} alt={`${sunglass.brand} variant ${idx + 1}`} className="variant-image" />
                  <p>{sunglass.moreDescriptions[idx]}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sunglasses;
