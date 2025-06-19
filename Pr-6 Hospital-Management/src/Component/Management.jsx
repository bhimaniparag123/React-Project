import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Navbar,
  Badge,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: "",
    gender: "",
    address: "",
    contact: "",
    history: "",
    mainId: "",
    bloodGroup: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("patients");
    if (saved) setPatients(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleAddOrUpdate = () => {
    const {
      name,
      age,
      dob,
      gender,
      address,
      contact,
      history,
      mainId,
      bloodGroup,
    } = formData;

    if (
      !name ||
      !age ||
      !dob ||
      !gender ||
      !address ||
      !contact ||
      !history ||
      !mainId ||
      !bloodGroup
    )
      return;

    const updated = [...patients];
    if (editIndex !== null) {
      updated[editIndex] = formData;
    } else {
      updated.push(formData);
    }
    setPatients(updated);
    setFormData({
      name: "",
      age: "",
      dob: "",
      gender: "",
      address: "",
      contact: "",
      history: "",
      mainId: "",
      bloodGroup: "",
    });
    setEditIndex(null);
  };

  const handleEdit = (i) => {
    setFormData(patients[i]);
    setEditIndex(i);
  };

  const handleDelete = (i) =>
    setPatients(patients.filter((_, index) => index !== i));

  return (
    <div className="bg-light min-vh-100 py-4">
      <Navbar bg="dark" variant="dark" className="mb-4 shadow">
        <Container>
          <Navbar.Brand className="fw-bold fs-4 text-uppercase">
            🏥 Hospital Management
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Row className="g-4 justify-content-center">
          <Col lg={8}>
            <Card className="shadow rounded-4 border-0">
              <Card.Header className="bg-gradient bg-success text-white rounded-top-4 fs-5 fw-semibold py-3">
                ➕ Register New Patient
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    {["mainId", "name", "dob", "age", "gender", "bloodGroup", "contact", "address"].map(
                      (field, idx) => (
                        <Col md={field === "address" ? 12 : 6} key={idx}>
                          <Form.Group className="mb-3">
                            <Form.Label className="text-capitalize">
                              {field.replace("Id", " ID").replace("dob", "Date of Birth")}
                            </Form.Label>
                            {field === "gender" ? (
                              <Form.Select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                              >
                                <option value="">Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                              </Form.Select>
                            ) : (
                              <Form.Control
                                type={field === "dob" ? "date" : field === "age" ? "number" : "text"}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                placeholder={`Enter ${field}`}
                              />
                            )}
                          </Form.Group>
                        </Col>
                      )
                    )}

                    <Col md={12}>
                      <Form.Group className="mb-4">
                        <Form.Label>Medical History</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="history"
                          rows={3}
                          value={formData.history}
                          onChange={handleChange}
                          placeholder="Enter relevant medical background..."
                        />
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <div className="d-grid">
                        <Button variant="success" size="lg" onClick={handleAddOrUpdate}>
                          {editIndex !== null ? "Update" : "Add"} Patient
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={8} className="mt-4">
            <Card className="shadow-sm border-0 rounded-4">
              <Card.Header className="bg-info text-white rounded-top-4 fs-5 fw-semibold py-3 d-flex justify-content-between align-items-center">
                🧾 Patient Records
                <Badge bg="dark" pill>
                  {patients.length}
                </Badge>
              </Card.Header>
              <Card.Body>
                {patients.length === 0 ? (
                  <p className="text-muted text-center">No patients added yet.</p>
                ) : (
                  patients.map((patient, i) => (
                    <Card className="mb-3 border-0 shadow-sm rounded-3" key={i}>
                      <Card.Body>
                        <Card.Title className="text-success fw-bold fs-5 border-bottom pb-2">
                          {patient.name} <small className="text-muted ms-2">#{patient.mainId}</small>
                        </Card.Title>
                        <Row>
                          <Col md={6}>
                            <p className="mb-1"><strong>DOB:</strong> {patient.dob}</p>
                            <p className="mb-1"><strong>Age:</strong> {patient.age}</p>
                            <p className="mb-1"><strong>Gender:</strong> {patient.gender}</p>
                            <p className="mb-1"><strong>Blood Group:</strong> {patient.bloodGroup}</p>
                          </Col>
                          <Col md={6}>
                            <p className="mb-1"><strong>Contact:</strong> {patient.contact}</p>
                            <p className="mb-1"><strong>Address:</strong> {patient.address}</p>
                            <p className="mb-1"><strong>History:</strong> {patient.history}</p>
                          </Col>
                        </Row>
                        <div className="mt-3 d-flex justify-content-end">
                          <Button
                            variant="outline-primary"
                            size="sm"
                            className="me-2"
                            onClick={() => handleEdit(i)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => handleDelete(i)}
                          >
                            Delete
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  ))
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
