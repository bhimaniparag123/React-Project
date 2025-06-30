import React, { useEffect, useState } from "react";
import "../Components/Category.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import img1 from "../assets/asset 19.jpeg";
import img2 from "../assets/asset 20.jpeg";
import img3 from "../assets/asset 21.jpeg";
import img4 from "../assets/asset 22.jpeg";
import img5 from "../assets/asset 16.jpeg";
import img6 from "../assets/asset 23.jpeg";
import img7 from "../assets/asset 24.jpeg";
import img8 from "../assets/asset 30.png";

const images = [
  { src: img1, label: "Vegan Ice Props" },
  { src: img2, label: "Keto Ice Cream" },
  { src: img3, label: "Vegan Gelato" },
  { src: img4, label: "Ice Cream Bar" },
  { src: img5, label: "Frozen Yogurt" },
  { src: img6, label: "Popsicle Delight" },
  { src: img7, label: "Creamy Dream" },
  { src: img8, label: "Vegan Gelato" },
];

function Category() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 3000);
    return () => clearInterval(autoSlide);
  }, []);

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      visible.push(images[(index + i) % images.length]);
    }
    return visible;
  };

  return (
    <div className="category-wrapper position-relative w-100 overflow-hidden ">
      <h1 className="text-center" style={{ fontSize: "48px", fontFamily: "'Kalnia', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif", textTransform: "capitalize", marginBottom: "60px" }}>Shop by category</h1>
      <button className="carousel-btn left bg-light border-1 rounded-pill border-black" onClick={prevSlide}><BsArrowLeftShort /></button>
      <div className="category-slider d-flex justify-content-center align-items-center">
        {getVisibleImages().map((img, idx) => (
          <div className="category-item" key={idx}>
            <img src={img.src} alt={img.label} />
            <h6 style={{ fontFamily: "'Kalnia', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif", fontSize: "22px" }}>{img.label}</h6>
          </div>
        ))}
      </div>
      <button className="carousel-btn right  bg-light border-1 rounded-pill border-black" onClick={nextSlide}><BsArrowRightShort /></button>
    </div>
  );
}

export default Category;
