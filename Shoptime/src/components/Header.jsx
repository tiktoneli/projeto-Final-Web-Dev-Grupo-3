import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Form, Navbar, Row } from "react-bootstrap";
import { LojaContext } from "../context/LojaContext";

const Header = () => {
  const [filtroNome, setFiltroNome] = useState("");

  const { produtos, setProdutos } = useContext(LojaContext);

  const getProdutos = async () => {
    const response = await api.get("/produtos");
    setProdutos(response.data);
  };

  useEffect(() => {
    getProdutos();
  }, []);

  const handleChangeFiltro = (e) => {
    setFiltroNome(e.target.value);
  };

  const handleFiltrar = (e) => {
    e.preventDefault();
    const produtosFiltrados = produtos.filter(
      (produto) =>
        produto.quantidade > 0 &&
        produto.nome.toLowerCase().includes(filtroNome.toLowerCase())
    );
    setProdutos(produtosFiltrados);
  };  

  return (
    <>
      <Navbar
        style={{ padding: "10px" }}
        data-bs-theme="secondary"
        className="bg-primary bg-body-tertiary justify-content-between"
      >
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
              <Button type="submit" onClick={handleFiltrar}>
                Pesquisar
              </Button>
            </Col>
            <Col xs="auto">
              <Button type="submit" variant="danger" onClick={getProdutos}>
                Limpar Pesquisa
              </Button>
            </Col>
            <Col xs="auto">
              <Button
                variant="success"
                onClick={() => (window.location.href = "/carrinho")}
              >
                🛒
              </Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
    </>
  );
};
export default Header;
