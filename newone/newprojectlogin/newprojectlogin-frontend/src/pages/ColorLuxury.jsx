import React from "react";
import "./ColorLuxury.css";

// 15 core luxury colors with combinations
const colors = [
  { base: "Cream", combos: ["Bronze", "Navy", "Olive"] },
  { base: "Black", combos: ["Gold", "Charcoal", "Burgundy"] },
  { base: "White", combos: ["Beige", "Grey", "Camel"] },
  { base: "Navy Blue", combos: ["Cream", "Tan", "Brown"] },
  { base: "Charcoal", combos: ["Ivory", "Copper", "Silver"] },
  { base: "Olive", combos: ["Khaki", "Black", "Off‑White"] },
  { base: "Beige", combos: ["Brown", "Olive", "White"] },
  { base: "Burgundy", combos: ["Black", "Cream", "Grey"] },
  { base: "Tan", combos: ["White", "Forest Green", "Navy"] },
  { base: "Forest Green", combos: ["Beige", "Brown", "Black"] },
  { base: "Camel", combos: ["White", "Olive", "Charcoal"] },
  { base: "Grey", combos: ["White", "Black", "Navy"] },
  { base: "Ivory", combos: ["Charcoal", "Bronze", "Taupe"] },
  { base: "Brown", combos: ["Cream", "Olive", "Tan"] },
  { base: "Taupe", combos: ["Ivory", "Black", "Olive"] },
];

export default function ColorLuxury() {
  // Create 9x16 = 144 grid slots using repeating color data
  const gridItems = Array.from({ length: 144 }, (_, i) => {
    const color = colors[i % colors.length];
    return color;
  });

  return (
    <div className="lux-wrapper">
      <h2 className="lux-title">Luxury Color Combinations Grid</h2>
      <p className="lux-sub">9 × 16 Color grid with luxury matching palettes</p>

      <div className="lux-big-grid">
        {gridItems.map((item, idx) => (
          <div className="lux-cell" key={idx}>
            <h4 className="lux-cell-title">{item.base}</h4>
            <ul className="lux-list">
              {item.combos.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
