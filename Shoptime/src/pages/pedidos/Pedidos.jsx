import React, { useContext, useEffect, useState } from 'react';
import { Container, Navbar, Form, Button, Table, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { LojaContext } from '../../context/LojaContext';
import { api } from '../../api/api';

const Pedidos = () => {

  const { pedidos, setPedidos, usuarioLogado } = useContext(LojaContext);
  const [produtosDoPedido, setProdutosDoPedido] = useState([]);
  

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

  const getDetalhesProdutos = async () => {
    setProdutosDoPedido([]);
  
    try {
      const detalhesPromises = pedidos.map(async (p) => {
        return Promise.all(p.itens.map(async (i) => {
          const response = await api.get(`/produtos/${i.idProduto}`);
          console.log('Detalhes do produto:', response.data);
          return response.data;
        }));
      });
  
      const produtosDoPedido = await Promise.all(detalhesPromises);
      
      setProdutosDoPedido(produtosDoPedido.flat());
    } catch (error) {
      console.error('Erro ao obter detalhes dos produtos do pedido:', error);
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      await getPedidos();
    };
    fetchData();
  }, []); 
  
  useEffect(() => {
    const fetchData = async () => {
      await getDetalhesProdutos();
    };
    fetchData();
  }, [pedidos]); 
  

  const valorTotal = pedidos.reduce((total, item) => total + item.quantidade * item.valorUnitario, 0);

  return (
    <div style={{minHeight:'100vh', display: 'flex',
        flexDirection: 'column'}}>
      <Container style={{ padding:"2rem"}} className="d-flex justify-content-center align-items-center flex-grow-1">
        <Card className="w-75 p-3" style={{ backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <h3 className="font-weight-bold mb-4">PEDIDO</h3>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h5 className="font-weight-bold">Nome do Usuário</h5>
          </div>
          <Table striped bordered hover style={{ color: 'black' }}>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
              </tr>
            </thead>
            <tbody>
              {produtosDoPedido.map((produto, index) => (
                <tr key={produto.id}>
                  <td>{produto.nome}</td>
                  <td>{produto.quantidade}</td>
                  <td>R$ {produto.preco}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
            {pedidos.map((pedido) => (
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
    </div>
  );
};

export default Pedidos;