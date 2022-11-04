import CartWidget from './CartWidget'; 
import {Navbar,Container,Nav, NavbarBrand} from 'react-bootstrap'
import '../App.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';



const NavBar = () => {
  
  const {CantidadProductos} = useContext(CartContext)
  
    return (
      <div>
        <Navbar className='nav' bg="dark" variant="dark">
          <Container>
            <Link to='/Inicio'>
            <NavbarBrand className='titulo'>FABRICA BARILE</NavbarBrand>
            </Link>
            <Nav className="me-auto">
              <Link className='product' to='/Productos'>Productos</Link>
              <Link className='ubi-env' to='/Ubicacion'>Ubicacion&Envios</Link>
            </Nav>
            <div className='carro'>
    
            <CartWidget />
            </div>
            <span className='point'> {CantidadProductos()} </span>
            
          </Container>
        </Navbar>
      </div>
    );
  }

  

export default NavBar

