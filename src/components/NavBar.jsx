
import {Navbar, Nav, NavDropdown}from 'react-bootstrap'
import CartWidget from './CartWidget'
import logo from "./../img/logo.jpg"
import { Link } from 'react-router-dom';


const Barra = () => {

    return(
        
        <div className="contNav container">
            <div className="cabezal container">
            <img 

                className="logo row" 
                src={logo} alt="" 

                />
            
            </div>
            <Navbar.Brand className="row missAtomic" href={"/"}> Miss Atomic Bomb</Navbar.Brand>
            

            <div className="barra">

                <Navbar  bg="-transparent" expand="lg">
                   
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="col-5" id="basic-navbar-nav">
                        <Nav className="m-auto">
                       <Link to={"/"}>Home</Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item ><Link to={"/productos/bombs"}>Bombs</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={"/productos/Accesorios"}>Accesorios</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Link to={"/Contacto"}>Contacto</Link>
                        </Nav>
                    </Navbar.Collapse>
                    
                </Navbar>
                
                <CartWidget className="col-3"/>
                
             </div>
        </div>

    )
}

export default Barra