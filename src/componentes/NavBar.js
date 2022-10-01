import CartWidget from './CartWidget'; 
import {Navbar,Container,Nav} from 'react-bootstrap'
import '../App.css'


function NavBar() {
    return (
      <div>
        <Navbar className='nav' bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#" className='titulo'>FABRICA BARILE</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className='home' href="#">Inicio</Nav.Link>
              <Nav.Link className='product' href="#">Productos</Nav.Link>
              <Nav.Link className='ubi-env' href="#">Ubicacion&Envios</Nav.Link>
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

