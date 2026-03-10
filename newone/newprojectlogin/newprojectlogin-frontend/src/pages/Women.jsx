import React from "react";
import "./Female.css";
import { Link } from "react-router-dom";

import bannerRight from "../assets/sideimageright.jpeg";  
import bannerLeft from "../assets/rightsideimg.jpeg";     
import bannerLeftBottom from "../assets/rightbottomimg.jpeg";

// Category Images
import catFirst from "../assets/catfirst.jpeg";
import catImgSec from "../assets/cat-imgsec.jpeg";
import cat3etnicwear from "../assets/cat3etnicwear.jpeg";

// Accessories
import shoes from "../assets/shoes.jpg";
import sunglasses from "../assets/sunglasses.jpg";
import watch from "../assets/watch.jpeg";

function Women() {
  return (
    <div className="women-page">

      {/* ✅ HERO SECTION */}
      <section className="women-hero">
        <h1 className="women-hero-title">StyleGlanz — Women's Fashion</h1>

        <div className="women-hero-grid">
          
          {/* Left stacked images */}
          <div className="women-left-column">
            <div className="women-img-box">
              <img src={bannerLeft} alt="Trendy Tops" />
              <div className="img-text-box">
                <h3>Modern Tops & Shirts</h3>
                <p>Trendy fits for every mood.</p>
              </div>
            </div>

            <div className="women-img-box">
              <img src={bannerLeftBottom} alt="Winter Fits" />
              <div className="img-text-box">
                <h3>Winter Cozy Fits</h3>
                <p>Warm styles, cool looks.</p>
              </div>
            </div>
          </div>

          {/* Right Hero */}
          <div className="women-right-main">
            <img src={bannerRight} alt="Women's Fashion" />
            <div className="hero-offer-box">
              <h2>Women's Style Guide</h2>
              <p>Discover elegant, chic & comfort fashion picks.</p>
              <Link to="/femaleformal" className="shop-btn">Explore Styles</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ CATEGORY SECTION */}
      <section className="women-categories">
        <h2 className="section-title">Explore Style Categories</h2>

        <div className="women-cat-grid">
          <Link to="/femaleformal" className="cat-card">
            <img src={catFirst} alt="Formal Wear" />
            <h3>Formal Wear</h3>
          </Link>

          <Link to="/FemaleCasual" className="cat-card">
            <img src={catImgSec} alt="Casual Wear" />
            <h3>Casual Wear</h3>
          </Link>

          <Link to = "/femaleethnic" className="cat-card">
            <img src={cat3etnicwear} alt="Ethnic Wear" />
            <h3>Ethnic Wear</h3>
          </Link>
        </div>
      </section>

      {/* ✅ INSPO QUOTE */}
      <section className="sg-style-quote">
        “Elegance isn’t about being noticed — it's about being remembered.”
      </section>

      {/* ✅ ACCESSORIES SECTION */}
      <section className="accessories-module">
        <div className="accessories-header">
          <h1 className="accessories-title">Accessories for Women</h1>
         <Link to= "/femaleaccessories">
           <button className="accessories-btn">Discover Now</button>
              </Link>
        </div>

        <div className="accessories-gallery">
          <img src={shoes} alt="Heels" className="accessory-item" />
          <img src={sunglasses} alt="Sunglasses" className="accessory-item" />
          <img src={watch} alt="Jewellery" className="accessory-item" />
        </div>
      </section>

    </div>
  );
}

export default Women;
