import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Form, Button, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Navbar data-bs-theme="secondary" className="bg-info justify-content-between">
        <Form inline>
          <Link style={{ marginRight: '20px', color: 'white' }} to={'/'}><img src=""/>LOGO AQUI</Link>
        </Form>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Button variant="success" style={{ backgroundColor: 'turquoise' }} onClick={() => window.location.href = "/carrinho"}>🛒</Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
    </Container>
  );
}

export default Footer;
