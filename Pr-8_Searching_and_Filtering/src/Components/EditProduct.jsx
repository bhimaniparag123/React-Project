// src/Components/EditProduct.jsx
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { getStorageData, setStorageData } from "../Services/localSotrageData";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
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

useEffect(() => {
  const data = getStorageData();
  const product = data.find((prod) => prod.id === id);
  if (product) {
    setInputForm(product); // ✅ sets product data into the form
  }
}, [id]);


  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const products = getStorageData();
    const updated = products.map((prod) =>
      prod.id === id ? inputForm : prod
    );
    setStorageData(updated);
    navigate("/");
  };

  return (
    <>
      <h1>Edit Product</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3">Product Name</Form.Label>
          <Col sm="9">
            <Form.Control type="text" name="name" value={inputForm.name} onChange={handleChanged} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3">Price</Form.Label>
          <Col sm="9">
            <Form.Control type="number" name="price" value={inputForm.price} onChange={handleChanged} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3">Category</Form.Label>
          <Col sm="9">
            <Form.Control type="text" name="category" value={inputForm.category} onChange={handleChanged} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3">Description</Form.Label>
          <Col sm="9">
            <Form.Control type="text" name="description" value={inputForm.description} onChange={handleChanged} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3">Stock</Form.Label>
          <Col sm="9">
            <Form.Control type="number" name="stock" value={inputForm.stock} onChange={handleChanged} />
          </Col>
        </Form.Group>

        <Button type="submit">Update Product</Button>
      </Form>
    </>
  );
};

export default EditProduct;
