
import {Navbar, Nav, NavDropdown}from 'react-bootstrap'
import CartWidget from './CartWidget'


const Barra = () => {
    return(
        <div className="barra">
        <Navbar  bg="-transparent" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Bicicletas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Accesorios</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <CartWidget/>
        </div>
    )
}

export default Barra