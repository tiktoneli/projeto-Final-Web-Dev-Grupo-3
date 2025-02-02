import PropTypes from "prop-types"
import { createContext, useState } from "react";

export const LojaContext = createContext({})

export const LojaProvider = ({children}) => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [quantidade, setQuantidade] = useState(0)
  const [produtos, setProdutos] = useState([])
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0)
  const [total, setTotal] = useState(0);
  const [produtosExibidos, setProdutosExibidos] = useState([])
  
  const [quantidadeEstoque, setQuantidadeEstoque] = useState(0)
  const [pedidos, setPedidos] = useState([])
  const [produtosCarrinho, setProdutosCarrinho] = useState([])
  const [usuarioLogado, setUsuarioLogado] = useState({})

  const [filtroNome, setFiltroNome] = useState("");
  const [textoPesquisa, setTextoPesquisa] = useState("")

  return(
    <LojaContext.Provider value={{email, setEmail, senha, setSenha, pedidos, setPedidos, produtos, setProdutos, quantidade, setQuantidade, produtosCarrinho, setProdutosCarrinho, usuarioLogado, setUsuarioLogado, quantidadeCarrinho, setQuantidadeCarrinho, total, setTotal, quantidadeEstoque, setQuantidadeEstoque, produtosExibidos, setProdutosExibidos, filtroNome,setFiltroNome, textoPesquisa, setTextoPesquisa}}>{children}</LojaContext.Provider>
  )
}

LojaProvider.propTypes = {
  children: PropTypes.node.isRequired
}