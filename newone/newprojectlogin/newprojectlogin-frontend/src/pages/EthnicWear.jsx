import React, { useState } from "react";
import "./Casual.css";

// ✅ Image Imports (use your assets placeholder)
import whitesuit from "../assets/whitesuit.jpg";
import blacksuit from "../assets/blacksuit.jpg";
import navyblue from "../assets/navyblue.jpg";
import navyblues from "../assets/navyblues.jpg";
import greynehru from "../assets/greynehru.jpeg";
import navynehru from "../assets/navynehru.jpeg";
import printjacket from "../assets/printjacket.jpeg";
import brownjacket from "../assets/brownjacket.jpeg";
import brownnehru from "../assets/brownnehru.jpeg";
import greyjodh from "../assets/greyjodh.jpeg";
import bluejodh from "../assets/bluejodh.jpeg";
import designjodh from "../assets/designjodh.jpeg";
import nicejodh from "../assets/nicejodh.jpeg";
import kurtaone from "../assets/kurtaone.jpeg";
import purplekurta from "../assets/purplekurta.jpeg";
import whitekurta from "../assets/whitekurta.jpeg";
import blackkurtas from "../assets/blackkurtas.jpeg";
import dhotisone from "../assets/dhotisone.jpeg";
import purpledhotis from "../assets/purpledhotis.jpeg";
import classicdhotis from "../assets/classicdhotis.jpeg";
import whitedhotis from "../assets/whitedhotis.jpeg";
import navyveshti from "../assets/navyveshti.jpeg";
import colorveshti from "../assets/colorveshti.jpeg";
import greenveshti from "../assets/greenveshti.jpeg";
import whiteveshti from "../assets/whiteveshti.jpeg";
// ✅ Reusable component
function Section({ id, title, items }) {
  // You need to destructure these props for the AI section if you want to use them here,
  // or pass them down from TraditionalWear. For now, I'll assume they are handled
  // in TraditionalWear and this Section component only renders the traditional items.
  // If you intend for the AI section to be inside *each* Section, then you'd need
  // to manage its state within each Section component, which is probably not what you want.

  // The AI section should likely be a separate component or live in TraditionalWear.
  // For the purpose of fixing the immediate syntax error, I'll move it out of here
  // and assume it's part of the TraditionalWear component where its state (`color`, `outfitType`, etc.) is managed.

  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      <div className="grid-container">
        {items.map((item, index) => (
          <div className="grid-item" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p className="tag">{item.tag}</p>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ✅ ====== Traditional Wear Data ====== */
const nehruJackets = [
  { title: "Classic Tailored Nehru Jacket", tag: "Elegant", img: greynehru, desc: "Timeless tailored silhouette, perfect for refined traditional looks." },
  { title: "Silk Festive Nehru Jacket", tag: "Festive", img: navynehru, desc: "Smooth silk sheen ideal for weddings, rituals, and cultural events." },
  { title: "Printed Modern Nehru Jacket", tag: "Trendy", img: printjacket, desc: "Subtle ethnic prints for a stylish contemporary twist." },
  { title: "Velvet Royal Nehru Jacket", tag: "Royal", img: brownjacket, desc: "Luxurious velvet ideal for winter weddings and regal outfits." },
  { title: "Embroidered Grand Nehru Jacket", tag: "Ornate", img: brownnehru, desc: "Fine traditional embroidery for majestic festive occasions." },
];


const jodhpuriSuits = [
  { title: "Classic Royal Jodhpuri", tag: "Royal", img: greyjodh, desc: "Structured royal fit with a rich traditional touch." },
  { title: "Elegant Bandhgala Suit", tag: "Elegant", img: bluejodh, desc: "Sophisticated bandh gala style — ideal for receptions & formal events." },
  { title: "Velvet Luxury Jodhpuri", tag: "Premium", img: designjodh, desc: "Premium velvet design for royal evening ceremonies." },
  { title: "Embroidered Heritage Jodhpuri", tag: "Festive", img: nicejodh, desc: "Detailed craftsmanship for high-end festive celebrations." },
];
const kurtas = [
  { title: "Solid Classic Kurta", tag: "Minimal", img: kurtaone, desc: "Clean, minimal kurta ideal for a classy traditional vibe." },
  { title: "Printed Festive Kurta", tag: "Trendy", img: purplekurta, desc: "Soft prints that elevate everyday festive style." },
  { title: "Traditional Pathani Kurta", tag: "Classic", img: whitekurta, desc: "Pathani silhouette for a bold and regal ethnic appearance." },
  { title: "Short Casual Kurta", tag: "Casual", img: blackkurtas, desc: "Modern short-length kurta perfect for daily Indo-casual fits." },
];
const dhotis = [
  { title: "Classic Cotton Dhoti", tag: "Traditional", img: dhotisone, desc: "Lightweight cotton dhoti for authentic cultural wear." },
  { title: "Silk Temple Dhoti", tag: "Festive", img: purpledhotis, desc: "Shiny silk drape perfect for poojas and grand events." },
  { title: "Golden Border Dhoti", tag: "Royal", img: classicdhotis, desc: "Traditional South-Indian dhoti with rich zari detailing." },
  { title: "Fusion Dhoti Pants", tag: "Fusion", img: whitedhotis, desc: "Contemporary dhoti pants blending comfort and ethnic elegance." },
];
const veshti = [
  { title: "Classic White Veshti", tag: "Traditional", img: whiteveshti, desc: "Pure white veshti for classic South Indian ceremonial wear." },
  { title: "Golden Border Veshti", tag: "Festive", img: colorveshti, desc: "Golden-border veshti ideal for temple visits & weddings." },
  { title: "Zari Border Veshti", tag: "Royal", img: greenveshti, desc: "Rich zari border for premium cultural occasions." },
  { title: "Silk Wedding Veshti", tag: "Premium", img: navyveshti, desc: "Elegant silk veshti crafted for grand celebrations." },
];




export default function TraditionalWear() {
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("traditional"); // This state is not used
  const [result, setResult] = useState("");
  const [outfitType, setOutfitType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleColorSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    setError("");

    const userPrompt = `Give a traditional ethnic outfit suggestion for ${color} color.
Outfit Type: ${outfitType}.`;

    try {
      // You'll need to make sure your backend server is running on http://localhost:5000
      const res = await fetch("http://localhost:5000/api/traditional-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userPrompt }),
      });

      const data = await res.json();
      if (!data.reply) setError("No response from AI. Check backend or HF API key.");
      else setResult(data.reply);
    } catch (err) {
      setError("❌ Error fetching AI style — check server.");
      console.error("AI Fetch Error:", err); // Log the actual error for debugging
    }

    setLoading(false);
  };

  return (
    <div className="casual-container">
      <div className="casual-hero">
        <span className="casual-badge">Indian Traditional Guide</span>
        <h1 className="casual-title">Traditional Ethnic Style Inspiration</h1>
        <p className="casual-subtitle">
          Explore elegant Indian ethnic wear — perfect for weddings, festivals and cultural events.
        </p>
      </div>

      {/* ✅ AI Outfit Suggestion UI */}
      {/* Moved this section here as its state management is in TraditionalWear */}
      <div className="ai-box">
        <h2 className="ai-title">AI Traditional Outfit Suggestion</h2>

        <form onSubmit={handleColorSubmit} className="ai-form">
          {/* 🎨 Color Input */}
          <input
            type="text"
            placeholder="Enter color e.g., White, Maroon"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="ai-input"
            required
          />

          {/* 👔 Outfit Type Dropdown */}
          <select
            value={outfitType}
            onChange={(e) => setOutfitType(e.target.value)}
            className="ai-select"
            required
          >
            <option value="">Select Outfit Type</option>
            <option value="nehru jacket">Nehru Jacket</option>
            <option value="jodhpuri suit">Jodhpuri Suit</option>
            <option value="kurta">Kurta</option>
            <option value="dhoti">Dhoti</option>
            <option value="veshti">Veshti</option>
          </select>

          {/* ⚡ Submit */}
          <button type="submit" className="ai-btn" disabled={loading}>
            {loading ? "Getting Suggestions..." : "Get Style Suggestion"}
          </button>
        </form>

        {/* ✅ Error Message */}
        {error && <p className="ai-error">{error}</p>}

        {/* ✅ Result */}
        {result && (
          <div className="ai-result-box">
            <h3 className="ai-result-title">Suggested Outfit</h3>
            <p className="ai-result">{result}</p>
          </div>
        )}
      </div>

      {/* ✅ Sections */}
      <Section id="nehru" title="Nehru Jackets" items={nehruJackets} />
      <Section id="jodhpuri" title="Jodhpuri Suits" items={jodhpuriSuits} />
      <Section id="kurtas" title="Kurtas" items={kurtas} />
      <Section id="dhotis" title="Dhotis" items={dhotis} />
      <Section id="veshti" title="Veshti" items={veshti} />
    </div>
  );
}