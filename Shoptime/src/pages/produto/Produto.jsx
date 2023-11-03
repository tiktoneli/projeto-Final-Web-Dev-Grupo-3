import {
  Button,
  ButtonGroup,
  Card,
  CardGroup,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { api } from "../../api/api";
import { useState } from "react";

const Produto = () => {
  // criar estados e variáveis aqui
  const [quantidade, setQuantidade] = useState(0);

  const handleAumentar = () => {
    setQuantidade(quantidade + 1);
  };

  const handleDiminuir = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  };

  return (
    <Container style={{ paddingTop:"1.5rem"}}>
      <CardGroup style={{ minHeight:"35rem"}}>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className="d-flex justify-content-between">
              Nome do Produto
              <Button variant="primary" className="ml-2">
                Like
              </Button>
            </Card.Title>
            <Card.Text>
              <p>valor</p>
              <p>descrição</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">
            <InputGroup className="mb-1">
              <Button variant="secondary" onClick={handleDiminuir}>
                -
              </Button>
              <span className="p-2" style={{ backgroundColor:"#6c757d", color:"#FFFFFF" }} >{quantidade}</span>
              <Button variant="secondary" onClick={handleAumentar}>
                +
              </Button>
            </InputGroup>
            <div className="d-flex">
              <button type="submit" className="btn btn-primary mx-1">
                Add ao Carrinho
              </button>
              <button type="submit" className="btn btn-primary mx-1">
                Favoritar
              </button>
            </div>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Produto;
