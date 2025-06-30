import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsChevronDown, BsCart, BsHeart, BsPerson, BsSearch } from "react-icons/bs";
import "./Header.css"; // Make sure to add this CSS
// import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container className="ps-0 pe-0">
        {/* Brand Logo */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src="../logo-primary.svg"
            alt="Logo"
            height="60"
            className="me-2"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* Nav Items */}
          <Nav className="mx-auto gap-4 align-items-center">
            <Nav.Link href="#" className="active-link">Home <BsChevronDown className="ms-1" /></Nav.Link>
            <Nav.Link href="#">Our Story</Nav.Link>
            <Nav.Link href="#">Shop  <BsChevronDown className="ms-1" /></Nav.Link>
            {/* <NavDropdown title="Shop" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Option 2</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#">Blog <BsChevronDown className="ms-1" /></Nav.Link>
            <Nav.Link href="#">Pages <BsChevronDown className="ms-1" /></Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>

          {/* Right Icons */}
          <div className="d-flex align-items-center icon-group ms-lg-4 mt-3 mt-lg-0">
            <BsSearch className="nav-icon" />
            <BsPerson className="nav-icon" />
            <BsHeart className="nav-icon" />
            <BsCart className="nav-icon" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
