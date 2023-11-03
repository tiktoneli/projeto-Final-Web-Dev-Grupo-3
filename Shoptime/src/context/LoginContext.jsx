import { createContext, useState } from "react";

export const LoginContext = createContext({})

export const LoginProvider = ({children}) => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [usuarios, setUsuarios] = useState([])

  return(
    <LoginContext.Provider value={{email, setEmail, senha, setSenha, usuarios, setUsuarios}}>{children}</LoginContext.Provider>
  )
}