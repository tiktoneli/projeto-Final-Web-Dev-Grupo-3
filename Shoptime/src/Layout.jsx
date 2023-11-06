import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Fundo from './assets/Fundo.png'
import './Layout.css'

const Layout = () => {
  return(
    <div style={{minHeight:'100vh', backgroundImage: `url(${Fundo})` , backgroundRepeat: 'no-repeat', display: 'flex',
    flexDirection: 'column'}}>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
export default Layout