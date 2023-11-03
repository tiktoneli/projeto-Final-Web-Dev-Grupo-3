import { Button, ButtonGroup, Card, CardGroup, Form } from "react-bootstrap";
import { api } from "../../api/api";

const Produto = () => {
  //criar estados e variáveis aqui

  return (
    <div>
      <h1>Produto</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Nome do Produto</Card.Title>
            <Card.Text>
              <p>valor</p>
              <p>descrição</p>
              <p></p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <ButtonGroup size="sm">
              <Button>-</Button>
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-1"
              />
              <Button>+</Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Produto;
