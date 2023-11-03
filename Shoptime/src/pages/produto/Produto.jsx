import { useContext, useEffect, useState } from "react"
import { api } from "../../api/api"
import { useParams } from "react-router-dom"
import { Button, Card, CardGroup, Container, InputGroup } from "react-bootstrap";
import { LojaContext } from "../../context/LojaContext.jsx";

  const Produto = () => {
    const [produto, setProduto] = useState({})

    const {quantidade, setQuantidade} = useContext(LojaContext)

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
    }, [])

    const handleAumentar = () => {
      setQuantidade(quantidade + 1);
    };
  
    const handleDiminuir = () => {
      if (quantidade > 0) {
        setQuantidade(quantidade - 1);
      }
    };
  
    return (
      <Container style={{ paddingTop:"1.5rem"}}>
        <CardGroup style={{ minHeight:"35rem"}}>
          <Card>
            <Card.Img style={{height:'40vh', width:'30vw'}} variant="top" src={produto.imgurl} />
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="d-flex justify-content-between">
                {produto.nome}
                <Button onClick={() => {
                  handleLike(produto.id, produto.favoritos)
                }} variant="danger">❤️{produto.favoritos}</Button>
              </Card.Title>
              <Card.Text>
                R$ {produto.preco}
                <br />
                {produto.descricao}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <InputGroup className="mb-1">
                <Button variant="secondary" onClick={handleDiminuir}>
                  -
                </Button>
                <span className="p-2" style={{backgroundColor:"#6c757d", color:"#FFFFFF" }} >{quantidade}</span>
                <Button variant="secondary" onClick={handleAumentar}>
                  +
                </Button>
              </InputGroup>
              <div className="d-flex">
                <button type="submit" className="btn btn-primary mx-1">
                  Add ao Carrinho
                </button>
              </div>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    );
  };
  
  export default Produto;