import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Form, Navbar, Row } from "react-bootstrap";
import { LojaContext } from "../context/LojaContext";
import { api } from "../api/api";
import { FaMagnifyingGlass } from 'react-icons/fa6'
import Logo from '../assets/Logo.png'
import {IoPersonCircleOutline} from 'react-icons/io5'
import Cart from '../assets/Cart.png'

const Header = () => {
  const [filtroNome, setFiltroNome] = useState("");
  const [textoPesquisa, setTextoPesquisa] = useState("")

  const { produtos, setProdutos, pedidos } = useContext(LojaContext);
  const navigate = useNavigate()

  const getProdutos = async (e) => {  
    const response = await api.get("/produtos");
    setProdutos(response.data);
    setTextoPesquisa('')
  };

  useEffect(() => {
    getProdutos();
    setTextoPesquisa('')
  }, []);

  const handleChangeFiltro = (e) => {
    setFiltroNome(e.target.value);
  };

  const handleChangeTexto = () => {
    setTextoPesquisa(`mostrando resultados para: ${filtroNome}`);
  };

  //tentativa de pesquisa a partir de qualquer rota
  const handleNavigateFiltro = async (e) => {
    e.preventDefault()
    navigate('/')
    await handleFiltrar(e)
  }

  const handleFiltrar = async (e) => {
    e.preventDefault();
    const produtosFiltrados = await api.get('/produtos', {
      params: {nome_like: filtroNome}
    })
    handleChangeTexto()
    setProdutos(produtosFiltrados.data);
  };

  const handleLimparPesquisa = async (e) => {
    e.preventDefault()
    setFiltroNome('');
    setTextoPesquisa('');
    await getProdutos();
  }


  return (
    <>
      <Navbar style={{backgroundColor: 'SlateBlue', maxHeight:'80px'}} variant="dark" className="justify-content-between">
        <Form inline>
          <div style={{display:'flex'}}>
          <Link style={{ marginRight: "20px" }} to={"/"}>
            <img style={{maxHeight:'50px'}} src={Logo} />
          </Link>
          </div>
        </Form>
        
        <Form inline>
          <Row>
            <Col xs='auto'>
              <Link to={"/home"}>
                <Navbar.Brand href="#home"><IoPersonCircleOutline style={{marginTop:'20px'}} size={43}/></Navbar.Brand>
              </Link>
            </Col>
            <Col xs="auto">
              <Form.Control  style={{marginTop:'24px'}}
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                value={filtroNome}
                onChange={handleChangeFiltro}
                
              />
            </Col>
            <Col xs="auto">
              <Button style={{marginTop:'29px', backgroundColor:'darkorange', opacity:'0.8'}} type="submit" onClick={handleNavigateFiltro}>
                <FaMagnifyingGlass/>
              </Button>
            </Col>
            <Col xs="auto">
              <Button style={{marginTop:'24px'}} type="submit" variant="danger" onClick={handleLimparPesquisa}>
                Limpar Pesquisa
              </Button>
              <Button style={{marginTop:'24px', marginLeft:'10px'}} variant="danger" onClick={() => {
                navigate('/historico')
                console.log(pedidos)
              }}>
                Histórico
              </Button>
            </Col>
            <Col style={{marginTop:'14px'}} xs="auto">
              <Link to={'/carrinho'}><img style={{maxHeight:'50px'}} src={Cart} /></Link>
            </Col>
          </Row>
           
        </Form>
      </Navbar>
      <p style={{fontSize:'1.3rem' ,textAlign:'center', marginTop:'0', marginBottom:'0px', fontWeight:''}}><em>{textoPesquisa}</em></p>
    </>
  );
};
export default Header;
