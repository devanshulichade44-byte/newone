import React, { useState } from "react";
import "./Casual.css";

// ✅ Image Imports (using your current assets)
import whitesuit from "../assets/whitesuit.jpg";
import blacksuit from "../assets/blacksuit.jpg";
import navyblue from "../assets/navyblue.jpg";
import navyblues from "../assets/navyblues.jpg";
// New T-Shirt Images
import darkgrey from "../assets/darkgrey.jpeg";
import greyTShirt from "../assets/greytshirt.jpeg";
import marronTShirt from "../assets/marrontshirt.jpeg";
import mustardTShirt from "../assets/mustardtshirt.jpeg";
import navyBlueTShirt from "../assets/navybluetshirt.jpeg";
import sandtshrit from "../assets/sandtshrit.jpeg";
import skyBlueTShirt from "../assets/skybluetshirt.jpeg";
import whiteImg from "../assets/whiteimg.jpg";

import blueOver from "../assets/blueover.jpeg";
import brownOver from "../assets/brownover.jpeg";
import darkGreyOver from "../assets/darkgrey.jpeg";
import dustyBlueOver from "../assets/dustyblueover.jpeg";
import greenOver from "../assets/greenover.jpeg";
import greyOver from "../assets/greyover.jpeg";

// polo images
import beigepolo from "../assets/beigepolo.jpeg";
import blackpolo from "../assets/blackpolo.jpeg";
import navypolo from "../assets/navypolo.jpeg";
import burpolo from "../assets/burpolo.jpeg";
import greenpolo from "../assets/greenpolo.jpeg";
import GreyMelangepolo from "../assets/GreyMelangepolo.jpeg";
import mutlipolo from "../assets/mutlipolo.jpeg";
import bkPolo from "../assets/bkpolo.jpeg";
import greenWhitePolo from "../assets/greenwhitepolo.jpeg";
import blueWhitePolo from "../assets/bluewhitepolo.jpeg";
import navyWhitePolo from "../assets/navywhitepolo.jpeg";
import bkstripes from "../assets/bkstripes.jpg";
import blackstr from "../assets/blackstr.jpg";
import mestr from "../assets/mestr.jpg";
import okgreestr from "../assets/okgreestr.jpg";
import greystr from "../assets/greystr.jpg";
import levok from "../assets/levok.jpeg";
import mixhod2 from "../assets/mixhod2.jpg";
import colorhod from "../assets/colorhod.jpeg";
import greenhod from "../assets/greenhod.jpeg";
import mixhod from "../assets/mixhod.jpeg";
import beigehod from "../assets/beigehod.jpeg";
import whitehod from "../assets/whitehod.jpeg";
import greyhod from "../assets/greyhod.jpeg";
import brownhod from "../assets/brownhod.jpeg";
import navycargos from "../assets/navycargos.jpeg";
import bluecargos from "../assets/bluecargos.jpeg";
import blackcargos from "../assets/blackcargos.jpeg";
import cargosbeige from "../assets/cargosbeige.jpeg";
import greysweat from "../assets/greysweat.jpeg";
import greensweat from "../assets/greensweat.jpeg";
import redsweat from "../assets/redsweat.jpeg";
import whitesweat from "../assets/whitesweat.jpeg";
import navyjoggers from "../assets/navyjoggers.jpeg";
import blackjoggers from "../assets/blackjoggers.jpeg";
import whitejoggers from "../assets/whitejoggers.jpeg";
import beigejoggers from "../assets/beigejoggers.jpeg";
import okchinos from "../assets/okchinos.jpeg";
import navychinos from "../assets/navychinos.jpeg";
import greychinos from "../assets/greychinos.jpeg";
import whitechinos from "../assets/whitechinos.jpeg";
// ✅ Reusable component


