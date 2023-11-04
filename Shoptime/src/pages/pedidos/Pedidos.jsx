import React, { useContext, useEffect } from 'react';
import { Container, Navbar, Form, Button, Table, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { LojaContext } from '../../context/LojaContext';
import { api } from '../../api/api';

const Pedidos = () => {

  const { produtos, pedidos, setPedidos, usuarioLogado} = useContext(LojaContext)
  

  const getPedidos = async () => {
    try {
      const response = await api.get('/pedidos', {
        params: { idUser: usuarioLogado.id }
      });
      setPedidos(response.data);
    } catch (error) {
      console.error('Erro ao obter pedidos:', error);
    }
  };

  const getProdutos = async () => {
    const response = await api.get('/produtos', {
      params: {id: item.id}
    })
  }
  

  useEffect(() => {
    const fetchData = async () => {
      await getPedidos();
    };
    fetchData();
  }, []);

  const valorTotal = pedidos.reduce((total, item) => total + item.quantidade * item.valorUnitario, 0);

  return (
    <>
      <Container style={{ padding:"2rem"}} className="d-flex justify-content-center align-items-center flex-grow-1">
        <Card className="w-75 p-3" style={{ backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <h3 className="font-weight-bold mb-4">PEDIDO</h3>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h5 className="font-weight-bold">Nome do Usuário</h5>
          </div>
          <Table striped bordered hover style={{ color: 'black' }}>
            <thead>
              <tr>
                <th></th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((pedido, index) => (
                <tr key={pedido.id}>
                  <td>{index + 1}</td>
                  {pedido.produtos ? (
                    pedido.produtos.map((produto, produtoIndex) => (
                      <React.Fragment key={produtoIndex}>
                        <td>{ produto.nome }</td>
                        <td>{ produto.quantidade }</td>
                        <td>R$ {(produto.quantidade * produto.preco).toFixed(2)}</td>
                      </React.Fragment>
                    ))
                  ) : (
                    <td colSpan="2">Nenhum produto encontrado</td>
                  )}
                  
                </tr>
              ))}
            </tbody>
            <tfoot>
            {pedidos.map((pedido, index) => (
              <tr key={pedido.id}>
                <td colSpan="4" className="text-end font-weight-bold">Valor Total</td>
                <td className="font-weight-bold">R$ {pedido.valorTotal.toFixed(2)}</td>
              </tr>
              ))}
            </tfoot>
          </Table>
          <div className="mt-3 d-flex justify-content-end">
            <Button variant="primary">Finalizar Pedido</Button>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default Pedidos;