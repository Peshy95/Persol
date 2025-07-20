import React, { useState } from "react";
import './sunglasses.css';

const SunglassesData = [
  {
    brand: "Ray-Ban",
    image: "src/assets/ray-ban-black.webp",
    description: "Classic and stylish sunglasses with superior UV protection.",
    detailsDoc: "/assets/rayban-details.docx", 
    moreImages: ["src/assets/rayban1.webp", "src/assets/rayban2.jpg","src/assets/rayban3.jpg","src/assets/rayban4.avif","src/assets/rayban5.webp"],
    moreDescriptions: ["Aviator style with polarized lenses.The image shows a pair of Ray-Ban Clubround Classic sunglasses (model RB4246) in black, along with their case and packaging, placed on a wooden surface next to a small potted plant", "Wayfarer style with a modern touch.The lenses are described as brown polarized polycarbonate, enhancing contrast and reducing glare, while providing UV protection. The frame shape is square, and the style is often referred to as Wayfarer, a classic design popular since the 1950s.","A vintage design with a modern twist. The RayBan Clubmaster sunglasses have the iconic features, including the mental nosebridge and the iconic pins on the front of the sunglasses"
      ,"These sunglasses feature a modern take on the pillow shape with narrow frames and rounded edges. The frame is made from bio-based materials, offering a lightweight and durable design. The lenses are brown and provide 100% UV protection.","Full-rim and wayfarer shape, these eyeglasses are wide enough to cover all points of your vision. The air nose pads, non-slip temples, and high-end optical hinges are for a secured but nice fit",],
  },
  {
    brand: "Oakley",
    image: "/src/assets/aokley.jpeg",
    description: "High-performance sunglasses designed for sports.",
    detailsDoc: "src/assets/oakley-details.docx",
    moreImages: ["src/assets/oakley1.avif", "src/assets/oakley2.png","src/assets/oakely3.avif","src/assets/oakely4.avif","src/assets/oakely5.avif"],
    moreDescriptions: ["Sporty wraparound design.The upper pair features a Celeste frame with Prizm Road lenses, while the lower pair has a darker frame with what appears to be Prizm Road lenses as well"
      , "Lightweight frames with UV protection.These sunglasses are designed for sports and everyday use, offering durability, comfort, and enhanced vision through Prizm lens technology, which enhances color and contrast.",
      "Oakley Holbrook Kokoro Collection sunglasses. These sunglasses are notable for their unique design, featuring a Kokoro colorway which is multicolored"
      ,"Oakley Flak 2.0 XL sunglasses. These sport sunglasses feature a red and black frame and grey lenses.",
      "Oakley Holbrook Ti sunglasses with a satin gold frame and Prizm black polarized lenses. These sunglasses are designed with a lightweight, corrosion-resistant titanium frame"]
  },
  {
    brand: "Gucci",
    image: "src/assets/gucci-sunglasses.webp",
    description: "Luxury sunglasses blending fashion and elegance.",
    detailsDoc: "src/assets/gucci-details.docx",
    moreImages: ["src/assets/gucci1.jpg", "src/assets/gucci2.jpg","src/assets/gucci3.jpg","src/assets/gucii4.jpg","src/assets/gucii5.webp","src/assets/gucci6.webp"],
    moreDescriptions: ["Oversized frames with iconic Gucci branding.",
       "Sleek and stylish for modern elegance.",
      "Shade in style! ☀ Get the trendiest sunglasses for the perfect look. Shop now!",
      "Here’s a short and precise ad for your Gucci sunglasses:Luxury in every glance! 🕶 Elevate your style with Gucci sunglasses. Shop now!",
    "KTimeless elegance, iconic style! ✨ Upgrade your look with Gucci GG0356S aviator sunglasses. Shop now!",
     "Radiate elegance with Gucci Fatmastic Beauty – rimless design, pink-tinted lenses, and crystal accents. Shop now!",]
  },
  {
    brand: "Prada",
    image: "src/assets/prada.jpeg",
    description: "Bold and sophisticated sunglasses with high-end craftsmanship.",
    detailsDoc: "src/assets/prada-details.docx",
    moreImages: ["src/assets/prada1.jpg",
       "src/assets/prada2.avif",
      "src/assets/prada3.avif",
      "src/assets/prada4.avif",
      "src/assets/prada5.avif",
      "src/assets/prada6.avif"],
    moreDescriptions: ["Elegant cat-eye frames.", 
    "Minimalist design with luxury appeal.",
    "Chic & trendy! 💖 Elevate your style with I-Gog IG-9525 transparent pink cat-eye sunglasses. Shop now!",
  "Bold elegance, timeless style! 🕶 Elevate your look with Prada's iconic rectangular sunglasses. Shop now!",
"Luxury meets style! ✨ Dragon Aria Rose Wood sunglasses with Lumalens—elevate your look today. Shop now!",
]
  },
];

const Sunglasses = () => {
  const [expandedBrand, setExpandedBrand] = useState(null);
  const [comparisonList, setComparisonList] = useState([]);

  const toggleMoreInfo = (brand) => {
    setExpandedBrand(expandedBrand === brand ? null : brand);
  };

  const toggleCompare = (brand) => {
    setComparisonList(prev => 
      prev.includes(brand) ? prev.filter(item => item !== brand) : [...prev, brand]
    );
  };

  const selectedSunglass = SunglassesData.find(sunglass => sunglass.brand === expandedBrand);
  const comparedProducts = SunglassesData.filter(sunglass => comparisonList.includes(sunglass.brand));

  return (
    <div className="sunglasses-container" id="sunglasses">
      <h1>Sunglasses Collection</h1>

      {selectedSunglass ? (
        <div className="sunglass-details">
          <button onClick={() => setExpandedBrand(null)} className="back-button">Back</button>
          {selectedSunglass.moreImages.map((img, idx) => (
            <div key={idx} className="sunglass-variant">
              <img src={img} alt={`${selectedSunglass.brand} variant ${idx + 1}`} className="variant-image" />
              <p>{selectedSunglass.moreDescriptions[idx]}</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="sunglasses-scroll">
            {SunglassesData.map((sunglass, index) => (
              <div key={index} className="sunglass-card">
                <img src={sunglass.image} alt={sunglass.brand} className="sunglass-image" />
                <h3>{sunglass.brand}</h3>
                <p>{sunglass.description}</p>
                <button onClick={() => toggleMoreInfo(sunglass.brand)}>Show More</button>
                <a href={sunglass.detailsDoc} download className="download-link">Download Details</a>
                <label className="compare-checkbox">
                  <input 
                    type="checkbox" 
                    checked={comparisonList.includes(sunglass.brand)}
                    onChange={() => toggleCompare(sunglass.brand)}
                  />
                  Compare
                </label>
              </div>
            ))}
          </div>

          {comparisonList.length > 0 && (
            <div className="comparison-section">
              <h2>Comparison Table</h2>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Brand</th>
                    <th>Image</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {comparedProducts.map((product, index) => (
                    <tr key={index}>
                      <td>{product.brand}</td>
                      <td>
                        <img src={product.image} alt={product.brand} className="compare-image" />
                      </td>
                      <td>{product.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Sunglasses;
