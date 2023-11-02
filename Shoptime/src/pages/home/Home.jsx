import { api } from "../../api/api";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

const Home = () => {
  //criar estados e variáveis aqui

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100" >
      <Card border="primary" style={{ width: "25rem" }}>
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Form style={{alignItems: "center"}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Card.Body>
        <Button variant="info" type="submit">
          Submit
        </Button>
      </Card>
    </Container>
  );
};

export default Home;