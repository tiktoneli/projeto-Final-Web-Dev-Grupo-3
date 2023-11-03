import { api } from "../../api/api";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Navbar, Nav } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const Produtos = () => {
  //criar estados e variáveis aqui

  return (
    <Container fluid className="p-0 vh-100 d-flex flex-column bg-light">
      <Navbar data-bs-theme="secondary" className="bg-primary bg-body-tertiary justify-content-between">
        <Form inline>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
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
      <Container className="d-flex justify-content-center align-items-center flex-grow-1">
        <Row xs={1} md={3} className="g-4">
          {/* Substitua 'i' com o índice apropriado para cada produto */}
          {[...Array(9)].map((_, i) => (
            <Col key={i}>
              {/* Caixa de produto */}
              <Card style={{ width: '18rem' }}>
                {/* Imagem do produto */}
                <Card.Img variant="top" src={`url?sa=i&url=https%3A%2F%2Fpremierpet.com.br%2Fpet%2Fbuldogue-frances%2F&psig=AOvVaw3Sln_ZszahewQBEY_cNflp&ust=1699058091743000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNiGjuLKpoIDFQAAAAAdAAAAABAE`} />
                {/* Botões de carrinho e coração no canto inferior */}
                <span style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                  <Button variant="success">🛒</Button>
                  <Button variant="danger">❤️</Button>
                </span>
                {/* Nome do produto e valor */}
                <Card.Body>
                  <Card.Title>Nome do Produto {i}</Card.Title>
                  <Card.Text>R$ 10,00</Card.Text>
                  {/* Botão para ver mais */}
                  <Button variant="primary">Ver mais</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Produtos;
