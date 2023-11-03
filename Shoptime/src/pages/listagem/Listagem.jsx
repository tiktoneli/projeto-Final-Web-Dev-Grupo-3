import { useEffect, useState } from "react";
import { api } from "../../api/api";
import CardProdutos from "../../components/CardProdutos";

const Listagem = () => {
  const [produtos, setProdutos] = useState([])

  const getProdutos = async () => {
      const response = await api.get('/produtos')
      setProdutos(response.data)
  }

  useEffect(() => {
      getProdutos()
  }, [])

  return (
      <>
      <div>
      {produtos.map(
          ({  id, nome, preco, quantidade, descricao, favoritos, imgurl}) => (
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
              
          )
      )}
      </div>
      </>
  )
}

export default Listagem