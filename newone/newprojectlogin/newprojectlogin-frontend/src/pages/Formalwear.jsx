import React, { useState } from "react";
import "./formal.css";
import tan from "../assets/tan.jpeg";
import coffee from "../assets/coffee.jpeg";
import brown from "../assets/brown-suit.jpeg";
import oilve from "../assets/oilve-suit.jpeg"
import offwhite from "../assets/offwhite.jpeg";
import sand from "../assets/sandsuit.jpeg";
import beige from "../assets/beigesuit.jpeg";
import lightgrey from "../assets/lightgrey.jpeg";
import whitesuit2 from "../assets/whitesuit2.jpeg";
import blacksuit from "../assets/blacksuit.jpg";
import navyblue from "../assets/navyblue.jpg";
import navyblues from "../assets/navyblues.jpg";
import snowwhite from "../assets/snowwhite.jpeg";
import iceblue from "../assets/iceblue.jpeg";
import softlavendar from "../assets/softlavendar.jpeg";
import sandbeige from "../assets/sandbeige.jpeg";
import babypink from "../assets/babypink.jpeg";
import sagegreen from "../assets/sagegreen.jpeg";
import paleyellow from "../assets/paleyellow.jpeg";
import champagne from "../assets/champagne.jpeg";
import burntorange from "../assets/burntorange.jpeg";
import skyblue from "../assets/skyblue.jpeg";
import softmint from "../assets/softmint.jpeg";
import forsetgreen from "../assets/forsetgreen.jpeg";
import taupe from "../assets/taupe.jpeg";
import desertsand from "../assets/desertsand.jpeg";
import cream from "../assets/cream.jpeg";
import cloudgrey from "../assets/cloudgrey.jpeg";
import ivory from "../assets/ivory.jpeg";
import graphitegrey from "../assets/graphitegrey.jpeg";
import midnightnavy from "../assets/midnightnavy.jpeg";
import black from "../assets/black.jpeg";
import brownderby from "../assets/brownderby.jpeg";
import tanloafers from "../assets/tanloafers.jpeg";




function Formalwear() {
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("formal");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);   // ✅ Loading state
  const [error, setError] = useState("");          // ✅ Error state

  const handleColorSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    setError("");

    const userPrompt = `Suggest formal outfit for ${color} in ${category} environment. 
    Give suit, shirt, tie, shoes suggestions.`;

    try {
      const res = await fetch("http://localhost:5000/api/formal-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userPrompt }),
      });

      const data = await res.json();
      if (!data.reply) {
        setError("No response from AI. Check backend or HF API key.");
      } else {
        setResult(data.reply);
      }
    } catch (err) {
      setError("❌ Error fetching AI style — check server.");
    }

    setLoading(false);
  };

  // ✅ Image lists
    const suits = [
  { 
    title: "Classic Black Suit", 
    tag: "Executive Essential", 
    img: blacksuit, 
    desc: "The timeless choice for power meetings, evening events, and formal occasions. A black suit delivers unmatched sophistication and authority." 
  },
  { 
    title: "Navy Royal Suit", 
    tag: "Modern Corporate", 
    img: navyblues, 
    desc: "Perfect for corporate settings and business travel. Navy suits showcase confidence, maturity, and versatile elegance." 
  },
  { 
    title: "Charcoal Steel Suit", 
    tag: "Leadership Choice", 
    img: navyblue, 
    desc: "Ideal for boardrooms, finance professionals, and presentations. Charcoal grey projects power, confidence, and executive presence." 
  },
  { 
    title: "Ivory White Suit", 
    tag: "Elite Summer Formal", 
    img: whitesuit2, 
    desc: "A premium pick for summer events, destination weddings, and luxury parties. Clean, sharp, and rich in personality." 
  },
  { 
    title: "Soft Light-Grey Suit", 
    tag: "Minimal Luxury", 
    img: lightgrey, 
    desc: "Modern and minimal. Light grey suits shine in day meetings, creative industries, and polished casual business looks." 
  },
  { 
    title: "Beige Cream Suit", 
    tag: "Desert Chic", 
    img: beige, 
    desc: "Perfect for warm climates & semi-formal events. Neutral tone gives a relaxed yet refined charm with effortless style." 
  },
  { 
    title: "Sandstone Suit", 
    tag: "Premium Daywear", 
    img: sand, 
    desc: "Ideal for outdoor events and brunch meetings. A stylish light-earth shade for refined daytime elegance." 
  },
  { 
    title: "Classic Off-White Suit", 
    tag: "Modern Romance", 
    img: offwhite, 
    desc: "Soft and versatile tone for receptions, daytime dates, and fashion-forward grooms. Clean, premium aesthetic." 
  },
  { 
    title: "Olive Green Suit", 
    tag: "Urban Executive", 
    img: oilve, 
    desc: "Perfect blend of bold and classy. Olive suits give a confident militaristic charm — ideal for creative & modern professionals." 
  },
  { 
    title: "Rich Brown Suit", 
    tag: "Vintage Gentleman", 
    img: brown, 
    desc: "Warm and elegant suit tone for autumn & winter. Adds depth, authority, and timeless gentleman charm." 
  },
  { 
    title: "Dark Coffee Suit", 
    tag: "Luxury Warm Tone", 
    img: coffee, 
    desc: "Deep chocolate elegance. Perfect for classy dinners, evening formals, and high-end business environments." 
  },
  { 
    title: "Golden Tan Suit", 
    tag: "Mediterranean Class", 
    img: tan, 
    desc: "Light-warm tone for stylish outdoor events. Perfect European summer vibe for men who love refined bold looks." 
  }
];

