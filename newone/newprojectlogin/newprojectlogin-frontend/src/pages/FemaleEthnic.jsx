import React, { useState } from "react";
import "./FeEthnic.css";

import whitesuit from "../assets/whitesuit.jpg";
import blacksuit from "../assets/blacksuit.jpg";
import navyblue from "../assets/navyblue.jpg";
import navyblues from "../assets/navyblues.jpg";
import dress1 from "../assets/dress1.jpeg";
import dress2 from "../assets/dress2.jpeg";
import dress3 from "../assets/dress3.jpeg";
import dress4 from "../assets/dress4.jpeg";
import dress5 from "../assets/dress5.jpeg";
import dress6 from "../assets/dress6.jpeg";
import dress7 from "../assets/dress7.jpeg";
import saree1 from "../assets/saree1.jpeg";
import saree2 from "../assets/saree2.jpeg";
import saree3 from "../assets/saree3.jpeg";
import saree4 from "../assets/saree4.jpeg";
import saree5 from "../assets/saree5.jpeg";
import saree6 from "../assets/saree6.jpeg";
import saree7 from "../assets/saree7.jpeg";
import leh1 from "../assets/leh1.jpeg";
import leh2 from "../assets/leh2.jpeg";
import leh3 from "../assets/leh3.jpeg";
import leh4 from "../assets/leh4.jpeg";
import leh5 from "../assets/leh5.jpeg";
import leh6 from "../assets/leh6.jpeg";
import leh7 from "../assets/leh7.jpeg";
import leh8 from "../assets/leh8.jpeg";
// ✅ Ethnic Styles Data
const kurtaSets = [
  {
    title: "Beige Cotton Kurta Set",
    tag: "Comfort Fit",
    img: dress1,
    desc: "Soft cotton kurta paired with straight pants — everyday elegance.",
  },
  {
    title: "Black Silk Kurta Set",
    tag: "Festive",
    img: dress2,
    desc: "Luxurious silk kurta set perfect for evening events and poojas.",
  },
  {
    title: "White Chikankari Kurta",
    tag: "Classic",
    img: dress3,
    desc: "Graceful chikankari embroidered kurta for timeless ethnic charm.",
  },
  {
    title: "White Chikankari Kurta",
    tag: "Classic",
    img: dress4,
    desc: "Graceful chikankari embroidered kurta for timeless ethnic charm.",
  },
  {
    title: "White Chikankari Kurta",
    tag: "Classic",
    img: dress5,
    desc: "Graceful chikankari embroidered kurta for timeless ethnic charm.",
  },
  {
    title: "White Chikankari Kurta",
    tag: "Classic",
    img: dress6,
    desc: "Graceful chikankari embroidered kurta for timeless ethnic charm.",
  },
  {
    title: "White Chikankari Kurta",
    tag: "Classic",
    img: dress7,
    desc: "Graceful chikankari embroidered kurta for timeless ethnic charm.",
  },
  
  
];

const sareeLooks = [
  {
    title: "Pastel Organza Saree",
    tag: "Soft Glam",
    img: saree1,
    desc: "Elegant organza saree perfect for day functions and brunch weddings.",
  },
  {
    title: "Banarasi Silk Saree",
    tag: "Traditional",
    img : saree2,
    desc: "Rich golden weave saree for festive and cultural celebrations.",
  },
  {
    title: "Black Ruffle Saree",
    tag: "Modern",
    img: saree3,
    desc: "Contemporary ruffled saree look — chic & stylish.",
  },
  {
    title: "Black Ruffle Saree",
    tag: "Modern",
    img: saree4,
    desc: "Contemporary ruffled saree look — chic & stylish.",
  },
  {
    title: "Black Ruffle Saree",
    tag: "Modern",
    img: saree5,
    desc: "Contemporary ruffled saree look — chic & stylish.",
  },
  {
    title: "Black Ruffle Saree",
    tag: "Modern",
    img: saree6,
    desc: "Contemporary ruffled saree look — chic & stylish.",
  },
  {
    title: "Black Ruffle Saree",
    tag: "Modern",
    img: saree7,
    desc: "Contemporary ruffled saree look — chic & stylish.",
  },
];

