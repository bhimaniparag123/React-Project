// import React from "react";
import "./Carousel.css";
import childImage from "../assets/asset 7.png";
import kiwi from "../assets/asset 13.png";
import grapefruit from "../assets/asset 12.png";
import leaf from "../assets/asset 11.png";

function Carousel() {
  return (
    <section className="hero-banner">
      {/* Left Section */}
      <div className="hero-content">
        <p className="new-flavours">new flavours</p>
        <h1 className="hero-title">Flavours Of <br /> Joyfulness</h1>
        <p className="hero-description">
          Fresh and tangy, our original cream cheese spread alternative goes on easy and tastes even better.
        </p>
        <button className="shop-now-btn">
          <span>Shop Now</span> →
        </button>
      </div>

      {/* Right Image Section */}
      <div className="hero-image-wrapper">
        <div className="circle-bg"></div>
        <img src={childImage} alt="Happy Child" className="child-img" />
        <img src={kiwi} className="fruit kiwi" alt="Kiwi" />
        <img src={grapefruit} className="fruit grapefruit" alt="Grapefruit" />
        <img src={leaf} className="fruit leaf" alt="Leaf" />
      </div>
    </section>
  );
}

export default Carousel;