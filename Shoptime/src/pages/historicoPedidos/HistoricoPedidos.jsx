import React, { useState, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import CardPedidos from '../../components/CardPedidos';
import { LojaContext } from '../../context/LojaContext';

const HistoricoPedidos = () => {

  const { pedidos, usuarioLogado } = useContext(LojaContext)

  useEffect(() => {
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
            <CardPedidos pedido={pedido} index={index}/>
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default HistoricoPedidos;