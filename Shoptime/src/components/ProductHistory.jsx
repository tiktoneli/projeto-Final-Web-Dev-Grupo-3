import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const OrderHistory = () => {

  const orderHistoryData = [
    {
      id: 1,
      date: "2023-10-01",
      total: 100.0,
    },
    {
      id: 2,
      date: "2023-09-15",
      total: 75.5,
    },
  ];

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100" style={{ padding: 0, margin: 0 }}>
      <Card border="primary" style={{ width: "40rem" }}>
        <Card.Header>Histórico de Pedidos</Card.Header>
        <Card.Body>
          <ListGroup>
            {orderHistoryData.map((order) => (
              <ListGroup.Item key={order.id}>
                <div>
                  <span>Data: {order.date}</span>
                  <span className="float-end">Total: R$ {order.total}</span>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OrderHistory;
