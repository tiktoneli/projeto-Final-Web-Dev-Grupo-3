import React, { useContext, useEffect } from 'react';
import { Container, Navbar, Form, Button, Table, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { LojaContext } from '../../context/LojaContext';
import { api } from '../../api/api';

const Pedidos = () => {

  const {quantidadeCarrinho, setQuantidadeCarrinho, produtosCarrinho, setProdutosCarrinho, pedidos, setPedidos, usuarioLogado} = useContext(LojaContext)
  

  const getPedidos = async () => {
    const pedidosUsuario = setPedidos(api.get('/pedidos', {
      params: {idUser: usuarioLogado.id}
    }))
    setPedidos(pedidosUsuario.data)
  }

  useEffect( async () => {
    await getPedidos()
  }, [])

  const valorTotal = pedidos.reduce((total, item) => total + item.quantidade * item.valorUnitario, 0);

  return (
    <Container fluid className="p-0 vh-100 d-flex flex-column bg-light">
      

      <Container className="d-flex justify-content-center align-items-center flex-grow-1">
        <Card className="w-75 p-3" style={{ backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <h3 className="font-weight-bold mb-4">PEDIDO</h3>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h5 className="font-weight-bold">Nome do Usuário</h5>
          </div>
          <Table striped bordered hover style={{ color: 'black' }}>
            {/* Restante do código permanece igual */}
          </Table>

          <Table striped bordered hover style={{ color: 'black' }}>
            <thead>
              <tr>
                <th></th>
                <th>Pedido</th>
                <th>Produtos</th>

              </tr>
            </thead>
            <tbody>
              {pedidos.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td><img src={item.imagem} alt={item.nome} style={{ width: '50px' }} /></td>
                  <td>R$ {(item.quantidade * item.valorUnitario).toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="5" className="text-end font-weight-bold">Valor Total</td>
                <td className="font-weight-bold">R$ {valorTotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
          <div className="mt-3 d-flex justify-content-end">
            <Button variant="primary">Finalizar Pedido</Button>
          </div>
        </Card>
      </Container>
    </Container>
  );
};

export default Pedidos;