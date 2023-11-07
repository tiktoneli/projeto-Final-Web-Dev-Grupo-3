import { useContext, useEffect, useState } from "react"
import { api } from "../../api/api"
import { useParams } from "react-router-dom"
import { Button, Card, CardGroup, Container, InputGroup } from "react-bootstrap";
import { LojaContext } from "../../context/LojaContext.jsx";

  const Produto = () => {
    const [produto, setProduto] = useState({})

    const {quantidadeCarrinho, setQuantidadeCarrinho, quantidade, setQuantidade, produtosCarrinho, setProdutosCarrinho} = useContext(LojaContext)

    const { id } = useParams()
  
    const handleLike = () => {
      api.patch(`/produtos/${id}`, { favoritos: produto.favoritos + 1 })
      getProduto()
    }

    const getProduto = async () => {
        const response = await api.get(`/produtos/${id}`)
        setProduto(response.data)
    }
  
    useEffect(() => {
        getProduto()
        setQuantidade(0)
    }, [])

    const handleAumentar = () => {
      setQuantidade(quantidade + 1);
    };
  
    const handleDiminuir = () => {
      if (quantidade > 0) {
        setQuantidade(quantidade - 1);
      }
    };

    const handleAdicionarCarrinho = () => {
      setQuantidadeCarrinho(quantidade)
      const produtoExistente = produtosCarrinho.find((prod) => prod.id == id);
      if (produtoExistente) {
        const produtosAtualizados = produtosCarrinho.map((prod) =>
          prod.id == id ? { ...prod, quantidadeCarrinho: prod.quantidadeCarrinho + quantidade } : prod
        );
        setProdutosCarrinho(produtosAtualizados);
      } else {
        setProdutosCarrinho([...produtosCarrinho, {...produto, quantidadeCarrinho: quantidade}]);
      }
      alert('Produto adicionado ao carrinho!');
    };
  
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <Container style={{ paddingTop: "1.5rem" }}>
      <CardGroup style={{ minHeight: "35rem" }} className="d-flex">
        <Card style={{ width: "70%" }}>
          <Card.Img
            style={{ height: "100%", objectFit: "cover" }}
            variant="top"
            src={produto.imgurl}
          />
        </Card>
        <Card style={{ width: "30%", margin: "0 auto" }}>
    <Card.Title className="d-flex justify-content-between mb-3" style={{ padding:"20px", marginBottom: "10px", borderBottom: "1px solid #ccc" }}>
      {produto.nome}
      <Button
        onClick={() => {
          handleLike(produto.id, produto.favoritos);
        }}
        variant="danger"
      >
        ❤️{produto.favoritos}
      </Button>
    </Card.Title>
    <Card.Body className="d-flex flex-column flex-grow-1">
    <div style={{ marginBottom: 'auto' }}>
      <Card.Text>
        Descrição:
        <br />
        {produto.descricao}
      </Card.Text>
    </div>
    <div style={{ marginTop: 'auto' }}>
      <Card.Text>
        R$ {produto.preco}
      </Card.Text>
    </div>
  </Card.Body>
    <Card.Footer className="d-flex justify-content-between mt-auto" style={{ borderTop: "1px solid #ccc" }}>
      <InputGroup className="mb-1">
        <Button variant="secondary" onClick={handleDiminuir}>
          -
        </Button>
        <span
          className="p-2"
          style={{ backgroundColor: "#6c757d", color: "#FFFFFF" }}
        >
          {quantidade}
        </span>
        <Button variant="secondary" onClick={handleAumentar}>
          +
        </Button>
      </InputGroup>
      <div className="d-flex">
        <button
          onClick={handleAdicionarCarrinho}
          type="submit"
          className="btn btn-primary mx-1"
        >
          Add ao Carrinho
        </button>
      </div>
    </Card.Footer>
  </Card>
  
          </CardGroup>
        </Container>
      </div>
    );
  };
  
  export default Produto;