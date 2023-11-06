import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Listagem from './pages/listagem/Listagem.jsx';
import Cadastro from './pages/cadastro/Cadastro.jsx';
import Produto from './pages/produto/Produto.jsx';
import Carrinho from './pages/carrinho/Carrinho.jsx';
import Home from './pages/home/Home.jsx';
import Layout from './Layout.jsx';

import { ChakraProvider } from '@chakra-ui/react'
import { LojaProvider } from './context/LojaContext.jsx';
import FundoSem from '../src/assets/FundoSem.png'
import HistoricoPedidos from './pages/historicoPedidos/HistoricoPedidos.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
      {
         index: true, element: <Listagem /> 
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path:'/produto/:id',
        element:<Produto/>
      },
      {
        path:'/carrinho',
        element:<Carrinho/>
      },
      {
        path:'/historico',
        element:<HistoricoPedidos/>
      },
      {
        path:'/cadastro',
        element:<Cadastro/>
      }
    ]
  }])

ReactDOM.createRoot(document.getElementById('root')).render(

    <LojaProvider>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </LojaProvider>

)