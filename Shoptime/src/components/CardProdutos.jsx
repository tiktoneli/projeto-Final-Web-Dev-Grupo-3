import { api } from "../api/api";
import { Link } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";
import { LojaContext } from "../context/LojaContext";
import { useContext } from "react";

const CardProdutos = ({ id, nome, favoritos, imgurl, preco }) => {
  const {
    setProdutos,
    produtosCarrinho,
    setProdutosCarrinho,
  } = useContext(LojaContext);

  const getProdutos = async () => {
    const response = await api.get(`/produtos`);
    setProdutos(response.data);
  };

  const handleLike = async () => {
    await api.patch(`/produtos/${id}`, { favoritos: favoritos + 1 });
    getProdutos();
  };

  const handleAdicionarCarrinho = () => {
    const produtoExistente = produtosCarrinho.find(
      (produto) => produto.id == id
    );

    if (produtoExistente) {
      const produtosAtualizados = produtosCarrinho.map((produto) =>
        produto.id == id
          ? { ...produto, quantidadeCarrinho: produto.quantidadeCarrinho + 1 }
          : produto
      );
      setProdutosCarrinho(produtosAtualizados);
    } else {
      const produtoAdd = {
        id: id,
        nome: nome,
        favoritos: favoritos,
        imgurl: imgurl,
        preco: preco,
        quantidadeCarrinho: 1,
      };
      setProdutosCarrinho([...produtosCarrinho, produtoAdd]);
    }

    alert("Produto adicionado ao carrinho!");
  };

  return (
    <Col key={id}>
      <Card style={{ width: "20rem", margin: "2rem", height: "20rem" }}>
        <Card.Header>
          <Card.Title>{nome}</Card.Title>
        </Card.Header>

        <Card.Body>
          <Card.Img
            style={{ maxHeight: "8rem", objectFit: "contain" }}
            variant="top"
            src={imgurl}
          />
          <Card.Text
            style={{
              position: "absolute",
              bottom: 55,
              right: 10,
              fontSize: "20px",
            }}
          >
            R$ {preco}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link to={`/produto/${id}`} style={{ marginRight: "auto" }}>
            <Button
              style={{ backgroundColor: "slateBlue", borderColor: "slateBlue" }}
            >
              Ver mais
            </Button>
          </Link>

          <Button
            onClick={handleLike}
            style={{
              marginRight: "10px",
              backgroundColor: "GhostWhite",
              borderColor: "GhostWhite",
              color: "black",
            }}
          >
            ❤️{favoritos}
          </Button>
          <Button
            style={{
              backgroundColor: "GhostWhite",
              borderColor: "GhostWhite",
            }}
            onClick={handleAdicionarCarrinho}
          >
            🛒
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProdutos;
