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

  const getProdutoFiltrado = async () => {
    try {
      const response = await api.get('/produtos', {
        params: {nome_like: filtroNome}
      });
      setProdutos(response.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  }

  useEffect(() => {
      getProdutos()
  }, [])

  const handleChangeFiltro = (e) => {
    setFiltroNome(e.target.value)
  }

  const handleFiltrar = () => {
     setProdutos(produtos.filter((produto) => produto.quantidade > 0 && produto.nome == filtroNome))
  }
  console.log('produtos AQUI ENXERGA')
  console.log(produtos)
  return (
      <>
        <div>
          {produtos.length}
          <input onChange={handleChangeFiltro} placeholder="Nome do produto"/>
          <button style={{border:'1px solid black'}} onClick={getProdutoFiltrado}>Pesquisar</button>
          <button style={{border:'1px solid black'}} onClick={getProdutos}>Limpar Pesquisa</button>
        </div>
        <div>
          
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

      
        </div>
      </>
  )
}
export default Listagem