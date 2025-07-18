// src/Components/ProductList.jsx
import { useEffect, useState, useContext } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Dropdown,
  Pagination,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { getStorageData } from "../Services/localSotrageData";

const ProductList = () => {
  const navigate = useNavigate();
  const { products, setProducts } = useContext(ProductContext);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  // Unique categories for dropdown filter
  const categories = ["All", ...new Set(products.map(p => p.category).filter(Boolean))];

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleSearch = () => {
    let filtered = products;

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

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleClear = () => {
    setSearchTerm("");
    setCategoryFilter("All");
    const allProducts = getStorageData(); // 🟢 restore from original localStorage
    setProducts(allProducts);             // 🟢 reset context memory
    setFilteredProducts(allProducts);     // 🟢 show all products again
    setCurrentPage(1);
    setSortBy("default");
  };

  const handleSort = (type) => {
    setSortBy(type);
    const sorted = [...filteredProducts];

    switch (type) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "stock-desc":
        sorted.sort((a, b) => b.stock - a.stock);
        break;
      default:
        sorted.sort((a, b) => a.id.localeCompare(b.id));
    }

    setFilteredProducts(sorted);
  };

  const handleDelete = (id) => {
    const updated = filteredProducts.filter((prod) => prod.id !== id);
    setFilteredProducts(updated);

    const allData = products.filter((prod) => prod.id !== id);
    setProducts(allData);
    // Optional: setStorageData(allData); // if you want delete to affect localStorage too
  };

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const handleView = (id) => {
    navigate(`/view-product/${id}`);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <Container className="my-4">
      <h1 className="mb-4 text-center">Product List</h1>

      {/* Search / Filter / Sort */}
      <Row className="mb-4">
        <Col md={3}>
          <Form.Control
            type="text"
            placeholder="Search Products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Form.Select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={3} className="d-flex justify-content-end">
          <Button variant="primary" className="me-2" onClick={handleSearch}>
            Search
          </Button>
          <Button variant="outline-secondary" onClick={handleClear}>
            Clear
          </Button>
        </Col>  
        <Col md={3}>
          <Dropdown onSelect={(eventKey) => handleSort(eventKey)}>
            <Dropdown.Toggle variant="secondary" id="sortDropdown">
              Sort By
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="default">Default</Dropdown.Item>
              <Dropdown.Item eventKey="price-asc">Price: Low to High</Dropdown.Item>
              <Dropdown.Item eventKey="price-desc">Price: High to Low</Dropdown.Item>
              <Dropdown.Item eventKey="name-asc">Name (A-Z)</Dropdown.Item>
              <Dropdown.Item eventKey="stock-desc">Stock (High to Low)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      {/* Product Cards */}
      {currentProducts.length === 0 ? (
        <h5 className="text-center text-muted">No Products Found</h5>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {currentProducts.map((prod) => (
            <Col key={prod.id}>
              <Card className="h-100 shadow-sm">
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
                  <Button variant="info" size="sm" onClick={() => handleView(prod.id)}>View</Button>
                  <Button variant="warning" size="sm" onClick={() => handleEdit(prod.id)}>Edit</Button>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(prod.id)}>Delete</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="justify-content-center mt-4">
          <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
          <Pagination.Prev onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} />
          {[...Array(totalPages)].map((_, i) => (
            <Pagination.Item
              key={i}
              active={i + 1 === currentPage}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} />
          <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
      )}
    </Container>
  );
};

export default ProductList;
