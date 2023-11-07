import "bootstrap/dist/css/bootstrap.min.css";

import { api } from "../api/api";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

import { useContext, useEffect } from "react";
import { LojaContext } from "../context/LojaContext";
import { useNavigate } from "react-router-dom";

const CardLogin = () => {
    const {setPedidos, usuarioLogado, email, senha, setEmail, setSenha, setUsuarios, setUsuarioLogado} = useContext(LojaContext)

    const navigate = useNavigate()

  useEffect(() => {
    getUsuarios()
  }, [])

  const getUsuarios = async () => {
    const response = await api.get('/users')
    setUsuarios(response.data)
  }

  const handleLogarReq = async (e) => {
    e.preventDefault()
    getUsuarios()
    const response = await api.get('/users', {
      params: {email: email, senha: senha}
      
    })
    setUsuarioLogado(response.data[0])

    if(response.data[0]==undefined){
      alert('usuario ou senha invalidos!')
    }else{ 
      const id = response.data[0].id
      fetchPedidos(id)
      alert('Usuário logado com sucesso!')
      navigate('/home')
  }
  }

  const handleNavigateCadastro = () => {
    navigate("/cadastro")
  }

  const fetchPedidos = async (id) => {
    if (usuarioLogado){
      const response = await api.get('/pedidos', {
        params: {idUser: id}
      })
      setPedidos(response.data);
    }
  }

    return(
    <Container className="d-flex justify-content-center align-items-center vh-100" >
    <Card border="primary" style={{ width: "25rem" }}>
      <Card.Header>Login</Card.Header>
      <Card.Body>
        <Form onSubmit={((e) => {
          handleLogarReq(e);
        })} style={{alignItems: "center"}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control value={email} type="email" placeholder="Email" required onChange={(e) => {
              setEmail(e.target.value)
            }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control value={senha} type="password" placeholder="Senha" required onChange={(e) => {
              setSenha(e.target.value)
            }} />
          </Form.Group>
          <div style={{display:'flex',justifyContent:'space-around'}}>
          <Button variant="info" type="submit">
            Login
          </Button>
          <Button variant="success" onClick={handleNavigateCadastro}>
            Cadastre-se
          </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  </Container>
    )
}

export default CardLogin