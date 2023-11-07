import { useContext, useEffect, useState } from "react";
import { api } from "../../api/api";
import CardProdutos from "../../components/CardProdutos";
import { Container, Row } from "react-bootstrap";
import { LojaContext } from "../../context/LojaContext";
import FundoSem from '../../assets/FundoSem.png'

const Listagem = () => {

  const {produtos, setProdutos, produtosExibidos, setProdutosExibidos, setTextoPesquisa, filtroNome} = useContext(LojaContext)

  const getProdutos = async () => {
      const response = await api.get('/produtos')
      setProdutos(response.data)
      setProdutosExibidos((produtos.filter((prod) => prod.quantidade > 0 )))
  }

  useEffect(() => {
    handleFiltrar()
  }, [filtroNome])

  useEffect(() => {
    getProdutos()
    setProdutosExibidos((produtos.filter((prod) => prod.quantidade > 0 )))
  },[])

  const handleFiltrar = async () => {
    if(!filtroNome == ''){
    const produtosFiltrados = await api.get('/produtos', {
      params: {nome_like: filtroNome}
    })
    setProdutosExibidos(produtosFiltrados.data);
    handleChangeTexto()
  }else{setProdutosExibidos((produtos.filter((prod) => prod.quantidade > 0 )))}
};

  const handleChangeTexto = () => {
    if(!filtroNome == ""){
    setTextoPesquisa(`mostrando resultados para: ${filtroNome}`);
    }else{setTextoPesquisa('')}
  };

  return (
      <div style={{backgroundImage: `url(${FundoSem})`, minHeight:'100vh', display: 'flex',
        flexDirection: 'column'}}>
          
        <Container className="d-flex justify-flex-start flex-wrap" >
          
          {produtosExibidos.map(
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
  )
}
export default Listagem