import Logo from "./Logo";
import "./HeaderBar.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";

function HeaderBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="home" className="HeaderBar">
        <Logo />
        RMarion Portfolio
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="about">About</Nav.Link>
        <Nav.Link href="contact">Contact</Nav.Link>
        <NavDropdown title="Projects" id="projects-dropdown">
          <NavDropdown.Item href="terrain-editor">
            Terrain Editor
          </NavDropdown.Item>
          <NavDropdown.Item href="terrain-editor-trees">
            Terrain Editor (Experimental)
          </NavDropdown.Item>
          <NavDropdown.Item href="vr-experiments">
            VR Experiments
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

export default HeaderBar;
