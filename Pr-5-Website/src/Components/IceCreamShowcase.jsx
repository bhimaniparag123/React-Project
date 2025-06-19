import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import tubsImage from "../assets/asset 43.jpeg";
import conesImage from "../assets/asset 44.jpeg";
import badge from "../assets/asset 63.svg";

const IceCreamShowcase = () => {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      {/* 📝 Top Overlay Text */}
      <div
        style={{
          textAlign: "center",
          fontSize: "200px",
          fontFamily: "'Sacramento', cursive",
          fontWeight: 400,
          color: "#ccc",
          marginTop: "100px",
          marginBottom: "-100px",
          letterSpacing: "10px",
          zIndex: 1,
          position: "relative",
        }}
      >
        <h1 style={{fontSize: "200px"}}>craft . joy . planet</h1>
      </div>

      <Container
        fluid
        style={{
          padding: 0,
          marginTop: "120px",
          marginBottom: "120px",
        }}
      >
        <Row style={{ margin: 0 }}>
          {/* Left - Tubs */}
          <Col
            md={5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "600px",
              padding: 0,
              position: "relative",
            }}
          >
            <Image
              src={tubsImage}
              alt="Ice cream tubs"
              style={{
                marginRight: "120px",
                marginTop: "270px",
                maxWidth: "90%",
                height: "520px",
                width: "440px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
              fluid
            />

            {/* Badge */}
            <div
              style={{
                position: "absolute",
                top: "80px",
                right: "80px",
                width: "200px",
                height: "200px",
                zIndex: 2,
              }}
            >
              <svg
                viewBox="0 0 200 200"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginBottom: "130px" }}
              >
                <circle
                  cx="100"
                  cy="100"
                  r="98"
                  fill="transparent"
                  stroke="red"
                  strokeWidth="1.5"
                />
                <circle cx="100" cy="100" r="50" fill="red" />
                <defs>
                  <path
                    id="circlePath"
                    d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                  />
                </defs>
                <g
                  style={{
                    transformOrigin: "100px 100px",
                    animation: "spinText 10s linear infinite",
                  }}
                >
                  <text
                    fill="red"
                    fontSize="12"
                    fontWeight="bold"
                    letterSpacing="2"
                  >
                    <textPath
                      href="#circlePath"
                      startOffset="0"
                      textLength="530"
                    >
                      LEBAGOL SHOP ICE CREAMS
                    </textPath>
                  </text>
                </g>
                <image
                  href={badge}
                  x="73"
                  y="73"
                  width="54"
                  height="54"
                  clipPath="circle(27px at center)"
                />
              </svg>
              <style>
                {`
                @keyframes spinText {
                  0% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg);
                  }
                }
              `}
              </style>
            </div>
          </Col>

          {/* Right - Cones */}
          <Col
            md={7}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "600px",
              padding: 0,
              position: "relative",
            }}
          >
            <Image
              src={conesImage}
              alt="Ice cream cones"
              style={{
                maxWidth: "95%",
                height: "780px",
                width: "900px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IceCreamShowcase;
