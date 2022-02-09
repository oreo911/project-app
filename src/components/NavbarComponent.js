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
import logo from "./lg.png";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar color="primary" expand="md" dark className="py-4">
        <Container>
          <Nav className="me-auto" navbar>
            <NavbarBrand href="/" className="fw-bold ">
              <img src={logo} width="40" height="40" /> Oreo's
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() {}} />
            <Collapse navbar>
              <div className="navbar-nav mx-auto mb-2 mb-lg-0">
              <NavItem>
                <NavLink href="/" className="active">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/book">Book's</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/About">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contact">Contact</NavLink>
              </NavItem>
              </div>
            </Collapse>
            <Navbar className="fw-bold text-white">Read Book's</Navbar>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
