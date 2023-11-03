import { createContext, useState } from "react";
import { api } from "../api/api";

export const LojaContext = createContext({})

export const LojaProvider = ({children}) => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [usuarios, setUsuarios] = useState([])
  const [pedidos, setPedidos] = useState([])
  const [quantidade, setQuantidade] = useState(0);
  const [produtos, setProdutos] = useState([])

  return(
    <LojaContext.Provider value={{email, setEmail, senha, setSenha, usuarios, setUsuarios, pedidos, setPedidos, produtos, setProdutos, quantidade, setQuantidade}}>{children}</LojaContext.Provider>
  )
}
