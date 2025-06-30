// src/Components/ProductList.jsx
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row
} from "react-bootstrap";
import { getStorageData, setStorageData } from "../Services/localSotrageData";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState(getStorageData());
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const filtered = products.filter((prod) => prod.id !== id);
    setProducts(filtered);
  };

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const handleView = (id) => {
    navigate(`/view-product/${id}`);
  };

  useEffect(() => {
    setStorageData(products);
  }, [products]);

  return (
    <Container className="my-4">
      <h1 className="mb-4 text-center">Product List</h1>
      {products.length === 0 ? (
        <h5 className="text-center text-muted">No Products Found</h5>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {products.map((prod) => (
            <Col key={prod.id}>
              <Card className="h-100 shadow-sm">
                {prod.image && (
                  <Card.Img variant="top" src={prod.image} height="150" style={{ objectFit: "cover" }} />
                )}
                <Card.Body>
                  <Card.Title className="fw-bold">{prod.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    ₹ {prod.price}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Category:</strong> {prod.category}<br />
                    <strong>Stock:</strong> {prod.stock}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                  <Button variant="info" size="sm" onClick={() => handleView(prod.id)}>
                    View
                  </Button>
                  <Button variant="warning" size="sm" onClick={() => handleEdit(prod.id)}>
                    Edit
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(prod.id)}>
                    Delete
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductList;
