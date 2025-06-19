import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./ProductCard.css";

import img1 from "../assets/asset 36.jpeg";
import haloTop from "../assets/asset 38.jpeg";
import fruteroMango from "../assets/asset 39.jpeg";
import mangoPassion from "../assets/asset 40.jpeg";
import fruitIceCream from "../assets/asset 23.jpeg";
import chocolateFudge from "../assets/asset 24.jpeg";
import klondike from "../assets/asset 27.jpeg";
import noosa from "../assets/asset 41.jpeg";

const products = [
  {
    image: img1,
    name: "Strawberry Ice Cream",
    price: 8.5,
    rating: 5,
    reviews: 5,
  },
  {
    image: haloTop,
    name: "Strawberry Frozen Dessert",
    price: 8.6,
    oldPrice: 12.36,
    discount: 30,
    rating: 5,
    reviews: 5,
  },
  {
    image: fruteroMango,
    name: "Orange Garcia Ice Cream",
    price: 6.25,
    oldPrice: 8.15,
    discount: 23,
    rating: 5,
    reviews: 5,
  },
  {
    image: mangoPassion,
    name: "Mango Passion Fruit",
    price: 9.12,
    rating: 5,
    reviews: 5,
  },
  {
    image: fruitIceCream,
    name: "Fruit Ice Cream",
    price: 13.0,
    rating: 5,
    reviews: 5,
  },
  {
    image: chocolateFudge,
    name: "Chocolate Fudge Brownie",
    price: 9.25,
    oldPrice: 11.68,
    discount: 21,
    rating: 5,
    reviews: 5,
  },
  {
    image: klondike,
    name: "Klondike Original Ice Cream",
    price: 7.15,
    oldPrice: 14.25,
    discount: 50,
    rating: 5,
    reviews: 5,
  },
  {
    image: noosa,
    name: "Frozen Yoghurt Gelato",
    price: 7.8,
    rating: 5,
    reviews: 5,
  },
];

const ProductCard = () => {
  return (
    <Container className="py-5">
      <Row className="g-4 justify-content-center">
        <h1
          className="text-center"
          style={{
            fontSize: "48px",
            fontFamily:
              "'Kalnia', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
            textTransform: "capitalize",
            marginBottom: "60px",
          }}
        >
          Eat icream. Be happy!
        </h1>
        {products.map((product, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className="border-0 rounded-0 position-relative product-card h-100">
              {/* Discount Badge */}
              {product.discount && (
                <div className="discount-badge">-{product.discount}%</div>
              )}

              {/* Hover Buttons */}
              <div className="action-buttons d-flex flex-column">
                <button>
                  <i className="bi bi-heart"></i>
                </button>
                <button>
                  <i className="bi bi-share"></i>
                </button>
                <button>
                  <i className="bi bi-eye"></i>
                </button>
              </div>

              <div className="image-container">
                <Card.Img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />

                {/* Add to cart button */}
                {/* <button className="add-to-cart">
                  <i className="bi bi-bag-plus"></i>
                </button> */}
              </div>

              <Card.Body className="text-center pt-3 pb-4">
                <div className="text-warning mb-1" style={{ fontSize: "1rem" }}>
                  {"★".repeat(product.rating)}
                  <span className="text-dark ms-1">({product.reviews})</span>
                </div>
                <Card.Title className="fs-6">{product.name}</Card.Title>
                <Card.Text className="mt-1">
                  <span className="fw-bold text-danger">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-muted ms-2 text-decoration-line-through">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <button className="view-all-btn">
          <i className="bi bi-arrow-right me-2 arrow-icon"></i> View All
          Products
        </button>
      </div>
    </Container>
  );
};

export default ProductCard;
