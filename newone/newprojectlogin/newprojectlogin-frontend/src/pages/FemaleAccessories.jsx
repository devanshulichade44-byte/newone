import React, { useState } from "react";
import "./FemaleAccessories.css";

// ✅ Using same images as placeholders
import whitesuit from "../assets/whitesuit.jpg";
import blacksuit from "../assets/blacksuit.jpg";
import navyblue from "../assets/navyblue.jpg";
import navyblues from "../assets/navyblues.jpg";
import glasswo from "../assets/glasswo.jpeg";
import img2wo from "../assets/img2wo.jpeg";
import img3wo from "../assets/img3wo.jpeg";
import bag1 from "../assets/bag1.jpeg";
import bag2 from "../assets/bag2.jpeg";
import bag3 from "../assets/bag3.jpeg";
import jwe1 from "../assets/jwe1.jpeg";
import jwe2 from "../assets/jwe2.jpeg";
import jew3 from "../assets/jew3.jpeg";
// ✅ Female Accessories Data
const sunglasses = [
  { title: "Cat-Eye Sunglasses", tag: "Chic", img: glasswo, desc: "Elegant cat-eye frames that add feminine charm & sophistication." },
  { title: "Oversized Shades", tag: "Luxury", img: img2wo, desc: "Bold oversized sunglasses for a rich classy look." },
  { title: "Round Retro Frames", tag: "Vintage", img: img3wo, desc: "Timeless round frames inspired by old-money fashion aesthetics." }
];

const bags = [
  { title: "Mini Handbag", tag: "Elegant", img: bag1, desc: "Compact luxury handbag perfect for classy outings & brunch dates." },
  { title: "Shoulder Bag", tag: "Classic", img: bag2, desc: "Everyday premium shoulder bag for a clean, graceful silhouette." },
  { title: "Pearl Clutch", tag: "Royal", img: bag3, desc: "Statement pearl clutch for parties & premium fashion events." }
];

const jewelry = [
  { title: "Pearl Necklace", tag: "Timeless", img: jwe1, desc: "Classic pearl necklace for a refined, old-money elegance." },
  { title: "Gold Hoop Earrings", tag: "Trendy", img: jwe2, desc: "Minimal gold hoops — subtle yet stunning fashion staple." },
  { title: "Stone Bracelet", tag: "Graceful", img: jew3, desc: "Delicate bracelet with stones for a soft luxury finish." }
];

// ✅ Reusable Section Component
function AccessoriesSection({ id, title, items }) {
  return (
    <section id={id} className="femaleaccessories-section">
      <h2 className="femaleaccessories-section-title">{title}</h2>

      <div className="femaleaccessories-grid-container">
        {items.map((item, index) => (
          <div className="femaleaccessories-grid-item" key={index}>
            <img src={item.img} alt={item.title} className="femaleaccessories-img" />
            <h3 className="femaleaccessories-name">{item.title}</h3>
            <span className="femaleaccessories-tag">{item.tag}</span>
            <p className="femaleaccessories-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ✅ Main Component
export default function FemaleAccessories() {
  const [color, setColor] = useState("");
  const [outfit, setOutfit] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAISubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    setError("");

    const userPrompt = `Suggest a women's accessory for ${color} outfit. Type: ${outfit}. Tone: elegant, feminine, premium.`;

    try {
      const res = await fetch("http://localhost:5000/api/feAccessories-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userPrompt }),
      });

      const data = await res.json();
      if (!data.reply) {
        setError("No response from AI");
      } else {
        setResult(data.reply);
      }
    } catch {
      setError("Backend not running / network error");
    }

    setLoading(false);
  };

  return (
    <div className="femaleaccessories-container">

      {/* Hero */}
      <div className="femaleaccessories-hero">
        <span className="femaleaccessories-badge">Women's Accessories Guide</span>
        <h1 className="femaleaccessories-title">Luxury Accessories Inspiration</h1>
        <p className="femaleaccessories-subtitle">
          Elevate your elegance with pearls, gold, handbags & timeless fashion accents.
        </p>
      </div>

      {/* ✅ AI Fashion Box */}
      <div className="ai-box">
        <h2 className="ai-title">AI Accessory Recommendation</h2>

        <form onSubmit={handleAISubmit} className="ai-form">
          <input
            type="text"
            placeholder="Enter outfit color — e.g., Beige, Black"
            className="ai-input"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />

          <select
            className="ai-select"
            value={outfit}
            onChange={(e) => setOutfit(e.target.value)}
            required
          >
            <option value="">Select Accessory</option>
            <option value="bag">Designer Bag</option>
            <option value="jewelry">Jewelry</option>
            <option value="sunglasses">Sunglasses</option>
            <option value="hair accessories">Hair Accessories</option>
            <option value="scarf">Scarf</option>
          </select>

          <button type="submit" className="ai-btn" disabled={loading}>
            {loading ? "Styling..." : "Get Styled Suggestion"}
          </button>
        </form>

        {error && <p className="ai-error">{error}</p>}

        {result && (
          <div className="ai-result-box">
            <h3 className="ai-result-title">AI Suggestion</h3>
            <p className="ai-result">{result}</p>
          </div>
        )}
      </div>

      {/* Sections */}
      <AccessoriesSection id="sunglasses" title="Luxury Sunglasses" items={sunglasses} />
      <AccessoriesSection id="bags" title="Designer Handbags" items={bags} />
      <AccessoriesSection id="jewelry" title="Elegant Jewelry" items={jewelry} />

    </div>
  );
}
