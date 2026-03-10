import React, { useState } from "react";
import "./Formal.css";

import whitesuit from "../assets/whitesuit.jpg";
import blacksuit from "../assets/blacksuit.jpg";
import navyblue from "../assets/navyblue.jpg";
import navyblues from "../assets/navyblues.jpg";
import blackwomansuit from "../assets/blackwomansuit.jpeg";
import greywomansuit from "../assets/greywomansuit.jpeg";
import greywomensuit from "../assets/greywomensuit.jpeg";
import pinkwomensuit from "../assets/pinkwomensuit.jpeg";
import beigewomansuit from "../assets/beigewomansuit.jpeg";
import purplewomansuit from "../assets/purplewomansuit.jpeg";
import ok2suitwoman from "../assets/ok2suitwoman.jpeg";
import beigewomanshirt from "../assets/beigewomanshirt.jpeg";
import bluewoman5 from "../assets/bluewoman5.jpeg";
import bluewomanshirt from "../assets/bluewomanshirt.jpeg";
import greenshirt from "../assets/greenshirt.jpeg";
import purplwoman from "../assets/purplwoman.jpeg";
import womanshirt from "../assets/womanshirt.jpeg";
import pantswoman from "../assets/pantswoman.jpg";
import pants2 from "../assets/pants2.jpeg";
import blackwoman from "../assets/blackwoman.jpeg";
import pnts4 from "../assets/pnts4.jpg";
import pants5 from "../assets/pants5.jpg";
// ✅ Formal Styles Data
const blazerLooks = [
  {
    title: "Beige Blazer Set",
    tag: "Elegant",
    img: blackwomansuit,
    desc: "Soft beige blazer paired with wide trousers & heels.",
  },
  {
    title: "Black Power Blazer",
    tag: "Bold",
    img: greywomansuit,
    desc: "Chic black blazer look perfect for boss mode meetings.",
  },
  {
    title: "White Blazer Monochrome",
    tag: "Classic",
    img: beigewomansuit,
    desc: "All white luxury blazer outfit for premium appeal.",
  },
  {
    title: "Grey Tailored Blazer",
    tag: "Sophisticated",
    img : pinkwomensuit ,
     desc: "All white luxury blazer outfit for premium appeal.",
  },
   {
    title: "Grey Tailored Blazer",
    tag: "Sophisticated",
    img : purplewomansuit ,
     desc: "All white luxury blazer outfit for premium appeal.",
  }, 
   {
    title: "Grey Tailored Blazer",
    tag: "Sophisticated",
    img : ok2suitwoman ,
     desc: "All white luxury blazer outfit for premium appeal.",
  }
];

const formalDresses = [
  {
    title: "Mid Length Dress",
    tag: "Minimal",
    img: beigewomanshirt,
    desc: "Soft-tone minimal dress for luxury work styling.",
  },
  {
    title: "Shift Dress",
    tag: "Modern",
    img: blackwomansuit,
    desc: "Clean silhouette perfect for presentations and meetings.",
  },
  {
    title: "Wrap Dress",
    tag: "Elegant",
    img: bluewoman5,
    desc: "Elegant wrap dress that gives structure & confidence.",
  },
  {
    title: "Wrap Dress",
    tag: "Elegant",
    img: bluewomanshirt,
    desc: "Elegant wrap dress that gives structure & confidence.",
  },
  {
    title: "Wrap Dress",
    tag: "Elegant",
    img: greenshirt,
    desc: "Elegant wrap dress that gives structure & confidence.",
  },
 {
    title: "Wrap Dress",
    tag: "Elegant",
    img: purplwoman,
    desc: "Elegant wrap dress that gives structure & confidence.",
  },
 
 
];

const PantStyles = [
  {
    title: "Cream Pant Suit",
    tag: "Premium",
    img: pantswoman,
    desc: "Luxury cream suit — timeless & powerful.",
  },
  {
    title: "Brown Suit Set",
    tag: "Rich Tone",
    img: pants2,
    desc: "Earth-tone suit for classy soft-power dressing.",
  },
  {
    title: "White Sharp Fit Suit",
    tag: "Statement",
    img: blackwoman,
    desc: "Modern & sharp tailored suit look for elite events.",
  },
   {
    title: "White Sharp Fit Suit",
    tag: "Statement",
    img: pnts4,
    desc: "Modern & sharp tailored suit look for elite events.",
  },
   {
    title: "White Sharp Fit Suit",
    tag: "Statement",
    img: pants5,
    desc: "Modern & sharp tailored suit look for elite events.",
  },
];

// ✅ Reusable Grid Component
function FormalGrid({ title, items }) {
  return (
    <div className="formal-grid-section">
      <h2 className="grid-heading">{title}</h2>
      <div className="formal-grid">
        {items.map((item, i) => (
          <div key={i} className="formal-card">
            <img src={item.img} alt={item.title} className="formal-img" />
            <div className="formal-info">
              <span className="tag">{item.tag}</span>
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
export default function FemaleFormal() {
  const [color, setColor] = useState("");
  const [outfit, setOutfit] = useState("");
  const [category] = useState("formal");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAISubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    setError("");

    const userPrompt = `Suggest a ${outfit} accessory to match a ${color} outfit for a ${category} environment. Provide premium and fashion-based suggestions.`;

    try {
      const res = await fetch("http://localhost:5000/api/femaleformal-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userPrompt }),
      });

      const data = await res.json();
      if (!data.reply) {
        setError("No response from AI. Check backend or API key.");
      } else {
        setResult(data.reply);
      }
    } catch (err) {
      setError("❌ Error fetching AI style — check your server connection.");
    }

    setLoading(false);
  };

  return (
    <div className="formal-container">
      {/* ✅ HERO SECTION */}
      <section className="formal-hero">
        <span className="formal-badge">Women's Premium Formal Wear</span>
        <h1 className="formal-title">Elite Formal Outfit Guide</h1>
        <p className="formal-subtitle">
          Effortless elegance meets modern sophistication — curated styles to
          elevate your boss energy.
        </p>

        {/* ✅ AI ACCESSORY RECOMMENDER */}
        <div className="ai-style-box">
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
              <option value="">Select Female Formal</option>
                <option value="blazer">Blazer</option>
                <option value="pantsuit">Pant-Suit</option>
                <option value="formal dress">Formal Dress</option>
                <option value="heels">Heels</option>
                <option value="jewelry">Minimal Jewelry</option>
                <option value="bag">Structured Bag</option>

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
        </div>
      </section>

      {/* ✅ FORMAL LOOKS GRID SECTIONS */}
      <FormalGrid title="Luxury Blazer Looks" items={blazerLooks} />
      <FormalGrid title="Elegant Work Dresses" items={formalDresses} />
      <FormalGrid title="PantStyles" items={PantStyles} />
    </div>
  );
}
