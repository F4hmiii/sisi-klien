// src/Components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const footerStyle = {
  backgroundColor: "#343a40",
  color: "white",
  padding: "20px 0",
};

function Footer() {
  return (
    <footer className="bottom" style={footerStyle}>
      <Container fluid>
        <Row>
          <Col md="4" className="text-center text-md-left">
            <h5 className="mb-3">Biodata diri</h5>
            <p>Informasi data diri.</p>
          </Col>
          <Col md="4" className="text-center">
            <h5 className="mb-3">Navigasi</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col md="4" className="text-center text-md-right">
            <h5 className="mb-3">Kontak Kami</h5>
            <p>Email: affafahmizain@gmail.com</p>
            <p>Telepon: 087850706038</p>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-2 bg-secondary">
        <p className="mb-0">&copy; informasi data pribadi 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
