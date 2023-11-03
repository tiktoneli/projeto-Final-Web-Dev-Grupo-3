import { createContext, useState } from "react";

export const LogarContext = createContext({})

export const EmailProvider = ({children}) = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  return(
    <LogarContext.Provider value={{email, setEmail, senha, setSenha}}>{children}</LogarContext.Provider>
  )
}