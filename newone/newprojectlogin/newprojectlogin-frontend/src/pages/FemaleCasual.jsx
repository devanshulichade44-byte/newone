import React, { useState } from "react";
import "./FeCasual.css";

import whitesuit from "../assets/whitesuit.jpg";
import blacksuit from "../assets/blacksuit.jpg";
import navyblue from "../assets/navyblue.jpg";
import navyblues from "../assets/navyblues.jpg";
import wotshirts1 from "../assets/wotshirts1.jpg";
import wotshirts2 from "../assets/wotshirts2.jpeg";
import wotshirts3 from "../assets/wotshirts3.jpeg";
import wotshirts4 from "../assets/wotshirts4.jpeg";
import wotshirts5 from "../assets/wotshirts5.jpeg";
import wotshirts6 from "../assets/wotshirts6.jpg";
import jackests1 from "../assets/jackets1.jpeg";
import jk2 from "../assets/jk2.jpeg";
import jk3 from "../assets/jk3.jpeg";
import jk4 from "../assets/jk4.jpeg";
import jk5 from "../assets/jk5.jpeg";
import jk6 from "../assets/jk6.jpeg";
import hod1 from "../assets/hod1.jpeg";
import hod2 from "../assets/hod2.jpeg";
import hod3 from "../assets/hod3.jpeg";
import hod4 from "../assets/hod4.jpeg";
import hod5 from "../assets/hod5.jpeg";
import hod6 from "../assets/hod6.jpeg";
import hod7 from "../assets/hod7.jpeg";
import ho4 from "../assets/ho4.jpeg";
// ✅ Casual Styles Data
const comfyTees = [
  { title: "Beige Relaxed Tee", tag: "Chill Fit", img: wotshirts1, desc: "Soft beige oversized tee for everyday comfort." },
  { title: "Black Oversized Tee", tag: "Street", img: wotshirts2, desc: "Statement oversized black tee for casual street style." },
  { title: "White Classic Tee", tag: "Minimal", img: wotshirts3, desc: "Simple & classy white tee — wardrobe essential." },
  { title: "Grey Graphic Tee", tag: "Trendy", img: wotshirts4, desc: "Cool graphic tee for a laid-back look." },
  { title: "Navy Blue Tee", tag: "Versatile", img: wotshirts5, desc: "Navy tee that pairs well with any casual outfit." },
  { title: "Pastel Pink Tee", tag: "Soft", img: wotshirts6, desc: "Light pastel tee for a fresh, feminine vibe." }
];

const casualDresses = [
  { title: "Cotton Midi Dress", tag: "Soft Look", img: jackests1, desc: "Breathable cotton dress perfect for brunch days." },
  { title: "A-line Day Dress", tag: "Cute", img: jk2, desc: "A-line dress for a pretty, relaxed vibe." },
  { title: "Shirt Dress", tag: "Effortless", img: jk3, desc: "Smart yet casual shirt dress — comfy and stylish." } , 
  { title: "Floral Sundress", tag: "Fresh", img: jk4, desc: "Light floral dress ideal for sunny outings." },
  { title: "Denim Dress", tag: "Trendy", img: jk5, desc: "Casual denim dress for a cool, laid-back look." },
  { title: "Wrap Dress", tag: "Chic", img: jk6, desc: "Flattering wrap dress for an easygoing yet stylish appearance." }
];

const denimFits = [
  { title: "Cream Straight Jeans", tag: "Trendy", img: ho4, desc: "Straight fit jeans for a clean everyday look." },
  { title: "Brown Relaxed Jeans", tag: "Earthy", img: hod1, desc: "Earth-tone jeans for natural, soft-fashion styling." },
  { title: "White Wide Jeans", tag: "Fresh Look", img: hod2, desc: "Wide leg white denim for a cool bold look." } ,
  { title: "Light Blue Jeans", tag: "Classic", img: hod3, desc: "Timeless light blue jeans for versatile casual wear." },
  { title: "Beige Mom Jeans", tag: "Comfort", img: hod5, desc: "High-waisted mom jeans for a relaxed fit." },
  { title: "Navy Blue Jeans", tag: "Sleek", img: hod6, desc: "Dark navy jeans for a polished casual style." },
  { title: "Black Skinny Jeans", tag: "Edgy", img: hod7, desc: "Black skinny jeans for a bold, chic look." }

];

// ✅ Grid Component
function CasualGrid({ title, items }) {
  return (
    <div className="casual-grid-section">
      <h2 className="casual-grid-heading">{title}</h2>

      <div className="casual-grid">
        {items.map((item, i) => (
          <div key={i} className="casual-card">
            <img src={item.img} alt={item.title} className="casual-img" />

            <div className="casual-info">
              <span className="casual-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ✅ Main Component
export default function FemaleCasual() {
  const [color, setColor] = useState("");
  const [outfit, setOutfit] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleAISubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    setError("");

    const prompt = `Suggest a women's accessory for a ${color} outfit. Accessory type: ${outfit}. Style tone: classy, feminine, premium.`;

    try {
      const res = await fetch("http://localhost:5000/api/femalecascual-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      data.reply ? setResult(data.reply) : setError("No response from AI");
    } catch {
      setError("Backend not running / network error");
    }

    setLoading(false);
  };

  return (
    <div className="casual-container">

      {/* ✅ HERO */}
      <section className="casual-hero">
        <span className="casual-badge">Women's Everyday Casual Wear</span>
        <h1 className="casual-title">Effortless Casual Style Guide</h1>
        <p className="casual-subtitle">
          Chill, comfy & stylish fits — perfect for outings, brunch, college and travel.
        </p>
      </section> {/* End casual-hero here */}

      {/* ✅ AI Box - Moved outside the hero section */}
      <div className="ai-style-box"> {/* Renamed class to ai-style-box */}
        <h2 className="ai-title">AI Accessory Recommendation</h2>

        <form onSubmit={handleAISubmit} className="ai-form">
          <input
            type="text"
            placeholder="Enter outfit color — Beige, Black..."
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
            {loading ? "Styling..." : "Get Style Suggestion"}
          </button>
        </form>

        {error && <p className="ai-error">{error}</p>}
        {result && (
          <div className="ai-result-box">
            <h3 className="ai-result-title">AI Suggestion</h3>
            <p className="ai-result">{result}</p>
          </div>
        )}
      </div> {/* End ai-style-box here */}


      {/* ✅ GRID SECTIONS */}
      <CasualGrid title="Comfy Tee Looks" items={comfyTees} />
      <CasualGrid title="Cute Casual Dresses" items={casualDresses} />
      <CasualGrid title="Trendy Denim Fits" items={denimFits} />
    </div>
  );
}