import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import logo from "../img/lg.png";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar color="primary" expand="md" dark className="py-4">
        <Container>
          <Nav className="me-auto" navbar>
            <NavbarBrand href="/" className="fw-bold ">
              <img src={logo} width="50" height="50" className="display-3" /> Oreo's
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() {}} />
            <Collapse navbar>
              <div className="navbar-nav mx-auto mb-2 mb-lg-0">
              <NavItem>
                <NavLink href="/" className="active">
                  <h4>Home</h4>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/book"><h4>Book's</h4></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/About"><h4>About</h4></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contact"><h4>Contact</h4></NavLink>
              </NavItem>
              </div>
            </Collapse>
            <Navbar className="fw-bold text-white">
              <button className="btn btn-outline-light ">Login</button>
            </Navbar>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
