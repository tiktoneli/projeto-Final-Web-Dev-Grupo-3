import { useContext, useEffect, useState } from "react"
import { api } from "../../api/api"
import { useParams } from "react-router-dom"
import { Button, Card, Container, InputGroup } from "react-bootstrap";
import { LojaContext } from "../../context/LojaContext.jsx";

import { FaShoppingCart } from 'react-icons/fa';
import CustomAlertSuccess from '../../components/CustomAlertSuccess.jsx'

  const Produto = () => {
    const [produto, setProduto] = useState({})

    const {setQuantidadeCarrinho, quantidade, setQuantidade, produtosCarrinho, setProdutosCarrinho} = useContext(LojaContext)

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
    CustomAlertSuccess('Produto Adicionado', 'ao carrinho!');
    };
  
    return (
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Container style={{ paddingTop: "0rem", display: "flex", justifyContent: "center" }}>
          <Card style={{ width: "31%", minHeight: "10.5rem" }}>
            <Card.Img
              style={{ marginTop:'10px', height: "40%", maxHeight:'50vh' , objectFit: "contain " }}
              variant="top"
              src={produto.imgurl}
            />
            <hr />
            <Card.Body>
              <Card.Title className="d-flex justify-content-between mb-3" style={{ padding:"10px", marginBottom: "5px" }}>
                {produto.nome}
                <Button
                  onClick={() => {
                    handleLike(produto.id, produto.favoritos);
                  }}
                  variant="link"
                  style={{ color: "red", textDecoration: "none" }}
                >
                 ❤️{produto.favoritos}
                </Button>
              </Card.Title>
              <Card.Text style={{ fontSize: "14px" }}>
                Descrição:
                <br />
                {produto.descricao}
              </Card.Text>
              <Card.Text>
                R$ {produto.preco}
              </Card.Text>
              <div style={{display: "flex"}}>
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
              <Button
                onClick={handleAdicionarCarrinho}
                type="submit"
                className="btn btn-primary mx-1"
              >
                <FaShoppingCart /> 
              </Button>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
    export default Produto;