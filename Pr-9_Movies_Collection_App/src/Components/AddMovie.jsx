import { useState } from "react";
import { Button, Col, Form, Row, Container, Image } from "react-bootstrap";
import generateUniqueId from "generate-unique-id";
import { getStorageData, setStorageData } from "../Services/localSotrageData";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const navigate = useNavigate();
  
  const initialState = {
    id: "",
    name: "",
    price: "",
    description: "",
    image: "", // ✅ added image property
  };


  const [inputForm, setInputForm] = useState(initialState);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  // ✅ Image handler (base64 conversion)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInputForm((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      ...inputForm,
      id: generateUniqueId({ length: 6, useLetters: false }),
    };
    const data = getStorageData();
    data.push(newMovie);
    setStorageData(data);
    navigate("/");
  };

  return (
    <Container className="mt-4">
      <h2>Add Movie</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Movie Name</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="name"
              value={inputForm.name}
              onChange={handleChanged}
              required
              placeholder="Enter movie name"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Price ₹</Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              name="price"
              value={inputForm.price}
              onChange={handleChanged}
              required
              placeholder="Enter price"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Description</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="description"
              value={inputForm.description}
              onChange={handleChanged}
              placeholder="Enter description"
            />
          </Col>
        </Form.Group>
        {/* ✅ Image Upload */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Image</Form.Label>
          <Col sm="10">
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {inputForm.image && (
              <Image
                src={inputForm.image}
                alt="Preview"
                className="mt-3"
                thumbnail
                style={{ maxWidth: "200px" }}
              />
            )}
          </Col>
        </Form.Group>

        <Button type="submit" variant="success">
          Add Movie
        </Button>
      </Form>
    </Container>
  );
};

export default AddMovie;
