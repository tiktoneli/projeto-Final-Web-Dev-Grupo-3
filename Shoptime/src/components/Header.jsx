import React from "react";
import { Heading, Container, Grid, GridItem } from '@chakra-ui/react'
import{PiShoppingCartSimpleBold} from 'react-icons/pi'
import { Link } from "react-router-dom";
const Header = () => {
  return(<>
    
    <Heading>
        <Container>
            <div style={{display:'flex', backgroundColor:'turquoise'}}>
                <div>
                    <Link to={'/'}>Home</Link>
                </div>
                <div>
                    <Link to={'/carrinho'}><PiShoppingCartSimpleBold/></Link>
                </div>
                <div>
                <Link to={'/listagem'}>Produtos</Link>
                </div>
            </div>
        </Container>
    </Heading>
    
    </>)
}
export default Header