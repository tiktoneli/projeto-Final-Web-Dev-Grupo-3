import { api } from "../../api/api"
import React, { useState, useEffect } from 'react';

const Carrinho = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    const response = api.get('/pedidos') 
      const carrinhoItens = response.itens;
      const carrinhoTotal = response.valorTotal;
      setItems([carrinhoItens]);
      setTotal(carrinhoTotal);

  }, []);

  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <ul>
        {items.map((item) => (
          <li>
            {item.nome} - R$ {item.preco}
          </li>
        ))}
      </ul>
      <p>Total: R$ {total}</p>
    </div>
  );
};

export default Carrinho;