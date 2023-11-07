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

  const { setProdutos, setProdutosExibidos, produtos, textoPesquisa, setTextoPesquisa, filtroNome, setFiltroNome, usuarioLogado } = useContext(LojaContext);
  const navigate = useNavigate()

  const [textoLogado, setTextoLogado] = useState()

  const getProdutos = async () => {  
    const response = await api.get("/produtos");
    setProdutos(response.data);
    setProdutosExibidos((produtos.filter((prod) => prod.quantidade > 0 )))

    setTextoPesquisa('')
  };

  useEffect(() => {
    if(!usuarioLogado.id == 0){
      handleLogado()
    }else{setTextoLogado('')}
  }, [usuarioLogado]);

  const handleChangeFiltro = (e) => {
    setFiltroNome(e.target.value);
  };

  //tentativa de pesquisa a partir de qualquer rota
  const handleNavigateFiltro = (e) => {
    e.preventDefault()
    navigate('/home')
  }

  const handleLimparPesquisa = async (e) => {
    e.preventDefault()
    setFiltroNome('');
    setTextoPesquisa('');
    await getProdutos();
  }

  const handleLogado = () => {
    setTextoLogado(`Olá ${usuarioLogado.nome}, seja bem vindo!`)
  }


  return (
    <>
      <Navbar style={{backgroundColor: 'SlateBlue', maxHeight:'80px'}} variant="dark" className="justify-content-between">
        <Form inline>
          <div style={{display:'flex'}}>
          <Link style={{ marginRight: "20px" }} to={"/home"}>
            <img style={{maxHeight:'50px'}} src={Logo} />
          </Link>
          </div>
        </Form>
        
        <Form onSubmit={handleNavigateFiltro} inline>
          <Row>
          <Col style={{margin:'20px',fontSize:'12px'}} xs="2">
            <p>{textoLogado}</p>
            
          </Col>
            <Col xs='2'>
              <Link to={"/"}>
                <Navbar.Brand href="#home"><IoPersonCircleOutline style={{marginTop:'20px'}} size={43}/></Navbar.Brand>
              </Link>
            </Col>
            <Col xs="2">
              <Form.Control  style={{marginTop:'24px'}}
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                value={filtroNome}
                onChange={handleChangeFiltro}
              />
            </Col>
            <Col xs="2">
              <Button style={{fontSize:'12px',marginTop:'24px', backgroundColor:'orangered', opacity:'0.9'}} onClick={handleLimparPesquisa}>
                Limpar Pesquisa
              </Button>
              </Col>
              <Col xs='2'>
              <Button style={{fontSize:'12px',marginTop:'24px', marginLeft:'10px', backgroundColor:'BlanchedAlmond', color:'slateblue', fontWeight:'bold'}} onClick={() => {
                navigate('/historico')
              }}>
                Meus Pedidos
              </Button>
              </Col>
              <Col xs='1' style={{marginTop:'15px'}}>
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
