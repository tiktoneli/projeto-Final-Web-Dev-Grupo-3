import "bootstrap/dist/css/bootstrap.min.css";

import { api } from "../api/api";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

import { useContext } from "react";
import { LojaContext } from "../context/LojaContext";

const CardLogin = () => {
    const {email, senha, setEmail, setSenha, usuarios, setUsuarios} = useContext(LojaContext)

  const handleLimpar = () => {
    setEmail("");
    setSenha("")
  }

  const getUsuarios = async () => {
    const response = await api.get('/users')
    setUsuarios(() => {
      return [...response.data]
    })
  }
    const handleLogar = async (e) => {
      e.preventDefault()
      const response = await getUsuarios()
      if(email==usuarios.email && senha == usuarios.senha){
        alert('logado com sucesso!')
      }
      alert(`${email}, ${senha}`)
      handleLimpar()
    }

    return(
    <Container className="d-flex justify-content-center align-items-center vh-100" >
    <Card border="primary" style={{ width: "25rem" }}>
      <Card.Header>Login</Card.Header>
      <Card.Body>
        <Form onSubmit={((e) => {
          handleLogar(e);
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
          <Button variant="info" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
      
    </Card>
  </Container>
    )
}

export default CardLogin