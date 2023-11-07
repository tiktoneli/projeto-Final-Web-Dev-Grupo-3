import React, { useContext, useEffect, useState } from "react";
import { LojaContext } from "../../context/LojaContext";
import { Button, Card, Container, Table } from "react-bootstrap";
import { api } from "../../api/api";
import {GoTrash} from 'react-icons/go'
import { useNavigate } from "react-router-dom";

const Carrinho = () => {

  const navigate = useNavigate()

  const {
    setProdutosCarrinho,
    total,
    setTotal,
    produtosCarrinho,
    usuarioLogado,
    produtos,
    setPedidos,
    pedidos
  } = useContext(LojaContext);
  const [nomeUsuario, setNomeUsuario] = useState("");
  useEffect(() => {
    fetchPedidos(usuarioLogado.id)
  }, [])
  useEffect(() => {
    setTotal(
      produtosCarrinho.reduce((total, prod) => {
        return total + prod.preco * prod.quantidadeCarrinho;
      }, 0)
    );
    setNomeUsuario(usuarioLogado.nome);
  }, [produtosCarrinho, usuarioLogado]);

  const handleRemoverCarrinho = (nome, preco, quantidadeCarrinho) => {
    const prodCarrinhoFiltrado = produtosCarrinho.filter(
      (prod) => prod.nome !== nome
    );
    setProdutosCarrinho(prodCarrinhoFiltrado);
    alert("Produto removido do carrinho!");

    const valorRemovido = preco * quantidadeCarrinho;
    setTotal(total - valorRemovido);
  };

  const handleFinalizarPedido = async () => {
    if(!usuarioLogado.id == 0){
      if(!produtosCarrinho.length == 0){

    const prod = produtosCarrinho.map(({ id, quantidadeCarrinho }) => ({ idProduto: id, quantidade: quantidadeCarrinho }));

    const date = new Date();
    const dataAtual = date.toLocaleDateString("pt-BR");

    const novoPedido = 
    {
      dataPedido:dataAtual,
      valorTotal:total,
      idUser:usuarioLogado.id,
      itens:prod
    }

    await api.post('/pedidos', novoPedido)
    handleDiminuirEstoque()
    alert('Compra realizada com sucesso! Pode ver os detalhes do pedido no seu perfil!')
    pedidos.push(novoPedido)
    handleEsvaziarCarrinho()
    }else{alert('Adicione um produto ao carrinho antes de finalizar o pedido!')}
  }else{alert('Por favor, realize o login para finalizar o pedido')}
    fetchPedidos()
    navigate('/historico')
  }

  const handleEsvaziarCarrinho = () => {
    setProdutosCarrinho([])
  }

  const handleDiminuirEstoque = async () => {
    //um map dentro do outro, pra cada produto da loja, checa se é igual a cada produto do carrinho, se for, faz um patch
    produtos.map((produto) => {
      produtosCarrinho.map(async (prodCarrinho) => {
        if (prodCarrinho.id == produto.id){
        await api.patch(`/produtos/${produto.id}`, {quantidade: produto.quantidade - prodCarrinho.quantidadeCarrinho})
        }
      })  
    });
  }

  const fetchPedidos = async (id) => {
    if (usuarioLogado){
      const response = await api.get('/pedidos', {
        params: {idUser: usuarioLogado.id}
      })
      setPedidos(response.data);
    }
  }
  
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Container
        style={{ padding: "2rem" }}
        className="d-flex justify-content-center align-items-center flex-grow-1"
      >
        <Card
          className="w-75 p-3"
          style={{
            backgroundColor: "white",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 className="font-weight-bold mb-4">Carrinho de Compras</h3>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h5 className="font-weight-bold">Nome do Usuário: {nomeUsuario}</h5>
          </div>
          <Table striped bordered hover style={{ color: "black" }}>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
                <th>Sub Total</th>
                <th>Remover item</th>
              </tr>
            </thead>
            <tbody>
              {produtosCarrinho.map((produto) => (
                <tr>
                  <td>{produto.nome}</td>
                  <td>{produto.quantidadeCarrinho}</td>
                  <td>R$ {produto.preco}</td>
                  <td>R$ {(produto.preco * produto.quantidadeCarrinho).toFixed(2)}</td>
                  <td>
                    <Button style={{backgroundColor:"BlanchedAlmond", marginLeft:'40px'}}
                      onClick={() =>
                        handleRemoverCarrinho(
                          produto.nome,
                          produto.preco,
                          produto.quantidade
                        )
                      }
                    >
                      <GoTrash size={20} color="slateBlue "/>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <br />
            <tfoot>
              <tr>
                <td colSpan="4" className="text-end font-weight-bold">
                  Valor Total
                </td>
                <td className="font-weight-bold">R$ {total.toFixed(2)}</td>
              </tr>
            </tfoot>
          </Table>
          <div style={{display:"flex", justifyContent:'center', gap:'20px'}}>
            <div className="mt-3 d-flex justify-content-end">
              <Button onClick={handleFinalizarPedido} style={{backgroundColor:'slateblue'}}>Finalizar Pedido</Button>
            </div>
            <div className="mt-3 d-flex justify-content-end">
              <Button onClick={handleEsvaziarCarrinho} style={{backgroundColor:'chocolate' }}>Esvaziar Carrinho</Button>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Carrinho;
