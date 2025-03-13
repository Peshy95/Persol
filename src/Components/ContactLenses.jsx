import React, { useState } from "react"; 
import './contactlensses.css'


const ContactLensesData = {
  Acuvue: [
    { image: "src/assets/daily-contact.avif", description: "Comfortable daily disposable lenses with UV protection, designed to keep your eyes safe from harmful UV rays while providing exceptional moisture for all-day wear." },
    { image: "src/assets/Acuvue-Moist.png", description: "Advanced moisture lock technology ensures your eyes stay hydrated, reducing dryness and irritation for an effortless and healthy vision experience." },
    { image: "src/assets/silcon.jpeg", description: "Silicone hydrogel lenses allow high oxygen permeability, promoting long-term eye health and reducing strain, making them ideal for extended wear." },
    { image: "src/assets/hydro.jpeg", description: "UV-blocking daily lenses that offer crisp, clear vision while preventing potential damage from prolonged exposure to the sun’s rays, ensuring overall eye wellness." }
  ],
  "Air Optix": [
    { image: "src/assets/opix-1.webp", description: "Breathable monthly lenses designed for extended wear, providing a smooth surface that resists deposits while maintaining exceptional moisture and clarity." },
    { image: "src/assets/airoptix-3.webp", description: "Enhanced oxygen flow technology supports healthier eyes, reducing redness and fatigue while ensuring sharp, high-definition vision throughout the day." },
    { image: "src/assets/airoptix-colors.webp", description: "SmartShield technology creates a protective barrier against irritants, keeping your lenses clean and your eyes fresh for a more comfortable wearing experience." },
    { image: "src/assets/airoptix-hydraglyde.png", description: "Precision-designed lenses that optimize light transmission, offering improved contrast and reduced glare, perfect for those with sensitive eyes or night vision concerns." }
  ],
  Biofinity: [
    { image: "", description: "High-moisture lenses that retain water naturally, ensuring long-lasting hydration and reducing the risk of dry eye symptoms, even in challenging environments." },
    { image: "",  description: "Extended wear lenses crafted with Aquaform technology to deliver optimal oxygen to your eyes, supporting corneal health and minimizing discomfort." },
    { image: "", description: "Optimized water content keeps lenses soft and smooth, ensuring an irritation-free experience that supports clear and stable vision for long hours." },
    { image: "", description: "Naturally wettable lenses designed to mimic the eye’s natural hydration system, reducing eye strain and enhancing long-term ocular comfort." }
  ],
  Dailies: [
    { image: "", description: "Convenient and hygienic daily disposable lenses that eliminate the need for cleaning, ensuring fresh, irritation-free eyes with every new pair." },
    { image: "", description: "Daily lenses designed with crisp, clear vision technology, reducing blurriness and enhancing contrast for sharper and more precise sight." },
    { image: "", description: "Ultra-thin lenses that conform naturally to the eye, promoting effortless blinking and reducing the likelihood of dry spots or discomfort." },
    { image: "", description: "HydraLuxe technology provides a tear-like network of moisture, helping to maintain stable vision and reduce eye strain in digital-heavy lifestyles." }
  ]
};

const ContactLenses = () => {
  const [showMore, setShowMore] = useState({});

  const toggleShowMore = (brand) => {
    setShowMore((prev) => ({ ...prev, [brand]: !prev[brand] }));
  };

  return (
    <div className="contact-lenses-container">
      <h1>Contact Lenses Collection</h1>
      <div className="contact-lenses-list">
        {Object.entries(ContactLensesData).map(([brand, products]) => (
          <div key={brand} className="brand-section">
            <h2>{brand}</h2>
            <div className="brand-products">
              {products.map((product, index) => (
                <div key={index} className="lens-item">
                  <img src={product.image} alt={brand} className="lens-image" />
                  <p>{product.description}</p>
                </div>
              )).slice(0, showMore[brand] ? products.length : 1)}
            </div>
            <br />
            <button onClick={() => toggleShowMore(brand)}>
              {showMore[brand] ? "Show Less" : "Show More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactLenses;