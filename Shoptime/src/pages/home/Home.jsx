import { api } from "../../api/api";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card border="primary" style={{ width: "25rem" }}>
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit} style={{ alignItems: "center" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="info" type="submit">
              Entrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
