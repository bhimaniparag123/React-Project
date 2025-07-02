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

  const [products, setProducts] = useState([]); // ✅ Local copy of product list
  const [inputForm, setInputForm] = useState(initialState);

  const categoryOptions = [
    "Electronics",
    "Clothing",
    "Grocery",
    "Books",
    "Furniture",
    "Beauty",
    "Toys",
  ];

  useEffect(() => {
    const data = getStorageData(); // ✅ Load from localStorage once
    setProducts(data); // ✅ Store in local state

    const product = data.find((prod) => prod.id === id);
    if (product) {
      setInputForm(product); // ✅ Pre-fill form with product
    }
  }, [id]);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProducts = products.map((prod) =>
      prod.id === id ? inputForm : prod
    );
    setProducts(updatedProducts); 
    alert("Product updated temporarily (not saved to localStorage).");
    navigate("/");
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="mb-4 text-center text-primary">Edit Product</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={inputForm.name}
                    onChange={handleChanged}
                    placeholder="Enter product name"
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
                    placeholder="Enter product price"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    name="category"
                    value={inputForm.category}
                    onChange={handleChanged}
                    required
                  >
                    <option value="">Select Category</option>
                    {categoryOptions.map((cat, index) => (
                      <option key={index} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={inputForm.description}
                    onChange={handleChanged}
                    placeholder="Enter product description"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    type="number"
                    name="stock"
                    value={inputForm.stock}
                    onChange={handleChanged}
                    placeholder="Enter stock quantity"
                    required
                  />
                </Form.Group>

                <div className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={() => navigate("/")}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="success">
                    Update Product
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

export default EditProduct;
