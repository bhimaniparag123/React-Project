// src/Components/ViewProduct.jsx
import { useParams, useNavigate } from "react-router-dom";
import { getStorageData } from "../Services/localSotrageData";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const ViewProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const data = getStorageData();
    const found = data.find((prod) => prod.id === id);
    if (found) {
      setProduct(found);
    } else {
      alert("Product not found!");
      navigate("/");
    }
  }, [id, navigate]);

  if (!product) return null;

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">Product Details</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow">
            {product.image && (
              <Card.Img
                variant="top"
                src={product.image}
                height="250"
                style={{ objectFit: "cover" }}
              />
            )}
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                ₹ {product.price}
              </Card.Subtitle>
              <Card.Text>
                <strong>Category:</strong> {product.category}<br />
                <strong>Description:</strong> {product.description}<br />
                <strong>Stock:</strong> {product.stock}
              </Card.Text>
              <Button variant="secondary" onClick={() => navigate("/")}>
                Back to Product List
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewProduct;
