import React from "react";
import "./mens2.css"; // <<-- CSS import remains 'mens2.css'
import { Link } from "react-router-dom";

// Import images
import smallpic2 from "../assets/smallpic2.jpg";
import smallpic3 from "../assets/smallpic3.jpeg";
import smallpic4 from "../assets/smallpic4.jpg";
import smallpic5 from "../assets/smallpic5.jpg";
import banner from "../assets/banner.jpg";
import wardrobe from "../assets/wardrobe.jpg";
import combi1 from "../assets/combi1.jpeg";
import combi2 from "../assets/combi2.jpeg";
import combi3 from "../assets/combi3.jpeg";
import shoes from "../assets/shoes.jpg";
import sunglasses from "../assets/sunglasses.jpg";
import watch from "../assets/watch.jpeg";

function Male() { // Function name can be Male, but it's not a class name, so it's fine.
  return (
    <div className="male-page"> {/* <<-- Changed class name */}

      {/* ✅ Banner Section */}
      <section className="male-banner-content" style={{ backgroundImage: `url(${banner})` }}> {/* <<-- Changed class name */}
        <div className="male-banner-left"> {/* <<-- Changed class name */}
          <h1>
            <span className="male-title-bold">MALE</span> {/* <<-- Changed class name */}
            <span className="male-title-normal"> FASHION &</span> {/* <<-- Changed class name */}
            <br />
            <span className="male-title-bold">STYLING</span> {/* <<-- Changed class name */}
          </h1>
          <p className="male-banner-subtext">“Discover. Learn. Transform your Style.”</p> {/* <<-- Changed class name */}
          <a href="#" className="male-styling-hacks-btn">STYLING HACKS</a> {/* <<-- Changed class name */}
        </div>

        <div className="male-small-pics-grid"> {/* <<-- Changed class name */}
          <div className="male-small-pic-item"><img src={smallpic2} alt="style1" /></div> {/* <<-- Changed class name */}
          <div className="male-small-pic-item"><img src={smallpic3} alt="style2" /></div> {/* <<-- Changed class name */}
          <div className="male-small-pic-item"><img src={smallpic4} alt="style3" /></div> {/* <<-- Changed class name */}
          <div className="male-small-pic-item"><img src={smallpic5} alt="style4" /></div> {/* <<-- Changed class name */}
        </div>
      </section>

      {/* ✅ Discover Section */}
      <section className="male-wardrobe-module"> {/* <<-- Changed class name */}
        <h1 className="male-wardrobe-title">Discover Your Style Zone</h1> {/* <<-- Changed class name */}
        <div className="male-wardrobe-grid"> {/* <<-- Changed class name */}

          <div className="male-grid-item item1"> {/* <<-- Changed class name */}
            <div className="male-wardrobe-card"> {/* <<-- Changed class name */}
              <img src={wardrobe} alt="Formal Wear" className="male-wardrobe-img" /> {/* <<-- Changed class name */}
              <div className="male-wardrobe-content"> {/* <<-- Changed class name */}
                <h2 className="male-wardrobe-heading">Formal Wear </h2> {/* <<-- Changed class name */}
                <p className="male-wardrobe-desc">Timeless suits & office elegance.</p> {/* <<-- Changed class name */}
                <Link to="/Formalwear" className="male-wardrobe-btn">Explore Now →</Link> {/* <<-- Changed class name */}
              </div>
            </div>
          </div>

          <div className="male-grid-item item2"> {/* <<-- Changed class name */}
            <div className="male-wardrobe-card"> {/* <<-- Changed class name */}
              <img src={wardrobe} alt="Casual Wear" className="male-wardrobe-img" /> {/* <<-- Changed class name */}
              <div className="male-wardrobe-content"> {/* <<-- Changed class name */}
                <h2 className="male-wardrobe-heading">Casual Wear</h2> {/* <<-- Changed class name */}
                <p className="male-wardrobe-desc">Smart everyday fits.</p> {/* <<-- Changed class name */}
                <Link to="/CasualWear" className="male-wardrobe-btn">Explore Now →</Link> {/* <<-- Changed class name */}
              </div>
            </div>
          </div>

          <div className="male-grid-item item3"> {/* <<-- Changed class name */}
            <div className="male-wardrobe-card"> {/* <<-- Changed class name */}
              <img src={wardrobe} alt="Ethnic Wear" className="male-wardrobe-img" /> {/* <<-- Changed class name */}
              <div className="male-wardrobe-content"> {/* <<-- Changed class name */}
                <h2 className="male-wardrobe-heading">Ethnic Wear</h2> {/* <<-- Changed class name */}
                <p className="male-wardrobe-desc">Classic Indian elegance.</p> {/* <<-- Changed class name */}
                <Link to="/EthnicWear" className="male-wardrobe-btn">Explore Now →</Link> {/* <<-- Changed class name */}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ✅ Color Combination Section */}
      <section className="male-color-combinations-module"> {/* <<-- Changed class name */}
        <h2 className="male-color-combinations-title">Color Combinations & Outfits</h2> {/* <<-- Changed class name */}
        <p className="male-color-combinations-subtext"> {/* <<-- Changed class name */}
          Perfect palettes to elevate your look.
        </p>

        <div className="male-color-cards-grid"> {/* <<-- Changed class name */}
          <div className="male-color-card"> {/* <<-- Changed class name */}
            <img src={combi1} alt="Cream & Maroon" className="male-color-card-image" /> {/* <<-- Changed class name */}
            <h3 className="male-color-card-title">Cream & Maroon</h3> {/* <<-- Changed class name */}
          </div>

          <div className="male-color-card"> {/* <<-- Changed class name */}
            <img src={combi2} alt="White & Green" className="male-color-card-image" /> {/* <<-- Changed class name */}
            <h3 className="male-color-card-title">White & Green</h3> {/* <<-- Changed class name */}
          </div>

          <div className="male-color-card"> {/* <<-- Changed class name */}
            <img src={combi3} alt="Outfits" className="male-color-card-image" /> {/* <<-- Changed class name */}
            <h3 className="male-color-card-title">Outfits</h3> {/* <<-- Changed class name */}
          </div>
        </div>

        <div className="male-explore-more-btn-wrapper"> {/* <<-- Changed class name */}
          <a href="/ColorLuxury" className="male-explore-more-btn">Explore More</a> {/* <<-- Changed class name */}
        </div>
      </section>

      {/* ✅ Accessories Section */}
      <section className="male-accessories-module"> {/* <<-- Changed class name */}
        <div className="male-accessories-header"> {/* <<-- Changed class name */}
          <h1 className="male-accessories-title">Accessories</h1> {/* <<-- Changed class name */}
         <Link to="/Accessories" className="male-accessories-btn">Explore Now →</Link>   {/* <<-- Changed class name */}
        </div>

        <div className="male-accessories-gallery"> {/* <<-- Changed class name */}
          <img src={shoes} alt="Shoes" className="male-accessory-item" /> {/* <<-- Changed class name */}
          <img src={sunglasses} alt="Sunglasses" className="male-accessory-item" /> {/* <<-- Changed class name */}
          <img src={watch} alt="Watch" className="male-accessory-item" /> {/* <<-- Changed class name */}
        </div>
      </section>

    </div>
  );
}

export default Male;