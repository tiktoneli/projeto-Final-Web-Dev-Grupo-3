import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/home.jsx';
import Listagem from './pages/listagem/Listagem.jsx';
import Pedidos from './pages/pedidos/pedidos.jsx';
import Produto from './pages/produto/Produto.jsx';
import Carrinho from './pages/carrinho/Carrinho.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home/>,
  },
  {
    path: '/listagem',
    element: <Listagem/>
  },
  {
    path:'/pedidos',
    element: <Pedidos/>
  },
  {
    path:'/produto/:id',
    element:<Produto/>
  },
  {
    path:'/carrinho',
    element:<Carrinho/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)