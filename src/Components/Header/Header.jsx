import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSubmitLogin = () => {
    navigate("/login");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="">Duc Minh Code</Navbar.Brand> */}
        <NavLink className="navbar-brand title-main" to="/">
          Duc Minh
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/users">
              User
            </NavLink>
            <NavLink className="nav-link" to="/admins">
              Admin
            </NavLink>
          </Nav>
          <Nav className="me-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
          <Nav className="">
            <Button
              variant="outline-success"
              className="btn-login"
              onClick={() => {
                handleSubmitLogin();
              }}
            >
              Login
            </Button>
            {/* <button >Login</button> */}
            <Button variant="outline-success" className="btn-signUp">
              SignUp
            </Button>
            {/* <button className="btn-signUp">SignUp</button> */}
            {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
                <NavDropdown.Item>Log in</NavDropdown.Item>
                <NavDropdown.Item>Log out</NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Help</NavDropdown.Item>
              </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
