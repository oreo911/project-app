import React from "react";
import logo from "../img/e-learning.png";

const Footer = () => {
  return (
    <div>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-muted">&copy; 2022 Oreo's Team</p>

          <div class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <img src={logo} width="45" height="45" />
          </div>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <a href="/" class="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="book" class="nav-link px-2 text-muted">
                Book's
              </a>
            </li>
            <li class="nav-item">
              <a href="about" class="nav-link px-2 text-muted">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="contact" class="nav-link px-2 text-muted">
                Contact
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
