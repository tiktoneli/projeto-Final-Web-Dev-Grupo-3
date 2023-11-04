import { createContext, useState } from "react";
import { api } from "../api/api";

export const LojaContext = createContext({})

export const LojaProvider = ({children}) => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [usuarios, setUsuarios] = useState([])
  const [quantidade, setQuantidade] = useState(0);
  const [produtos, setProdutos] = useState([])
  
  const [pedidos, setPedidos] = useState([])
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState([])
  const [produtosCarrinho, setProdutosCarrinho] = useState([])

  const [usuarioLogado, setUsuarioLogado] = useState('')

  return(
    <LojaContext.Provider value={{email, setEmail, senha, setSenha, usuarios, setUsuarios, pedidos, setPedidos, produtos, setProdutos, quantidade, setQuantidade, quantidadeCarrinho, setQuantidadeCarrinho, produtosCarrinho, setProdutosCarrinho, usuarioLogado, setUsuarioLogado}}>{children}</LojaContext.Provider>
  )
}
