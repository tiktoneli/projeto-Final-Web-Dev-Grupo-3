import { useEffect, useState } from "react"
import { api } from "../../api/api"
import { useParams } from "react-router-dom"

const Produto = () => {
  const [produto, setProduto] = useState({})
  const { id } = useParams()

  const getProduto = async () => {
      const response = await api.get(`/produtos/${id}`)
      setProduto(response.data)
  }

  useEffect(() => {
      getProduto()
  }, [])

  return (
      <>
        <div>
          <p>Produto: {produto.nome}</p>
          <p />
          <br />
          <p>Descricao: {produto.descricao}</p>
          <br />
          <img src={produto.imgurl} alt="" />
          <p>Likes: {produto.favoritos}</p>
        </div>
      </>
  )
}

export default Produto