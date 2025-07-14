import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Card
} from "react-bootstrap";
import { getStorageData } from "../Services/localSotrageData"; // ✅ Only import get
import { useNavigate, useParams } from "react-router-dom";

const EditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const initialState = {
    id: "",
    name: "",
    price: "",
    description: "",
  };

  const [Movies, setMovies] = useState([]); // ✅ Local copy of Movie list
  const [inputForm, setInputForm] = useState(initialState);

  useEffect(() => {
    const data = getStorageData(); // ✅ Load from localStorage once
    setMovies(data); // ✅ Store in local state

    const Movie = data.find((prod) => prod.id === id);
    if (Movie) {
      setInputForm(Movie); // ✅ Pre-fill form with Movie
    }
  }, [id]);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMovies = Movies.map((prod) =>
      prod.id === id ? inputForm : prod
    );
    setMovies(updatedMovies); 
    alert("Movie updated temporarily (not saved to localStorage).");
    navigate("/");
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="mb-4 text-center text-primary">Edit Movie</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Movie Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={inputForm.name}
                    onChange={handleChanged}
                    placeholder="Enter Movie name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Price (₹)</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    value={inputForm.price}
                    onChange={handleChanged}
                    placeholder="Enter Movie price"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={inputForm.description}
                    onChange={handleChanged}
                    placeholder="Enter Movie description"
                  />
                </Form.Group>
                
                <div className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={() => navigate("/")}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="success">
                    Update Movie
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditMovie;
