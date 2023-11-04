import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Form, Navbar, Row } from "react-bootstrap";
import { LojaContext } from "../context/LojaContext";
import { api } from "../api/api";
import { FaMagnifyingGlass } from 'react-icons/fa6'

const Header = () => {
  const [filtroNome, setFiltroNome] = useState("");
  const [textoPesquisa, setTextoPesquisa] = useState("")

  const { produtos, setProdutos } = useContext(LojaContext);
  const navigate = useNavigate()

  const getProdutos = async () => {
    const response = await api.get("/produtos");
    setProdutos(response.data);
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

  return (
    <>
      <Navbar bg="primary" variant="dark" className="justify-content-between">
        <Form inline>
          <Link style={{ marginRight: "20px" }} to={"/"}>
            <img src="" />
            LOGO AQUI
          </Link>
          <Link to={"/home"}>
            <Navbar.Brand href="#home">Login</Navbar.Brand>
          </Link>
        </Form>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                onChange={handleChangeFiltro}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" onClick={handleNavigateFiltro}>
                <FaMagnifyingGlass/>
              </Button>
            </Col>
            <Col xs="auto">
              <Button type="submit" variant="danger" onClick={getProdutos}>
                Limpar Pesquisa
              </Button>
            </Col>
            <Col xs="auto">
              <Link to={'/carrinho'}><Button variant="success">🛒</Button></Link>
            </Col>
          </Row>
           <p>{textoPesquisa}</p>
        </Form>
      </Navbar>
    </>
  );
};
export default Header;
