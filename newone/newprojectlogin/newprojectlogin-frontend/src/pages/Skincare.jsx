import React, { useEffect } from "react";
import "./Skincare.css";
import offwhite from "../assets/offwhite.jpeg";

// --- Helper ---
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
};

// --- Hero Section ---
const HeroSection = () => (
  <div className="skincare-hero-container">
    <div className="skincare-hero-overlay">
      <div className="skincare-hero-text">
        <h1 className="skincare-hero-title">TIMELESS BEAUTY, PERFECTED</h1>
        <p className="skincare-hero-subtitle">
          Elevating your skincare routine with luxurious, porcelain-inspired care.
        </p>
        <button className="skincare-explore-button">Explore Collection →</button>
      </div>
    </div>
  </div>
);

// --- Skin Type Selector ---
const SkincareTypeSelector = () => (
  <div className="skincare-type-selector-container">
    <h2 className="skincare-type-selector-title">SELECT YOUR SKIN TYPE</h2>
    <div className="skincare-type-grid">
      {[
        { id: "normal-skin-banner", icon: "💧", label: "Normal Skin" },
        { id: "oily-skin-banner", icon: "✨", label: "Oily Skin" },
        { id: "sensitive-skin-banner", icon: "🌸", label: "Sensitive Skin" },
        { id: "dry-skin-banner", icon: "🌙", label: "Dry Skin" },
      ].map((type) => (
        <div
          key={type.id}
          className="skincare-type-box"
          onClick={() => scrollToSection(type.id)}
        >
          <div className="skincare-type-icon">{type.icon}</div>
          <p>{type.label}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- Mini Banner ---
const MiniBanner = ({ title, subtitle, id }) => (
  <div className="mini-banner-wrapper" id={id}>
    <div className="mini-banner">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  </div>
);

// --- Skin Type Section (Updated with Dynamic Products) ---
const SkinTypeSection = ({ id, title, info, imageSrc, reverse = false, products = [] }) => (
  <section className={`balanced-skin-section ${reverse ? "reverse" : ""}`} id={id}>
    <div className="balanced-info-panel">
      <h2 className="balanced-skin-title">{title}</h2>
      <div
        className="balanced-skin-info"
        dangerouslySetInnerHTML={{ __html: info }}
      />
    </div>

    {/* Recommended Products Panel */}
    <div className="balanced-image-panel">
      <h4>Recommended Products</h4>
      <div className="product-grid">
        {products.map((p, index) => (
          <div key={index} className="product-card">
            <h5>{p.name}</h5>
            <p className="product-desc">{p.desc}</p>
            <span className="product-price">{p.price}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Universal Skincare Rules ---
const UniversalRulesSection = () => (
  <section className="skincare-rules-section">
    <div className="skincare-rules-content">
      <h2 className="skincare-rules-title">Universal Skincare Wisdom ✨</h2>
      <p className="skincare-rules-intro">
        Elevate your routine from good to excellent with these timeless principles.
      </p>
      <ul className="skincare-rules-list">
        <li><span>Hydrate inside and out:</span> Water intake supports moisturizer efficiency.</li>
        <li><span>Holistic Health:</span> Sleep, diet, and stress deeply impact your skin's clarity.</li>
        <li><span>Consistency is Key:</span> A steady routine beats using many products occasionally.</li>
        <li><span>Always Use SPF:</span> Non-negotiable defense against aging and damage.</li>
        <li><span>Listen to Your Skin:</span> Adjust based on seasons and your skin’s needs.</li>
      </ul>
      <button className="skincare-rules-button">Shop Hydration Essentials →</button>
    </div>
  </section>
);

// --- Main Page ---
function SkincarePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll(".balanced-skin-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // --- Routine Info ---
  const skinInfo = {
    normal: `
      <h3>🌿 Characteristics</h3>
      <ul>
        <li>Balanced oil and moisture levels</li>
        <li>Smooth texture, few breakouts</li>
        <li>Small, barely visible pores</li>
      </ul>
      <h3>🌞 Morning Routine</h3>
      <ol>
        <li><b>Cleanser:</b> Gentle, pH-balanced cleanser to refresh skin.</li>
        <li><b>Toner:</b> Alcohol-free toner to prep hydration.</li>
        <li><b>Moisturizer:</b> Lightweight hydration to maintain balance.</li>
        <li><b>Sunscreen:</b> SPF 30+ to protect against UV damage.</li>
      </ol>
      <h3>🌙 Night Routine</h3>
      <ol>
        <li>Double cleanse if using makeup.</li>
        <li>Apply hydrating or antioxidant serum.</li>
        <li>Use a night cream to nourish overnight.</li>
      </ol>
      <h3>🧠 Tips</h3>
      <ul>
        <li>Exfoliate 1–2 times a week.</li>
        <li>Maintain consistent skincare to keep balance.</li>
      </ul>
    `,
    oily: `
      <h3>🌿 Characteristics</h3>
      <ul>
        <li>Shiny T-zone and large pores</li>
        <li>Prone to acne or blackheads</li>
      </ul>
      <h3>🌞 Morning Routine</h3>
      <ol>
        <li>Gel cleanser to remove excess oil.</li>
        <li>Niacinamide-based toner to refine pores.</li>
        <li>Oil-free moisturizer for hydration.</li>
        <li>Matte finish sunscreen.</li>
      </ol>
      <h3>🌙 Night Routine</h3>
      <ol>
        <li>Double cleanse for oil & sunscreen removal.</li>
        <li>Use BHA exfoliant (2–3x/week).</li>
        <li>Apply serum with green tea or niacinamide.</li>
      </ol>
      <h3>🧠 Tips</h3>
      <ul>
        <li>Avoid over-cleansing — it increases oil production.</li>
        <li>Use blotting paper midday.</li>
      </ul>
    `,
    sensitive: `
      <h3>🌿 Characteristics</h3>
      <ul>
        <li>Easily irritated or red</li>
        <li>Feels tight or reactive to products</li>
      </ul>
      <h3>🌞 Morning Routine</h3>
      <ol>
        <li>Mild, non-foaming cleanser.</li>
        <li>Soothing toner (like rose water).</li>
        <li>Barrier-supporting moisturizer.</li>
        <li>Mineral sunscreen for less irritation.</li>
      </ol>
      <h3>🌙 Night Routine</h3>
      <ol>
        <li>Cleanse gently with lukewarm water.</li>
        <li>Apply calming serum (chamomile, cica).</li>
        <li>Use rich night cream to repair skin barrier.</li>
      </ol>
      <h3>🧠 Tips</h3>
      <ul>
        <li>Patch test all new products.</li>
        <li>Avoid fragrance or alcohol-heavy formulas.</li>
      </ul>
    `,
    dry: `
      <h3>🌿 Characteristics</h3>
      <ul>
        <li>Tightness after washing</li>
        <li>Flaky or dull texture</li>
        <li>Fine lines more visible</li>
      </ul>
      <h3>🌞 Morning Routine</h3>
      <ol>
        <li>Use a cream-based cleanser.</li>
        <li>Apply hydrating toner (glycerin/rose water).</li>
        <li>Layer hydrating serum (hyaluronic acid).</li>
        <li>Use thick moisturizer to seal hydration.</li>
        <li>Apply moisturizing sunscreen.</li>
      </ol>
      <h3>🌙 Night Routine</h3>
      <ol>
        <li>Cleanse gently (no foaming gels).</li>
        <li>Apply serum or facial oil (squalane/jojoba).</li>
        <li>Finish with rich night cream.</li>
      </ol>
      <h3>🧠 Tips</h3>
      <ul>
        <li>Use humidifier in dry climates.</li>
        <li>Avoid hot water while cleansing.</li>
        <li>Use hydrating masks weekly.</li>
      </ul>
    `,
  };

  // --- Product Recommendations ---
  const recommendedProducts = {
    normal: [
      { name: "Hydra Cleanser", desc: "Balances natural oils", price: "$40" },
      { name: "Vitamin C Serum", desc: "Brightens and smoothens skin", price: "$65" },
    ],
    oily: [
      { name: "Oil Control Face Wash", desc: "Reduces excess sebum", price: "$35" },
      { name: "Matte Gel Moisturizer", desc: "Hydrates without shine", price: "$55" },
    ],
    sensitive: [
      { name: "Cica Repair Cream", desc: "Soothes irritation and redness", price: "$50" },
      { name: "Rose Water Toner", desc: "Gentle and alcohol-free", price: "$30" },
    ],
    dry: [
      { name: "Hydrating Milk Cleanser", desc: "Creamy texture for soft cleansing", price: "$45" },
      { name: "Deep Moisture Night Cream", desc: "Locks hydration overnight", price: "$70" },
    ],
  };

  return (
    <div className="SkincarePage">
      <HeroSection />
      <div className="skincare-content-container">
        <SkincareTypeSelector />

        <MiniBanner id="normal-skin-banner" title="RECOMMENDED ROUTINE" subtitle="Maintain balance, enhance your natural radiance." />
        <SkinTypeSection id="normal-skin-section" title="NORMAL SKIN" info={skinInfo.normal} imageSrc={offwhite} reverse={false} products={recommendedProducts.normal} />

        <MiniBanner id="oily-skin-banner" title="OILY SKIN" subtitle="Control shine, keep the healthy glow." />
        <SkinTypeSection id="oily-skin-section" title="OILY SKIN" info={skinInfo.oily} imageSrc={offwhite} reverse={true} products={recommendedProducts.oily} />

        <MiniBanner id="sensitive-skin-banner" title="SENSITIVE SKIN" subtitle="Soothe redness, build a resilient barrier." />
        <SkinTypeSection id="sensitive-skin-section" title="SENSITIVE SKIN" info={skinInfo.sensitive} imageSrc={offwhite} reverse={false} products={recommendedProducts.sensitive} />

        <MiniBanner id="dry-skin-banner" title="DRY SKIN" subtitle="Deeply hydrate, restore suppleness and comfort." />
        <SkinTypeSection id="dry-skin-section" title="DRY SKIN" info={skinInfo.dry} imageSrc={offwhite} reverse={true} products={recommendedProducts.dry} />

        <UniversalRulesSection />
      </div>
    </div>
  );
}

export default SkincarePage;