function Section({ id, title, items }) {
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

/* ====== Category Data: 4 images each ====== */
const tshirts = [
  { 
    title: "White Classic Tee", 
    tag: "Classic", 
    img: whiteImg, 
    desc: "Clean white tee—perfect for timeless and minimal everyday outfits." 
  },
  { 
    title: "Sky Blue Cool Tee", 
    tag: "Fresh", 
    img: skyBlueTShirt, 
    desc: "Soft sky-blue tee ideal for relaxed, summer-fresh casual styling." 
  },
  { 
    title: "Sand Beige Tee", 
    tag: "Neutral", 
    img: sandtshrit, 
    desc: "A neutral sand-tone tee that blends perfectly with earthy or dark outfits." 
  },
  { 
    title: "Navy Blue Basic Tee", 
    tag: "Everyday", 
    img: navyBlueTShirt, 
    desc: "Everyday navy solid tee—go-to choice for clean and sharp casual looks." 
  },
  { 
    title: "Mustard Oversized Tee", 
    tag: "Street", 
    img: mustardTShirt, 
    desc: "Oversized mustard tee for bold streetwear and trendy relaxed silhouettes." 
  },
  { 
    title: "Maroon Graphic Tee", 
    tag: "Trendy", 
    img: marronTShirt, 
    desc: "Deep maroon graphic tee—adds strong personality and statement vibes." 
  },
  { 
    title: "Light Grey Henley Tee", 
    tag: "Smart", 
    img: greyTShirt, 
    desc: "Soft grey Henley tee with button-neck design for refined casual wear." 
  },
  { 
    title: "Charcoal Henley Tee", 
    tag: "Smart", 
    img: darkgrey, 
    desc: "Charcoal Henley tee—clean, structured, and ideal for premium everyday fits." 
  },
];


// ✅ NEW ARRAY ONLY FOR OVERSIZED TEES
const oversizedTees = [
  { title: "Oversized Basic Tee", tag: "Minimal", img: brownOver, desc: "Simple oversized tee for clean fits." },
     { title: "Oversized Basic Tee", tag: "Minimal", img: blueOver, desc: "Simple oversized tee for clean fits." },
       { title: "Oversized Basic Tee", tag: "Minimal", img: greyOver, desc: "Simple oversized tee for clean fits." },


  { title: "Oversized Graphic Tee", tag: "Street", img: dustyBlueOver, desc: "Bold graphics + loose comfort." },
  { title: "Oversized Washed Tee", tag: "Vintage", img: darkGreyOver, desc: "Washed texture for vintage casual style." },
  { title: "Oversized Drop Shoulder Tee", tag: "Modern", img: greenOver, desc: "Drop-shoulders for elevated street fit." },
];

const polos = [
  { 
    title: "Beige Classic Polo", 
    tag: "Timeless", 
    img: beigepolo, 
    desc: "A clean beige polo offering versatile elegance for everyday refined looks." 
  },
  { 
    title: "Navy Striped Polo", 
    tag: "Pattern", 
    img: navypolo, 
    desc: "Navy polo with subtle stripes—balanced between smart and casual style." 
  },
  { 
    title: "Grey Melange Knit Polo", 
    tag: "Premium", 
    img: GreyMelangepolo, 
    desc: "Soft melange knit polo with premium texture for elevated casual outfits." 
  },
  { 
    title: "Forest Green Sport Polo", 
    tag: "Active", 
    img: greenpolo, 
    desc: "Lightweight, breathable sport polo perfect for active and outdoor days." 
  },
  { 
    title: "Black Solid Polo", 
    tag: "Bold", 
    img: blackpolo, 
    desc: "A sleek black polo—minimal, bold, and always sharp for day-to-night looks." 
  },
  { 
    title: "Burgundy Earth Tone Polo", 
    tag: "Natural", 
    img: burpolo, 
    desc: "Rich earthy burgundy polo offering warm tone sophistication and subtle style." 
  },
];


// ✅ New Polo Subcategories
const classicPolos =   [
  { 
    title: "Beige Classic Polo", 
    tag: "Timeless", 
    img: beigepolo, 
    desc: "A clean beige polo offering versatile elegance for everyday refined looks." 
  },
  { 
    title: "Navy Striped Polo", 
    tag: "Pattern", 
    img: navypolo, 
    desc: "Navy polo with subtle stripes—balanced between smart and casual style." 
  },
  { 
    title: "Grey Melange Knit Polo", 
    tag: "Premium", 
    img: GreyMelangepolo, 
    desc: "Soft melange knit polo with premium texture for elevated casual outfits." 
  },
  { 
    title: "Forest Green Sport Polo", 
    tag: "Active", 
    img: greenpolo, 
    desc: "Lightweight, breathable sport polo perfect for active and outdoor days." 
  },
  { 
    title: "Black Solid Polo", 
    tag: "Bold", 
    img: blackpolo, 
    desc: "A sleek black polo—minimal, bold, and always sharp for day-to-night looks." 
  },
  { 
    title: "Burgundy Earth Tone Polo", 
    tag: "Natural", 
    img: burpolo, 
    desc: "Rich earthy burgundy polo offering warm tone sophistication and subtle style." 
  },
];

const stripedPolos = [
  { 
    title: "Black & White Minimal Stripe Polo", 
    tag: "Minimal", 
    img: bkPolo, 
    desc: "Clean monochrome stripes for a sharp and minimal everyday look." 
  },
  { 
    title: "Navy & White Classic Stripe Polo", 
    tag: "Classic", 
    img: mutlipolo, 
    desc: "Timeless navy-stripe pattern — polished, versatile, and effortlessly stylish." 
  },
  { 
    title: "Brown & Beige Earth Stripe Polo", 
    tag: "Earthy", 
    img: greenWhitePolo, 
    desc: "Soft earthy tones offering a warm, natural, and relaxed weekend vibe." 
  },
  { 
    title: "Black & Grey Urban Stripe Polo", 
    tag: "Urban", 
    img: navyWhitePolo, 
    desc: "Modern muted stripes for subtle style and an elevated street-casual feel." 
  },
  { 
    title: "Blue & White Casual Stripe Polo", 
    tag: "Urban", 
    img: blueWhitePolo, 
    desc: "Fresh blue stripes — sporty, clean, and ideal for casual smart outfits." 
  },
];
const casualShirts = [
  { 
    title: "White Oxford Button-Down Shirt", 
    tag: "Classic", 
    img: bkstripes, 
    desc: "Crisp Oxford shirt — effortless balance of smart and casual dressing." 
  },
  { 
    title: "Beige Linen Summer Shirt", 
    tag: "Summer", 
    img: blackstr, 
    desc: "Breathable linen shirt — perfect for warm-weather comfort and relaxed elegance." 
  },
  { 
    title: "Warm Plaid Flannel Shirt", 
    tag: "Warm", 
    img: mestr, 
    desc: "Soft flannel with cozy checks — ideal for cool days and layered fits." 
  },
  { 
    title: "Classic Blue Denim Shirt", 
    tag: "Rugged", 
    img: okgreestr, 
    desc: "Textured denim shirt adding bold rugged charm to casual outfits." 
  },
  { 
    title: "Versatile Casual Button-Down Shirt", 
    tag: "Everyday", 
    img: greystr, 
    desc: "Everyday essential button-down — simple, clean, and easy to style." 
  },
];
const hoodies = [
  { title: "Pullover Hoodie", tag: "Classic", img: mixhod, desc: "Soft pullover hoodie for everyday streetwear comfort." },
  { title: "Zipper Hoodie", tag: "Utility", img: colorhod, desc: "Functional zip-up hoodie perfect for layering and travel." },
  { title: "Oversized Hoodie", tag: "Trend", img: greenhod, desc: "Baggy oversized hoodie offering relaxed modern style." },
  { title: "Sports Hoodie", tag: "Athletic", img: mixhod2, desc: "Lightweight training-ready hoodie for active days." },
];
 const pulloverHoodies = [
  { title: "Basic Pullover", tag: "Classic", img: beigehod, desc: "Minimal clean pullover for daily casual outfits." },
  { title: "Fleece Pullover", tag: "Warm", img: brownhod, desc: "Thick fleece hoodie to keep you cozy and warm." },
  { title: "Vintage Wash Pullover", tag: "Vintage", img: mixhod, desc: "Washed, soft-touch hoodie with retro street aesthetics." },
  { title: "Muted Tone Pullover", tag: "Minimal", img: greyhod, desc: "Monotone muted pullover — clean, classy & subtle." },
];
const oversizedHoodies = [
  { title: "Oversized Street Hoodie", tag: "Street", img: mixhod2, desc: "Boxy, relaxed streetwear fit with bold presence." },
  { title: "Oversized Washed Hoodie", tag: "Vintage", img: greyhod, desc: "Stone-washed look for premium vintage street vibe." },
  { title: "Baggy City Hoodie", tag: "Urban", img: whitehod, desc: "Ultra-baggy silhouette for a high-fashion street look." },
  { title: "Drop Shoulder Hoodie", tag: "Modern", img: greenhod, desc: "Drop shoulders + loose fit for a modern aesthetic." },
];
const sportsHoodies = [
  { title: "Running Hoodie", tag: "Athletic", img: colorhod, desc: "Light, breathable hoodie built for running comfort." },
  { title: "Training Hoodie", tag: "Performance", img: whitehod, desc: "Performance-fit hoodie designed for sports and movement." },
  { title: "Breathable Gym Hoodie", tag: "Gym", img: mixhod2, desc: "Moisture-wicking hoodie ideal for gym and active wear." },
  { title: "Active Fit Hoodie", tag: "Active", img: greenhod, desc: "Durable active hoodie with flexible mobility and comfort." },
];

/* ====== Example outfit ideas (kept from your data) ====== */
const casualpants = [
  { 
    title: "Street Minimal", 
    tag: "Trendy", 
    img: navycargos, 
    desc: "Clean street look — white tee, navy cargos, fresh sneakers." 
  },
  { 
    title: "Smart Casual", 
    tag: "Classy", 
    img: bluecargos, 
    desc: "Polished everyday outfit — polo shirt, chinos & loafers." 
  },
  { 
    title: "Soft Boy", 
    tag: "Aesthetic", 
    img: blackcargos, 
    desc: "Soft cozy vibe — oversized shirt, relaxed denim, canvas shoes." 
  },
  { 
    title: "Athleisure", 
    tag: "Sporty", 
    img: cargosbeige, 
    desc: "Sport-casual blend — hoodie paired with tapered joggers." 
  },
];

// ✅ New Bottom Wear Subcategories
const sweatpants = [
  { 
    title: "Basic Sweatpants", 
    tag: "Comfort", 
    img: greysweat, 
    desc: "Everyday soft-fit sweatpants for relaxed comfort." 
  },
  { 
    title: "Slim Fit Sweatpants", 
    tag: "Smart", 
    img: greensweat, 
    desc: "Tailored sweatpants — slim, clean and athletic inspired." 
  },
  { 
    title: "Baggy Sweatpants", 
    tag: "Street", 
    img: redsweat, 
    desc: "Oversized baggy fit — iconic cozy street fashion." 
  },
  { 
    title: "Fleece Sweatpants", 
    tag: "Warm", 
    img: whitesweat, 
    desc: "Thick fleece sweatpants designed for winter warmth." 
  },
];


const joggers = [
  { 
    title: "Slim Fit Joggers", 
    tag: "Athletic", 
    img: navyjoggers, 
    desc: "Tapered gym-friendly joggers for a sharp athletic silhouette." 
  },
  { 
    title: "Utility Cargo Joggers", 
    tag: "Street", 
    img: blackjoggers, 
    desc: "Sporty cargo joggers with pockets — perfect for streetwear vibes." 
  },
  { 
    title: "Soft Cotton Joggers", 
    tag: "Everyday", 
    img: beigejoggers, 
    desc: "Light, breathable joggers ideal for daily cozy street fits." 
  },
  { 
    title: "Technical Performance Joggers", 
    tag: "Techwear", 
    img: whitejoggers, 
    desc: "Water-repellent tech joggers for sleek futuristic aesthetics." 
  },
];

const chinos = [
  { 
    title: "Slim Tailored Chinos", 
    tag: "Smart", 
    img: okchinos, 
    desc: "Tailored slim chinos for polished business-casual looks." 
  },
  { 
    title: "Relaxed Wide-Fit Chinos", 
    tag: "Modern", 
    img: navychinos, 
    desc: "Wide relaxed chinos for effortless modern street-smart style." 
  },
  { 
    title: "Stretch Flex Chinos", 
    tag: "Comfort", 
    img: greychinos, 
    desc: "Flexible stretch chinos offering all-day movement and comfort." 
  },
  { 
    title: "Cropped Tapered Chinos", 
    tag: "Trendy", 
    img: whitechinos, 
    desc: "Ankle-length cropped chinos for clean minimal fashion fits." 
  },
];


export default function CasualWear() {
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("casual");
  const [result, setResult] = useState("");
  // ✅ Declare outfitType state
  const [outfitType, setOutfitType] = useState(""); 
  const [loading, setLoading] = useState(false);
const [error, setError] = useState("");


  const handleColorSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    setError("");

    const userPrompt = `Give a casual outfit suggestion for ${color} color.
Outfit Type: ${outfitType}.`;


    try {
         const res = await fetch("http://localhost:5000/api/casual-ai", {
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

  return (
    <div className="casual-container">
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* Hero banner */}
      <div className="casual-hero">
        <span className="casual-badge">Casual Fashion Guide</span>
        <h1 className="casual-title">Casual Style & Outfit Inspiration</h1>
        <p className="casual-subtitle">
          Everyday fashion ideas — from streetwear to minimal fits. Build clean, comfortable and stylish looks with ease.
        </p>

        <div className="casual-btn-group">
          <a href="#tshirts" className="casual-btn">T-Shirts</a>
          <a href="#oversized" className="casual-btn-outline">Oversized Tees</a>
        </div>
      </div>

       {/* Color suggestion box */}
    {/* AI Suggestion Box */}
<div className="color-box">
  <h2>Ask AI for Casual Outfit Suggestion</h2>

  <form onSubmit={handleColorSubmit} className="ai-form">
    <input
      type="text"
      placeholder="Enter color (e.g. Beige, Black, Olive)"
      value={color}
      onChange={(e) => setColor(e.target.value)}
      required
    />

    <select value={outfitType} onChange={(e) => setOutfitType(e.target.value)} required>
      <option value="">Select Outfit Type</option>
      <option value="oversized-graphic-tee">Oversized Graphic Tee</option>
      <option value="oversized-wash-tee">Oversized Wash Tee</option>
      <option value="polos">Polos</option>
      <option value="classic-polos">Classic Polos</option>
      <option value="striped-polos">Striped Polos</option>
      <option value="casual-shirts">Casual Shirts</option>
      <option value="hoodies">Hoodies</option>
      <option value="pullover-hoodies">Pullover Hoodies</option>
      <option value="oversized-hoodies">Oversized Hoodies</option>
      <option value="sports-hoodies">Sports Hoodies</option>
      <option value="cargos">Cargos</option>
      <option value="denim">Denim Jeans</option>
      <option value="joggers">Joggers</option>
    </select>

    <button type="submit">Ask AI</button>
  </form>

  {/* Chat message bubble */}
  {loading && (
    <div className="ai-chat loading">
      <span className="dot"></span><span className="dot"></span><span className="dot"></span>
    </div>
  )}

  {result && !loading && (
    <div className="ai-chat reply">
      {result}
    </div>
  )}

  {error && (
    <div className="ai-chat error">
      {error}
    </div>
  )}
</div>


      {/* Tops: 5 sub-sections */}
      <Section id="tshirts" title="T-Shirts" items={tshirts} />
      <Section id="oversized" title="Oversized T-Shirts" items={oversizedTees} />

      {/* Polo Sections */}
      <Section id="polos" title="Polos" items={polos} /> {/* Main Polos section */}
      <Section id="classicpolos" title="Classic Polos" items={classicPolos} />
      <Section id="stripedpolos" title="Striped Polos" items={stripedPolos} />

      <Section id="casualshirts" title="Casual Shirts" items={casualShirts} />

      {/* Hoodies Sections */}
      <Section id="hoodies" title="Hoodies" items={hoodies} /> {/* Main Hoodies section */}
      <Section id="pulloverhoodies" title="Pullover Hoodies" items={pulloverHoodies} />
      <Section id="oversizedhoodies" title="Oversized Hoodies" items={oversizedHoodies} />
      <Section id="sportshoodies" title="Sports Hoodies" items={sportsHoodies} />

      {/* Bottoms */}
      <Section id="casualpants" title="Casual Pants / Cargos" items={casualpants} /> {/* Changed ID to match content */}
      <Section id="sweatpants" title="Sweatpants" items={sweatpants} />
      <Section id="joggers" title="Joggers" items={joggers} />
      <Section id="chinos" title="Chinos" items={chinos} />
    </div>
  );
}