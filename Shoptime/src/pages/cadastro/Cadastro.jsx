import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { useContext, useState } from "react";
import { LojaContext } from "../../context/LojaContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const {email, setEmail, senha, setSenha} = useContext(LojaContext);
  const [nome, setNome] = useState('')

  const navigate = useNavigate()

  const handleCasdastrarNovoUsuario = async () => {

    const novoCadastro = {
      nome: nome,
      email: email,
      senha: senha  
    }
    await api.post('/users', novoCadastro)
    alert('Usuário cadastrado com sucesso!')
    navigate('/home')
    setEmail('')
    setSenha('')
    setNome('')
  }

  const handleChangeNome = (e) => {
    setNome(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangeSenha = (e) => {
    setSenha(e.target.value)
  }
  
  return (
    <div style={{minHeight:'100vh', display: 'flex',
        flexDirection: 'column'}}>
      <Container className="d-flex justify-content-center align-items-center vh-100" style={{ padding: 0, margin: 0 }}>
        <Card border="primary" style={{ width: "40rem" }}>
          <Card.Header>Cadastro</Card.Header>
          <Card.Body>
            <Form style={{alignItems: "center"}} >
            <Form.Group className="mb-3" controlId="formBasicNome">
                <Form.Label >Nome</Form.Label>
                <Form.Control onChange={handleChangeNome} type="Nome" placeholder="Nome Completo" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label >Email</Form.Label>
                <Form.Control onChange={handleChangeEmail} type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label >Senha</Form.Label>
                <Form.Control onChange={handleChangeSenha} type="password" placeholder="Senha" />
              </Form.Group>
            </Form>
          </Card.Body>
          <Button variant="info" onClick={handleCasdastrarNovoUsuario}>
            Cadastrar
          </Button>
        </Card>
      </Container>
    </div>
  );
};

export default Cadastro;