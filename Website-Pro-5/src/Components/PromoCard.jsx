import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import promoImage1 from "../assets/asset 72.jpeg";
import promoImage2 from "../assets/asset 73.jpeg";
import promoImage3 from "../assets/asset 74.jpeg";
import promoImage4 from "../assets/asset 75.jpeg";

const PromoCard = ({ image, title, subtitle, description, height = "500px" }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      className="border-0 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        height,
        position: "relative",
        color: "#fff",
        borderRadius: "0",
        fontFamily: "'Open Sans', sans-serif",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transition: "transform 0.4s ease",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          zIndex: 1,
        }}
      ></div>

      {/* Optional Overlay for darker image readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          // background: "rgba(0, 0, 0, 0.2)",
          zIndex: 2,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          zIndex: 3,
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "2rem",
          maxWidth: "350px",
          textShadow: "0 1px 5px rgba(0,0,0,0.6)",
        }}
      >
        {subtitle && (
          <p
            style={{
              fontSize: "14px",
              fontWeight: "400",
              marginBottom: "0.5rem",
              textTransform: "uppercase",
            }}
          >
            {subtitle}
          </p>
        )}

        <h2
          style={{
            fontSize: "31px",
            fontWeight: "500",
            fontFamily: "'Kalnia', serif",
            margin: "0px 0px 10px",
          }}
        >
          {title}
        </h2>

        {description && (
          <p
            style={{
              fontSize: "16px",
              marginBottom: "1.5rem",
            }}
          >
            {description}
          </p>
        )}

        <Button
          variant="light"
          className="rounded-pill px-4 py-2 fw-semibold"
          style={{
            fontSize: "1rem",
            color: "#000",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          ➜ Shop Now
        </Button>
      </div>
    </Card>
  );
};

const PromoSection = () => {
  return (
    <Container className="my-5">
      <Row className="g-4 justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <PromoCard
            image={promoImage1}
            subtitle="Save 20% off"
            title="Summer 2024"
            description="Smooth & refreshing, intensely flavorful, 100% dairy free."
          />
        </Col>

        <Col xs={12} md={6} lg={4}>
          <PromoCard
            image={promoImage2}
            subtitle=""
            title="Gelato Offers"
            description="Find it here"
          />
        </Col>

        <Col xs={12} md={6} lg={4}>
          <Row className="g-4">
            <Col xs={12}>
              <PromoCard
                image={promoImage3}
                subtitle="Fruit Combo"
                title="Berry Delight"
                description="Topped with fresh blackberries."
                height="245px"
              />
            </Col>
            <Col xs={12}>
              <PromoCard
                image={promoImage4}
                subtitle="Special Edition"
                title="Choco Crunch"
                description="Dark chocolate coating with nuts."
                height="245px"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PromoSection;
