import { useContext, useEffect, useState } from "react";
import { Button, Card, Container, Modal, Table } from "react-bootstrap";
import { LojaContext } from "../context/LojaContext";

const CardPedidos = ({ pedido }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { produtos } = useContext(LojaContext);

  useEffect(() => {

  }, []);

  return (
    <div style={{ display: "flex", padding: "5px" }}>
      <Card
        key={pedido.id}
        className="mb-3"
        style={{ width: "50%", minWidth: "300px" }}
      >
        <Card.Body>
          <Card.Title>Data do Pedido: {pedido.dataPedido}</Card.Title>
          <Card.Text>Número do Pedido: {pedido.id}</Card.Text>
          <Card.Text>Valor Total: R$ {pedido.valorTotal.toFixed(2)}</Card.Text>
          <Button
            variant="primary"
            style={{ backgroundColor: "purple" }}
            onClick={handleShow}
          >
            Ver mais
          </Button>
        </Card.Body>
      </Card>
        <Modal size="md" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Produtos do pedido de número: {pedido.id}</Modal.Title>
          </Modal.Header>

          //height não escalando, body desgrudada do modal
          <Modal.Body style={{height:'76vh', display:'block', flexWrap:'contain', padding: "2rem" }}>
            <div 
              style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
              }}
            >
              
              <Table striped bordered hover style={{ color: "black" }}>
                <thead>
                  <tr>
                    <th>Produto</th>
                    <th>Nome</th>
                    <th>Qtd.</th>
                    <th>Valor Unitário</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody >
                  {pedido.itens.map((item, index) => {
                    const produto = produtos.find(
                      (prod) => prod.id == item.idProduto
                    );
                    return (
                      <tr key={index + 1}>
                        <td>
                          <img
                            style={{ height: "35px" }}
                            src={produto ? produto.imgurl : ""}
                            alt="imagem do produto"
                          />
                        </td>
                        <td>{produto.nome}</td>
                        <td>{item.quantidade}</td>
                        <td>R$ {produto.preco}</td>
                        <td>R$ {(item.quantidade * produto.preco).toFixed(2)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              </div>
          </Modal.Body>

          <Modal.Footer>
            <p>
              <b>Valor total do pedido:</b> R${pedido.valorTotal.toFixed(2)}
            </p>
          </Modal.Footer>
        </Modal>
    </div>
  );
};
export default CardPedidos;
