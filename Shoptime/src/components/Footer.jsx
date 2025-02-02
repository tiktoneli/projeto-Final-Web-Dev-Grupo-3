import { Container, Row, Col } from "react-bootstrap";
import { BsInstagram, BsFacebook, BsGithub } from 'react-icons/bs'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container style={{ width: "100vw", backgroundColor: 'SlateBlue', paddingBottom: "11px", fontWeight: 'bold', color: 'BlanchedAlmond' }}>
      <Row>
        <Col md={4}>
          <Container style={{ display: 'flex', justifyContent: 'space-evenly', margin: '1px', paddingTop: '22px', paddingRight: '80px' }}>
            <h4 style={{ paddingTop: '' }}>Redes Sociais</h4>
            <Link to={'https://github.com/tiktoneli/projeto-Final-Web-Dev-Grupo-3'} target={"_blank"}><BsGithub size={30} /></Link>
            <Link to={'https://www.facebook.com'} target={"_blank"}><BsFacebook size={30} /></Link>
            <Link to={'https://www.instagram.com/'} target={"_blank"}><BsInstagram size={30} /></Link>
          </Container>
        </Col>
        <Col style={{ paddingTop: '22px' }} md={1}>
          <h4>Contato</h4>
        </Col>
        <Col style={{ paddingTop: '15px' }} md={3}>
          <a>Telefone: +55(xx)xxxx-xxx9876</a>
          <br />
          <a>Email: contato@gmail.com</a>
        </Col>
        <Col style={{ paddingTop: '22px' }} md={2}>
          <h4>Lojas ShopGrup™</h4>
        </Col>
        <Col style={{ paddingTop: '15px' }} md={2}>

          <a href="https://github.com/tiktoneli/projeto-Final-Web-Dev-Grupo-3" target="_blank" rel="noreferrer">
            Sobre Nós
          </a>
          <br />
          <a href="https://github.com/tiktoneli/projeto-Final-Web-Dev-Grupo-3" target="_blank" rel="noreferrer">
            Políticas de Privacidade
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer;