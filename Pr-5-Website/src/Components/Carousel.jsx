import React from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import "./Carousel.css";

// New images you uploaded
import slideImage1 from "../assets/asset 7.png"; // new image
import slideImage2 from "../assets/asset 14.png";

import kiwi from "../assets/asset 13.png";
import grapefruit from "../assets/asset 12.png";
import leaf from "../assets/asset 11.png";

const slides = [
  {
    id: 1,
    image: slideImage1,
    title: "Flavours Of Joyfulness",
    subtitle: "new flavours",
    description:
      "Fresh and tangy, our original cream cheese spread alternative goes on easy and tastes even better.",
    bgColor: "#ffe0d8",
    circleColor: "#f78c50"
  },
  {
    id: 2,
    image: slideImage2,
    title: "Ice Cream Novelties",
    subtitle: "best sellers",
    description:
      "Let your ice cream dreams fly sky high at the Lebagol Shop or in the freezer aisle.",
    bgColor: "#ffdff5",
    circleColor: "#f68ad4"
  }
];

const HeroCarousel = () => {
  return (
    <Carousel interval={4000} controls={false} indicators>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <section className="hero-banner" style={{ backgroundColor: slide.bgColor }}>
            <Container>
              <Row className="align-items-center">
                {/* Text */}
                <Col md={6}>
                  <div className="hero-content">
                    <p className="new-flavours" style={{fontFamily:""}}>{slide.subtitle}</p>
                    <h1 className="hero-title">
                      {slide.title.split(" ")[0]} <br /> {slide.title.split(" ").slice(1).join(" ")}
                    </h1>
                    <p className="hero-description">{slide.description}</p>
                    <Button className="shop-now-btn bg-light text-dark rounded-pill p-3" style={{ width: "180px", fontWeight: "bold" }}>
                     →  Shop Now 
                    </Button>
                  </div>
                </Col>

                {/* Image */}
                <Col md={6}>
                  <div className="hero-image-wrapper">
                    <div className="circle-bg" style={{ backgroundColor: slide.circleColor }}></div>
                    <img src={slide.image} alt="Slide Visual" className="child-img" />
                    <img src={kiwi} className="fruit kiwi" alt="Kiwi" />
                    <img src={grapefruit} className="fruit grapefruit" alt="Grapefruit" />
                    <img src={leaf} className="fruit leaf" alt="Leaf" />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
