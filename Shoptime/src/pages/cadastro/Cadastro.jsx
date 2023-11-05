import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

const Register = () => {
  //criar estados e variáveis aqui

  return (
    <div style={{minHeight:'100vh', display: 'flex',
        flexDirection: 'column'}}>
      <Container className="d-flex justify-content-center align-items-center vh-100" style={{ padding: 0, margin: 0 }}>
        <Card border="primary" style={{ width: "40rem" }}>
          <Card.Header>Cadastro</Card.Header>
          <Card.Body>
            <Form style={{alignItems: "center"}}>
            <Form.Group className="mb-3" controlId="formBasicNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="Nome" placeholder="Nome Completo" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Senha" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                <Form.Label>Confirme a Senha</Form.Label>
                <Form.Control type="password" placeholder="Confirme a Senha" />
              </Form.Group>
            </Form>
          </Card.Body>
          <Button variant="info" type="submit">
            Cadastrar
          </Button>
        </Card>
      </Container>
    </div>
  );
};

export default Register;