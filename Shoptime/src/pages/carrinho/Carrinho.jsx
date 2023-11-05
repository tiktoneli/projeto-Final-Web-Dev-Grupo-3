import React, { useContext, useEffect, useState } from "react";
import { LojaContext } from "../../context/LojaContext";
import { Button, Card, Container, Table } from "react-bootstrap";

const Carrinho = () => {
  const {
    setProdutosCarrinho,
    total,
    setTotal,
    produtosCarrinho,
    usuarioLogado,
  } = useContext(LojaContext);
  const [nomeUsuario, setNomeUsuario] = useState("");

  useEffect(() => {
    setTotal(
      produtosCarrinho.reduce((total, prod) => {
        return total + prod.preco * prod.quantidade;
      }, 0)
    );
    setNomeUsuario(usuarioLogado.nome);
  }, [produtosCarrinho, usuarioLogado]);

  const handleRemoverCarrinho = (nome, preco, quantidade) => {
    const prodCarrinhoFiltrado = produtosCarrinho.filter(
      (prod) => prod.nome !== nome
    );
    setProdutosCarrinho(prodCarrinhoFiltrado);
    alert("Produto removido do carrinho!");

    const valorRemovido = preco * quantidade;
    setTotal(total - valorRemovido);
  };

  const handleSomarTotal = () => {
    produtosCarrinho.map((prod) => {
      setTotal(total + prod.preco * prod.quantidade);
    });
  };

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
                  <td>{produto.quantidade}</td>
                  <td>R$ {produto.preco}</td>
                  <td>R$ {(produto.preco * produto.quantidade).toFixed(2)}</td>
                  <td>
                    <Button
                      onClick={() =>
                        handleRemoverCarrinho(
                          produto.nome,
                          produto.preco,
                          produto.quantidade
                        )
                      }
                    >
                      Remover
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
          <div className="mt-3 d-flex justify-content-end">
            <Button variant="primary">Finalizar Pedido</Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Carrinho;
