import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {BsInstagram, BsFacebook, BsGithub} from 'react-icons/bs'
import { Link } from "react-router-dom";

const Footer = () => {
  const socialIconStyle = {
    width: "30px",
    marginRight: "10px",
    marginBottom: "10px",
  };

  return (
    <div style={{ backgroundColor: 'SlateBlue', paddingBottom: "11px",fontWeight:'bold', color:'BlanchedAlmond' }}>
      <div>
        <Row>
          <Col md={4}>
            <div style={{display:'flex', justifyContent:'space-evenly', margin:'1px', paddingTop:'22px', paddingRight:'80px'}}>
            <h4 style={{ paddingTop:''}}>Redes Sociais</h4>
              <Link to={'https://github.com/tiktoneli/projeto-Final-Web-Dev-Grupo-3'}target={"_blank"}><BsGithub size={30}/></Link>
              <Link to={'www.facebook.com'}target={"_blank"}><BsFacebook size={30}/></Link>
                <Link to={'https://www.instagram.com/'} target={"_blank"}><BsInstagram size={30}/></Link>
            </div>
          </Col>
          <Col style={{paddingTop:'22px'}} md={1}>
            <h4>Contato</h4>
          </Col>
          <Col style={{paddingTop:'15px'}} md={3}>
            <a>Telefone: +55(xx)xxxx-xxx9876</a>
            <br />
            <a>Email: contato@gmail.com</a>
          </Col>
          <Col style={{paddingTop:'22px'}} md={2}>
            <h4>Lojas ShopGrup™</h4>
          </Col>
          <Col style={{paddingTop:'15px'}} md={2}>

            <a href="https://github.com/tiktoneli/projeto-Final-Web-Dev-Grupo-3" target="_blank" rel="">
              Sobre Nós
            </a>
            <br />
            <a href="https://github.com/tiktoneli/projeto-Final-Web-Dev-Grupo-3" target="_blank" rel="">
              Políticas de Privacidade
            </a>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer;