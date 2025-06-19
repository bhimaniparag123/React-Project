// Components/FlavorsSlider.jsx
import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { FaShoppingBag } from "react-icons/fa";
import "./FlavorsSlider.css";

import FlavorsOne from "../assets/asset 23.jpeg";
import FlavorsTwo from "../assets/asset 24.jpeg";
import FlavorsThree from "../assets/asset 25.jpeg";
import HaloTop from "../assets/asset 38.jpeg";
import FruteroMango from "../assets/asset 39.jpeg";
import MangoPassion from "../assets/asset 40.jpeg";

const products = [
  {
    id: 1,
    image: FlavorsOne,
    title: "Chocolate Chip Cookie",
    price: 8.26,
    rating: 5,
  },
  {
    id: 2,
    image: FlavorsTwo,
    title: "Vanilla Brownie",
    price: 10.0,
    originalPrice: 16.3,
    rating: 5,
    sale: 39,
  },
  {
    id: 3,
    image: FlavorsThree,
    title: "Fruit Ice Cream",
    price: 13.0,
    rating: 5,
    sale: 21,
  },
  { id: 4, image: HaloTop, title: "Halo Top Mango", price: 7.5, rating: 4 },
  {
    id: 5,
    image: FruteroMango,
    title: "Frutero Mango",
    price: 9.99,
    rating: 4,
    sale: 10,
  },
  {
    id: 6,
    image: MangoPassion,
    title: "Mango Passion Bar",
    price: 11.0,
    rating: 5,
  },
];

const FlavorsSlider = () => {
  return (
    <div className="flavor-slider">
     <h1 className="text-center" style={{ fontSize: "48px", fontFamily: "'Kalnia', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif", textTransform: "capitalize", marginBottom: "60px" }}>Popular Scoop flavors</h1>
      <div className="slider-track">
        {products.map((product) => (
          <div className="flavor-slide" key={product.id}>
            <Card className="text-center border-0 shadow-sm">
              <div className="position-relative">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{
                    objectFit: "cover",
                    backgroundColor: "#f9f9f9",
                  }}
                />
                {product.sale && (
                  <Badge
                    bg="danger"
                    className="position-absolute top-0 start-0 m-2"
                  >
                    -{product.sale}%
                  </Badge>
                )}
                <Button
                  variant="light"
                  className="position-absolute bottom-0 end-0 m-2 rounded-circle border"
                >
                  <FaShoppingBag />
                </Button>
              </div>
              <Card.Body>
                <div style={{ color: "#ffc107" }}>
                  {"★".repeat(product.rating)}{" "}
                  <span style={{ color: "#555" }}>({product.rating})</span>
                </div>
                <Card.Title className="mb-1" style={{ fontSize: "1rem" }}>
                  {product.title}
                </Card.Title>
                <Card.Text>
                  {product.originalPrice ? (
                    <>
                      <span className="text-danger fw-bold me-2">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-muted text-decoration-line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="fw-semibold">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </Card.Text>
                <div className="hover-icons position-absolute top-0 end-0 m-2 d-flex flex-column gap-2">
                  <Button
                    variant="light"
                    className="rounded-circle shadow-sm p-2"
                  >
                    <i className="bi bi-heart" />
                  </Button>
                  <Button
                    variant="light"
                    className="rounded-circle shadow-sm p-2"
                  >
                    <i className="bi bi-share" />
                  </Button>
                  <Button
                    variant="light"
                    className="rounded-circle shadow-sm p-2"
                  >
                    <i className="bi bi-eye" />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorsSlider;