const shirts = [
  { 
    title: "Snow White", 
    tag: "Timeless Essential", 
    img: snowwhite, 
    desc: "The most versatile formal shirt — works with every suit color." 
  },
  { 
    title: "Ice Blue", 
    tag: "Corporate Calm", 
    img: iceblue, 
    desc: "Professional & clean — ideal with navy, charcoal & grey suits." 
  },
  { 
    title: "Soft Lavender", 
    tag: "Elegant Modern", 
    img: softlavendar, 
    desc: "A refined pastel tone perfect for classy business looks." 
  },
  { 
    title: "Sand Beige", 
    tag: "Warm Neutrals", 
    img: sandbeige, 
    desc: "Pairs beautifully with brown, olive, and tan suits." 
  },
  { 
    title: "Baby Pink", 
    tag: "Gentle Style", 
    img: babypink, 
    desc: "Soft tone adding personality; ideal with charcoal and navy suits." 
  },
  { 
    title: "Sage Green", 
    tag: "Fresh Luxe", 
    img: sagegreen, 
    desc: "Modern pastel choice — looks premium with brown and beige suits." 
  },
  { 
    title: "Pale Yellow", 
    tag: "Summer Formal", 
    img: paleyellow, 
    desc: "Perfect for sunny day events; works with beige & cream suits." 
  },
  { 
    title: "Champagne", 
    tag: "Rich Prestige", 
    img: champagne, 
    desc: "Elegant festive shade — pairs with dark & earthy suits." 
  },
  { 
    title: "Burnt Orange", 
    tag: "Statement Tone", 
    img: burntorange, 
    desc: "Bold evening shirt — ideal for fashion-forward formal looks." 
  },
  { 
    title: "Sky Blue", 
    tag: "Classic Light Blue", 
    img: skyblue, 
    desc: "Traditional office favorite — clean, fresh & smart." 
  },
  { 
    title: "Soft Mint", 
    tag: "Fresh Pastel", 
    img: softmint, 
    desc: "Unique & subtle — stylish alternative for spring/summer outfits." 
  },
];

 const pants = [
  {
    title: "Forest Green Formal Trousers",
    tag: "Premium Modern",
    img: forsetgreen,
    desc: "A rich and elegant shade — pairs beautifully with white, ivory, beige, and pastel shirts. Ideal for upscale office looks."
  },
  {
    title: "Taupe Formal Trousers",
    tag: "Neutral Luxe",
    img: taupe,
    desc: "Soft earthy tone — perfect for refined daytime and semi–formal outfits. Works great with cream, sky blue, and grey shirts."
  },
  {
    title: "Desert Sand Trousers",
    tag: "Warm Soft Formal",
    img: desertsand,
    desc: "A subtle beige tone giving relaxed yet classy vibes. Pairs well with white, navy, and olive shirts."
  },
  {
    title: "Cream Formal Trousers",
    tag: "Elegant Daywear",
    img: cream,
    desc: "Bright and sophisticated. Best for events, brunch formals, and business summers — pair with navy, black, or pastel shirts."
  },
  {
    title: "Cloud Grey Trousers",
    tag: "Minimal Classic",
    img: cloudgrey,
    desc: "Soft grey that fits every wardrobe. Works for workplaces and meetings — pairs with white, blue, and dark shirts."
  },
  {
    title: "Ivory Formal Trousers",
    tag: "Luxury Neutral",
    img: ivory,
    desc: "Premium shade for elevated style — matches perfectly with navy, maroon, and charcoal shirts. Elegant and subtle."
  },
  {
    title: "Graphite Grey Trousers",
    tag: "Executive Power",
    img: graphitegrey,
    desc: "Strong formal tone for high–authority settings. Works flawlessly with white, blue, and pastel shirts."
  },
  {
    title: "Midnight Navy Trousers",
    tag: "Ultimate Classic",
    img: midnightnavy,
    desc: "Deep navy shade — office essential. Best with white, pink, and light blue shirts. Timeless and versatile."
  },
  {
    title: "Black Formal Trousers",
    tag: "Elite Formal",
    img: black,
    desc: "Sharp & formal — perfect for evening business events and presentations. Works with white, grey, and pinstripe shirts."
  }
];

  const shoes = [
    { title: "Black Oxfords", tag: "Classic", img: brownderby, desc: "Must-have for formal suits." },
    { title: "Brown Derby", tag: "Business Formal", img: brownderby, desc: "Pairs with navy & brown tones." },
    { title: "Tan Loafers", tag: "Summer Day", img: tanloafers, desc: "Smart daytime look." },
    { title: "Brown Brogues", tag: "Textured Formal", img: navyblue, desc: "Adds detail but stays formal." }
  ];

  return (
    <div className="formal-container">
      <section className="formal-hero">
        <div className="formal-badge">StyleGlanz • Premium Formalwear Guide</div>
        <h1 className="formal-title">Master The Formal Look</h1>
        <p className="formal-subtitle">AI + premium fashion curation.</p>
      </section>

      <section className="color-box-wrap">
        <form onSubmit={handleColorSubmit} className="color-form">
          <h2>🎨 Suit Styling Assistant</h2>

          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="formal">Formal</option>
            <option value="office">Office</option>
          </select>

          <input
            type="text"
            placeholder="Enter suit color..."
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Thinking..." : "Get Styling Tip"}
          </button>
        </form>

        {/* ✅ AI Result or Error */}
        {loading && <p className="loading">⌛ Fetching fashion advice...</p>}
        {error && <p className="error-msg">{error}</p>}
        {result && (
          <div className="result-box">
            <h3>👔 Styling Recommendation</h3>
            <p>{result}</p>
          </div>
        )}
      </section>
      

      <Section title="Premium Suits" items={suits} />
      <Section title="Formal Shirts" items={shirts} />
      <Section title="Formal Pants" items={pants} />
      <Section title="Formal Shoes" items={shoes} />
    </div>
  );
}

function Section({ title, items }) {
  return (
    <section className="formal-grid-section">
      <h2 className="grid-heading">{title}</h2>
      <div className="formal-grid">
        {items.map((o, i) => (
          <article className="formal-card" key={i}>
            <img src={o.img} className="formal-img" alt={o.title} />
            <div className="formal-info">
              <span className="tag">{o.tag}</span>
              <h3>{o.title}</h3>
              <p>{o.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Formalwear;
