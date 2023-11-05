import React, { useContext, useEffect } from 'react';
import { LojaContext } from "../../context/LojaContext";
import { Button } from "react-bootstrap";

const Carrinho = () => {

  const {setProdutosCarrinho, total, setTotal, produtosCarrinho, usuarioLogado} = useContext(LojaContext)

  useEffect(() => {
    setTotal(0)
    handleSomarTotal()
  },[])

  const handleRemoverCarrinho = (nome) => {
    const prodCarrinhoFiltrado = produtosCarrinho.filter((prod) => prod.nome != nome)
    setProdutosCarrinho(prodCarrinhoFiltrado)
    alert('Produto removido do carrinho!')
    handleDiminuirTotal(prodCarrinhoFiltrado)
  }

  const handleSomarTotal = () => {
    produtosCarrinho.map((prod) => {
      setTotal(total+(prod.preco * prod.quantidade))
    })
  }

  const handleDiminuirTotal = (prodExcl) => {
    const prodCarrinhoRemover = produtosCarrinho.filter((prod) => prodExcl.nome == prod.nome)
    console.log(prodCarrinhoRemover.nome)
    console.log(prodExcl.nome)
    setTotal(total-(prodCarrinhoRemover.preco * prodCarrinhoRemover.quantidade))
  }

  return (
    <div style={{minHeight:'100vh', display: 'flex',
    flexDirection: 'column'}}>
      <h1>Carrinho de Compras</h1>
      <ul>
        {produtosCarrinho.map((prod) => (
          <li>
            <p>Nome: {prod.nome}</p>
            <p>Quantidade: {prod.quantidade}</p>
            <p>R$ {(prod.preco * prod.quantidade).toFixed(2)}</p>
            <Button onClick={() => {
              handleRemoverCarrinho(prod.nome)
            }}>Remover</Button>
          </li>
        ))}
      <p>Total: R$ {total}</p>
      </ul>
    </div>
  );
};

export default Carrinho;