import React from "react";
import{PiShoppingCartSimpleBold} from 'react-icons/pi'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Navbar } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const Header = () => {
  return(<>  
        <Container>
        <Navbar data-bs-theme="secondary" className="bg-primary bg-body-tertiary justify-content-between">
        <Form inline>
            <Link style={{marginRight:'20px'}} to={'/'}><img src=""/>LOGO AQUI</Link>
            <Link to={'/home'}><Navbar.Brand href="#home">Login</Navbar.Brand></Link>
        </Form>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Pesquisar</Button>
            </Col>
            <Col xs="auto">
              <Button variant="success" onClick={() => window.location.href = "/carrinho"}>🛒</Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
        </Container>
    
    </>)
}
export default Header