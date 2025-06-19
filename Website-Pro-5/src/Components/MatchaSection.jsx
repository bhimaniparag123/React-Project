import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import "./MatchaSection.css";

// Images
import Swirl from "../assets/asset 30.png";
import IceCreamScoop from "../assets/asset 32.png";
import ProductBox from "../assets/asset 35.png";
import MochiHalf from "../assets/asset 71.jpeg";
import Strawberry from "../assets/asset 35.png";
import Leaf from "../assets/asset 31.png";

const tags = [
  { text: "Plant Based", color: "#f6c3f7" },
  { text: "Keto Friendly", color: "#b2e9b1" },
  { text: "Gluten Free", color: "#ffeb85" },
  { text: "No Sugar Added", color: "#a3d6ff" },
  { text: "100% Organic", color: "#ffb766" },
  { text: "Non-GMO", color: "#d1b7ff" },
];

const MatchaSection = () => {
  return (
    <div className="matcha-section d-flex align-items-center">
      <Container className="text-center position-relative">
        <Row className="justify-content-center">
          <Col md={10}>
            <h6 className="section-subtitle">HIGH-FIVES ALL AROUND!</h6>
            <h1 className="section-title">Delight Full Happiness</h1>
            <p className="section-desc">
              Enjoy premium ice cream. We are certified award<br />
              winning company since 1992.
            </p>
            <div className="tag-row d-flex flex-wrap justify-content-center gap-2 mt-4 mb-5">
              {tags.map((tag, index) => (
                <Badge className=" bg-danger p-2 text-white bg-opacity-25"
                  key={index}
                  style={{
                    backgroundColor: tag.color,
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "0.85rem",
                    padding: "0.5rem 1rem",
                    borderRadius: "1.5rem",
                  }}
                >
                  {tag.text}
                </Badge>
              ))}
            </div>
          </Col>
        </Row>

        {/* Visuals */}
        <div className="visuals">
          <img src={Swirl} alt="swirl" className="swirl-bg" />
          <img src={IceCreamScoop} alt="scoop" className="icecream-scoop" />
          <img src={ProductBox} alt="box" className="product-box" />
          <img src={MochiHalf} alt="mochi" className="mochi-ball" />
          <img src={Leaf} alt="leaf" className="leaf" />
          <img src={Strawberry} alt="fruit" className="fruit" />
        </div>
      </Container>
    </div>
  );
};

export default MatchaSection;