const lehengaFits = [
  {
    title: "Cream Floral Lehenga",
    tag: "Fresh Look",
    img: leh1,
    desc: "Soft floral lehenga, ideal for haldi or mehendi ceremonies.",
  },
  {
    title: "Brown Embellished Lehenga",
    tag: "Royal",
    img: leh2,
    desc: "Earth-tone hand-worked lehenga for regal festive vibes.",
  },
  {
    title: "White Sequins Lehenga",
    tag: "Statement",
    img: leh3,
    desc: "Sparkling modern lehenga — perfect for reception nights.",
  },
  {
    title: "White Sequins Lehenga",
    tag: "Statement",
    img: leh4,
    desc: "Sparkling modern lehenga — perfect for reception nights.",
  },
  {
    title: "White Sequins Lehenga",
    tag: "Statement",
    img: leh4,
    desc: "Sparkling modern lehenga — perfect for reception nights.",
  },
  {
    title: "White Sequins Lehenga",
    tag: "Statement",
    img: leh5,
    desc: "Sparkling modern lehenga — perfect for reception nights.",
  },
  {
    title: "White Sequins Lehenga",
    tag: "Statement",
    img: leh6,
    desc: "Sparkling modern lehenga — perfect for reception nights.",
  },
  {
    title: "White Sequins Lehenga",
    tag: "Statement",
    img: leh7,
    desc: "Sparkling modern lehenga — perfect for reception nights.",
  },
  {
    title: "White Sequins Lehenga",
    tag: "Statement",
    img: leh8,
    desc: "Sparkling modern lehenga — perfect for reception nights.",
  },
];

// ✅ Reusable Grid Component
function EthnicGrid({ title, items }) {
  return (
    <div className="ethnic-grid-section">
      <h2 className="ethnic-grid-heading">{title}</h2>
      <div className="ethnic-grid">
        {items.map((item, i) => (
          <div key={i} className="ethnic-card">
            <img src={item.img} alt={item.title} className="ethnic-img" />
            <div className="ethnic-info">
              <span className="ethnic-tag">{item.tag}</span>
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
export default function FemaleEthnic() {
  // --- Chatbot states ---
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Namaste 👋! Tell me what ethnic look you want help with today — saree, kurta, or lehenga?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // --- Accessory AI states ---
  const [color, setColor] = useState("");
  const [outfit, setOutfit] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  // ✅ Accessory Recommendation Function
  const handleAISubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    setError("");

    const userPrompt = `Suggest a ${outfit} accessory to match a ${color} ethnic outfit for women. Include jewelry, bindi, handbag, and footwear pairing if possible.`;

    try {
      const res = await fetch("http://localhost:5000/api/femaleethnic-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userPrompt }),
      });

      const data = await res.json();
      if (!data.reply) setError("No response from AI. Check backend or API key.");
      else setResult(data.reply);
    } catch (err) {
      setError("❌ Error fetching AI style — check your server connection.");
    }

    setLoading(false);
  };

  // ✅ Chatbot Message Function
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { from: "user", text: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/fashion-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Suggest ethnic outfit ideas for: ${userMessage}. Include jewelry, color, fabric & style suggestions.`,
        }),
      });

      const data = await res.json();
      const aiReply =
        data.reply ||
        "Hmm... I couldn’t find that style right now. Try again! 💭";
      setMessages((prev) => [...prev, { from: "bot", text: aiReply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "⚠️ Error fetching AI response. Please check your backend connection.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="ethnic-container">
      {/* ✅ HERO */}
      <section className="ethnic-hero">
        <span className="ethnic-badge">Women's Ethnic Collection</span>
        <h1 className="ethnic-title">Graceful & Cultural Style Guide</h1>
        <p className="ethnic-subtitle">
          Traditional beauty meets modern elegance — perfect for festivals,
          weddings, poojas, and cultural celebrations.
        </p>

        {/* ✅ AI ACCESSORY RECOMMENDATION */}
        <div className="ai-style-box">
          <h2 className="ai-title">AI Accessory Recommendation</h2>

          <form onSubmit={handleAISubmit} className="ai-form">
            <input
              type="text"
              placeholder="Enter outfit color — Red, Beige, Black..."
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
              <option value="bangles">Bangles</option>
              <option value="necklace">Necklace</option>
              <option value="earrings">Earrings</option>
              <option value="bindi">Bindi</option>
              <option value="handbag">Handbag</option>
              <option value="footwear">Footwear</option>
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

 

      {/* ✅ ETHNIC LOOKS GRID */}
      <EthnicGrid title="Elegant Kurta Sets" items={kurtaSets} />
      <EthnicGrid title="Glam Saree Collection" items={sareeLooks} />
      <EthnicGrid title="Festive Lehenga Styles" items={lehengaFits} />
    </div>
  );
}
