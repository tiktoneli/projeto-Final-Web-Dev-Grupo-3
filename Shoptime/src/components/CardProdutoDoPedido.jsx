import { useContext, useEffect, useState } from "react";
import { LojaContext } from "../context/LojaContext";

const CardProdutoDoPedido = () => {

    const [produtosDoPedido, setProdutosDoPedido] = useState([]);

    const {produtos, itens} = useContext(LojaContext)

    useEffect(() => {
        fetchProdutosDoPedido()
    },[])

    const fetchProdutosDoPedido = () => {
        itens.map((item) => {
            produtos.map((produto) => {
                const prodEncontrado = (() => item.idProduto == produto.id)
                if(prodEncontrado){
                setProdutosDoPedido([...produtosDoPedido, {nome:produto.nome, quantidade:item.quantidade, preco:produto.preco}])
            }
            })
        })
    }

  return(
    produtosDoPedido.map((produto) => (
        
        <tr key={produto.id}>
          <td>{produto.nome}</td>
          <td>{produto.quantidade}</td>
          <td>R$ {produto.preco}</td>
        </tr>
      ))
  )
}

export default CardProdutoDoPedido