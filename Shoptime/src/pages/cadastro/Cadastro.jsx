import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { useContext, useState } from "react";
import { LojaContext } from "../../context/LojaContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import CustomAlertSuccess from "../../components/CustomAlertSuccess";

const Cadastro = () => {
  const {email, setEmail, senha, setSenha} = useContext(LojaContext);
  const [nome, setNome] = useState('')

  const {setUsuarios} = useContext(LojaContext)

  const navigate = useNavigate()

  const handleCasdastrarNovoUsuario = async (e) => {
    e.preventDefault()
    const novoCadastro = {
      nome: nome,
      email: email,
      senha: senha  
    }
    await api.post('/users', novoCadastro)
  //  alert('Usuário cadastrado com sucesso!')
    CustomAlertSuccess('Usuário cadastrado', 'com sucesso!')
    navigate('/')
    setEmail('')
    setSenha('')
    setNome('')
    getUsuarios()
  }

  const getUsuarios = async () => {
    const response = await api.get('/users')
    setUsuarios(response.data)
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
            <Form style={{alignItems: "center"}} onSubmit={handleCasdastrarNovoUsuario} >
            <Form.Group className="mb-3" controlId="formBasicNome">
                <Form.Label >Nome</Form.Label>
                <Form.Control required onChange={handleChangeNome} type="text" placeholder="Nome Completo" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label >Email</Form.Label>
                <Form.Control required onChange={handleChangeEmail} type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label >Senha</Form.Label>
                <Form.Control required onChange={handleChangeSenha} type="password" placeholder="Senha" />
              </Form.Group>
              <div style={{display:'flex', justifyContent:'right'}}>
                <Button variant="info" type="submit" >
                 Cadastrar
                </Button>
           </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Cadastro;