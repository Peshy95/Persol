import React from "react";

const ContactLensesData = [
  {
    brand: "Acuvue",
    image: "src/assets/acuvue.jpg",
    description: "Comfortable daily disposable lenses with UV protection."
  },
  {
    brand: "Air Optix",
    image: "src/assets/airoptix.jpg",
    description: "Breathable monthly lenses for extended wear."
  },
  {
    brand: "Biofinity",
    image: "src/assets/biofinity.jpg",
    description: "High-moisture lenses designed for all-day comfort."
  },
  {
    brand: "Dailies",
    image: "src/assets/dailies.jpg",
    description: "Convenient and hygienic daily disposable lenses."
  }
];

const ContactLenses = () => {
  return (
    <div className="contact-lenses-container">
      <h1>Contact Lenses Collection</h1>
      <div className="contact-lenses-list">
        {ContactLensesData.map((lens, index) => (
          <div key={index} className="lens-item">
            <img src={lens.image} alt={lens.brand} className="lens-image" />
            <h3>{lens.brand}</h3>
            <p>{lens.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactLenses;
