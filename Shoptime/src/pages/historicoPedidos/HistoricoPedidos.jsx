import React, { useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import CardPedidos from '../../components/CardPedidos';
import { LojaContext } from '../../context/LojaContext';
import { useNavigate } from 'react-router-dom';

const HistoricoPedidos = () => {

  const { pedidos, usuarioLogado } = useContext(LojaContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!usuarioLogado.nome){
      alert('Faça o login para ver seus pedidos feitos!')
      navigate('/home')
    }

    fetchPedidos()
  }, []);

  const fetchPedidos = () => {
    
  }
  return (
    <Container fluid className="p-0 vh-100 d-flex flex-column bg-light">
      <Container>
        <h3>{usuarioLogado.nome}: Histórico de Pedidos</h3>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          {pedidos.map((pedido, index) => (
            <CardPedidos pedido={pedido} />
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default HistoricoPedidos;