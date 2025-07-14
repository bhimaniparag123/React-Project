// src/Components/ViewMovie.jsx
import { useParams, useNavigate } from "react-router-dom";
import { getStorageData } from "../Services/localSotrageData";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const ViewMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Movie, setMovie] = useState(null);

  useEffect(() => {
    const data = getStorageData();
    const found = data.find((prod) => prod.id === id);
    if (found) {
      setMovie(found);
    } else {
      alert("Movie not found!");
      navigate("/");
    }
  }, [id, navigate]);

  if (!Movie) return null;

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">Movie Details</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow">
            {Movie.image && (
              <Card.Img
                variant="top"
                src={Movie.image}
                height="250"
                style={{ objectFit: "cover" }}
              />
            )}
            <Card.Body>
              <Card.Title>{Movie.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                ₹ {Movie.price}
              </Card.Subtitle>
              <Card.Text>
                <strong>Category:</strong> {Movie.category}<br />
                <strong>Description:</strong> {Movie.description}<br />
                <strong>Stock:</strong> {Movie.stock}
              </Card.Text>
              <Button variant="secondary" onClick={() => navigate("/")}>
                Back to Movie List
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewMovie;
