import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const socialIconStyle = {
    width: "30px",
    marginRight: "10px",
    marginBottom: "10px",
  };

  return (
    <div style={{ backgroundColor: 'turquoise', padding: "30px" }}>
      <Container>
        <Row>
          <Col md={3}>
            <h4>Redes Sociais</h4>
            <div>
              <a href="https://www.instagram.com/" target="_blank" rel="">
                <img style={socialIconStyle} src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png" alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="">
                <img style={socialIconStyle} src="https://www.svgrepo.com/show/3885/facebook.svg" alt="Facebook" />
              </a>
              <a href="https://github.com/tiktoneli/projeto-Final-Web-Dev-Grupo-3" target="_blank" rel="">
                <img style={{ ...socialIconStyle, width: "30px" }} src="https://www.logo.wine/a/logo/GitHub/GitHub-Wordmark-Logo.wine.svg" alt="GitHub" />
              </a>
            </div>
          </Col>
          <Col md={6}>
            <h4>Contato</h4>
            <p>Telefone: (123) 456-7890</p>
            <p>E-mail: info@shoptime.com</p>
            <p>Endereço: 1234 Elm Street, Cidade FriburgoTerê</p>
          </Col>
          <Col md={3}>
            <h4>Loja Shoptime</h4>
            <a href="/sobre-nos" target="_blank" rel="">
              Sobre Nós
            </a>
            <br />
            <a href="/politicas-de-privacidade" target="_blank" rel="">
              Políticas de Privacidade
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;