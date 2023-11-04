import { useContext, useEffect, useState } from "react";
import { api } from "../../api/api";
import CardProdutos from "../../components/CardProdutos";
import { Container, Row } from "react-bootstrap";
import { LojaContext } from "../../context/LojaContext";

const Listagem = () => {
  const [filtroNome, setFiltroNome] = useState('')

  const {produtos, setProdutos} = useContext(LojaContext)

  const getProdutos = async () => {
      const response = await api.get('/produtos')
      setProdutos(response.data)
  }

  useEffect(() => {
      getProdutos()
  }, [])

  return (
      <>
            <Container className="d-flex justify-content-between" >
          {produtos.map(
              ({  id, nome, preco, quantidade, descricao, favoritos, imgurl}) => (
                <Row key={id} xs={id} md={3} className="g-4">
                  <CardProdutos
                      
                      nome={nome}
                      descricao={descricao}
                      id={id}
                      getProdutos={getProdutos}
                      favoritos={favoritos}
                      quantidade={quantidade}
                      preco={preco}
                      imgurl={imgurl}                
                  />
                </Row>
              )
          )}
            
          </Container>   

      </>
  )
}
export default Listagem