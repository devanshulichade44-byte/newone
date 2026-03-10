import React, { useState } from "react";
import "./Accessories.css";

// ✅ Image Imports
import whitesuit from "../assets/whitesuit.jpg";
import blacksuit from "../assets/blacksuit.jpg";
import navyblue from "../assets/navyblue.jpg";
import navyblues from "../assets/navyblues.jpg";
import sun1 from "../assets/sun1.jpeg";
import sun2 from "../assets/sun2.jpeg";
import sun3 from "../assets/sun3.jpeg";
import sun4 from "../assets/sun4.jpeg";
import sportswear from "../assets/sportswear.jpeg";
import shoes2 from "../assets/shoes2.jpeg";
import shoes3 from "../assets/shoes3.jpeg";
import shoes4 from "../assets/shoes4.jpeg";
import shoes5 from "../assets/shoes5.jpeg";
import shoes6sp from "../assets/shoes6sp.jpeg";
import watch1 from "../assets/watch1.jpeg";
import watch2 from "../assets/watch2.jpeg";
import watch3 from "../assets/watch3.jpg";
import watch4 from "../assets/watch4.jpg";
// ✅ Accessories Data
const sunglasses = [
  { title: "Aviator Sunglasses", tag: "Classic", img: sun1, desc: "Timeless aviator frames that add a classy touch." },
  { title: "Round Sunglasses", tag: "Vintage", img: sun2, desc: "Retro circular frames for a trendy aesthetic." },
  { title: "Square Sunglasses", tag: "Modern", img: sun3, desc: "Bold angular frames for a sharp modern look." },
   { title: "Square Sunglasses", tag: "Modern", img: sun4, desc: "Bold angular frames for a sharp modern look." },
];

const shoes = [
  { title: "Loafers", tag: "Semi-formal", img: sportswear, desc: "Comfortable slip-ons perfect for classy casual looks." },
  { title: "Oxford Shoes", tag: "Formal", img: shoes2, desc: "Elegant lace-up shoes ideal for formal wear." },
  { title: "Sneakers", tag: "Casual", img: shoes3, desc: "Everyday versatile sneakers for comfort & style." },
  { title: "Derby Shoes", tag: "Formal", img: shoes4, desc: "Classic derby shoes for a polished appearance." },
  { title: "Brogues", tag: "Stylish", img: shoes5, desc: "Decorative perforated shoes for a fashionable edge." },
  { title: "Boat Shoes", tag: "Casual", img: shoes6sp, desc: "Relaxed slip-on shoes perfect for casual outings." },
];

const watches = [
  { title: "Analog Dress Watch", tag: "Elegant", img: watch1, desc: "Classic dial design for formal and classy outfits." },
  { title: "Smart Watch", tag: "Modern", img: watch2, desc: "Tech integrated stylish smart wearable option." },
  { title: "Chronograph Watch", tag: "Sporty", img: watch3, desc: "Feature-packed sporty watch with bold dial." },
    { title: "Chronograph Watch", tag: "Sporty", img: watch4, desc: "Feature-packed sporty watch with bold dial." },

];

// ✅ Reusable Grid Component
function AccessoriesSection({ id, title, items }) {
  return (
    <section id={id} className="mensaccessories-section">
      <h2 className="mensaccessories-section-title">{title}</h2>

      <div className="mensaccessories-grid-container">
        {items.map((item, index) => (
          <div className="mensaccessories-grid-item" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <span className="mensaccessories-tag">{item.tag}</span>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ✅ Main Component
export default function Accessories() {
  const [color, setColor] = useState("");
  const [outfitType, setOutfitType] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleColorSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    setError("");

    const userPrompt = `Suggest a men's accessory for ${color} outfit. Accessory type: ${outfitType}. Make the tone stylish.`;

    try {
      const res = await fetch("http://localhost:5000/api/Accessories-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userPrompt }),
      });

      const data = await res.json();
      if (!data.reply) {
        setError("No response from AI — check backend API");
      } else {
        setResult(data.reply);
      }
    } catch {
      setError("Server error — check Node backend");
    }

    setLoading(false);
  };

  return (
    <div className="mensaccessories-container">

      {/* ✅ Hero */}
      <div className="mensaccessories-hero">
        <span className="mensaccessories-badge">Men’s Accessories Guide</span>
        <h1 className="mensaccessories-title">Premium Accessories Inspiration</h1>
        <p className="mensaccessories-subtitle">
          Level up your style with classy sunglasses, footwear & watches.
        </p>
      </div>

      {/* ✅ AI Box */}
      <div className="ai-box">
        <h2 className="ai-title">AI Accessory Suggestion</h2>

        <form onSubmit={handleColorSubmit} className="ai-form">
          <input
            type="text"
            placeholder="Enter outfit color — e.g. Black, Beige"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="ai-input"
            required
          />

          <select
            value={outfitType}
            onChange={(e) => setOutfitType(e.target.value)}
            className="ai-select"
            required
          >
            <option value="">Select Accessory</option>
            <option value="sunglasses">Sunglasses</option>
            <option value="watch">Watch</option>
            <option value="shoes">Shoes</option>
            <option value="belt">Belt</option>
            <option value="bracelet">Bracelet</option>
          </select>

          <button type="submit" className="ai-btn" disabled={loading}>
            {loading ? "Styling..." : "Get Style Suggestion"}
          </button>
        </form>

        {error && <p className="ai-error">{error}</p>}

        {result && (
          <div className="ai-result-box">
            <h3 className="ai-result-title">Suggested Fit</h3>
            <p className="ai-result">{result}</p>
          </div>
        )}
      </div>

      {/* ✅ Sections */}
      <AccessoriesSection id="sunglasses" title="Types Of Sunglasses" items={sunglasses} />
      <AccessoriesSection id="shoes" title="Footwear Styles" items={shoes} />
      <AccessoriesSection id="watches" title="Watch Styles" items={watches} />
    </div>
  );
}
