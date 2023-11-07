import { createContext, useState } from "react";
import { api } from "../api/api";

export const LojaContext = createContext({})

export const LojaProvider = ({children}) => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [usuarios, setUsuarios] = useState([])
  const [quantidade, setQuantidade] = useState(0)
  const [produtos, setProdutos] = useState([])
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0)
  const [total, setTotal] = useState(0);
  const [produtosExibidos, setProdutosExibidos] = useState([])

  const [textoPesquisa, setTextoPesquisa] = useState("")
  const [filtroNome, setFiltroNome] = useState("");
  
  const [quantidadeEstoque, setQuantidadeEstoque] = useState(0)
  const [pedidos, setPedidos] = useState([])
  const [produtosCarrinho, setProdutosCarrinho] = useState([])
  const [usuarioLogado, setUsuarioLogado] = useState({})

  return(
    <LojaContext.Provider value={{email, setEmail, senha, setSenha, usuarios, setUsuarios, pedidos, setPedidos, produtos, setProdutos, quantidade, setQuantidade, produtosCarrinho, setProdutosCarrinho, usuarioLogado, setUsuarioLogado, quantidadeCarrinho, setQuantidadeCarrinho, total, setTotal, quantidadeEstoque, setQuantidadeEstoque, produtosExibidos, setProdutosExibidos,textoPesquisa,setTextoPesquisa,filtroNome,setFiltroNome}}>{children}</LojaContext.Provider>
  )
}
