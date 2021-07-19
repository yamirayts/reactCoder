
import {Navbar, Nav, NavDropdown}from 'react-bootstrap'
import CartWidget from './CartWidget'
import logo from "./../img/logo.jpg"


const Barra = () => {
    return(
        <div className="contNav">
            <img className="logo" src={logo} alt="" />
        <div className="barra">
        <Navbar  bg="-transparent" expand="lg">
            <Navbar.Brand href="#home">Miss Atomic Bomb</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Bombs</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Accesorios</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <CartWidget/>
        </div>
        </div>
    )
}

export default Barra