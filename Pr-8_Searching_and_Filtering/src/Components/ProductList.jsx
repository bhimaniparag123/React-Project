import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { getStorageData, setStorageData } from "../Services/localSotrageData";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState(getStorageData());
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const navigate = useNavigate();

  // Unique categories for filter dropdown
  const categories = ["All", ...new Set(getStorageData().map(p => p.category).filter(Boolean))];

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

  const handleSearch = () => {
    const allData = getStorageData();
    let filtered = allData;

    if (searchTerm) {
      filtered = filtered.filter((prod) =>
        prod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prod.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter !== "All") {
      filtered = filtered.filter((prod) => prod.category === categoryFilter);
    }

    setProducts(filtered);
  };

  const handleClear = () => {
    setSearchTerm("");
    setCategoryFilter("All");
    setProducts(getStorageData());
  };

  useEffect(() => {
    setStorageData(products);
  }, [products]);

  return (
    <Container className="my-4">
      <h1 className="mb-4 text-center">Product List</h1>

      {/* Search and Filter Bar */}
      <Row className="mb-4">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Search by name, category or description"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Form.Select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={5} className="d-flex">
          <Button variant="primary" className="me-2" onClick={handleSearch}>
            Search
          </Button>
          <Button variant="secondary" onClick={handleClear}>
            Clear
          </Button>
        </Col>
      </Row>

      {products.length === 0 ? (
        <h5 className="text-center text-muted">No Products Found</h5>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {products.map((prod) => (
            <Col key={prod.id}>
              <Card className="h-100 shadow-sm">
                {prod.image && (
                  <Card.Img
                    variant="top"
                    src={prod.image}
                    height="150"
                    style={{ objectFit: "cover" }}
                  />
                )}
                <Card.Body>
                  <Card.Title className="fw-bold">{prod.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    ₹ {prod.price}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Category:</strong> {prod.category} <br />
                    <strong>Stock:</strong> {prod.stock}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                  <Button
                    variant="info"
                    size="sm"
                    onClick={() => handleView(prod.id)}
                  >
                    View
                  </Button>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => handleEdit(prod.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(prod.id)}
                  >
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