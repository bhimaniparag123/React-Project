import { useState } from "react";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import generateUniqueId from "generate-unique-id";
import { getStorageData, setStorageData } from "../Services/localSotrageData";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const initialState = {
    id: "",
    name: "",
    price: "",
    category: "",
    description: "",
    stock: "",
  };
  const [inputForm, setInputForm] = useState(initialState);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputForm.id = generateUniqueId({ length: 6, useLetters: false });
    const data = getStorageData();
    data.push(inputForm);
    setStorageData(data);
    navigate("/"); // Redirect to ProductList page
  };

  return (
    <Container className="mt-4">
      <h2>Add Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Product Name</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="name"
              value={inputForm.name}
              onChange={handleChanged}
              required
              placeholder="Enter product name"
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
          <Form.Label column sm="2">Category</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="category"
              value={inputForm.category}
              onChange={handleChanged}
              placeholder="Enter category"
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

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Stock</Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              name="stock"
              value={inputForm.stock}
              onChange={handleChanged}
              placeholder="Enter stock"
            />
          </Col>
        </Form.Group>

        <Button type="submit" variant="success">Add Product</Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
