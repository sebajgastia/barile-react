import CartWidget from './CartWidget'; 
import {Navbar,Container,Nav, NavbarBrand} from 'react-bootstrap'
import '../App.css'
import {Link} from 'react-router-dom'



function NavBar() {
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
            <p className='point'>0</p>
          </Container>
        </Navbar>
      </div>
    );
  }
export default NavBar

