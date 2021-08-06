
import {Navbar, Nav, NavDropdown}from 'react-bootstrap'
import CartWidget from './CartWidget'
import logo from "./../img/logo.jpg"
import { Link } from 'react-router-dom';


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
                <Nav.Link > <Link to={"/"}>Home</Link></Nav.Link>
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item ><Link to={"/productos/bombs"}>Bombs</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to={"/productos/Accesorios"}>Accesorios</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link >Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <CartWidget/>
        </div>
        </div>
    )
}

export default Barra