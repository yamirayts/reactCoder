
import  'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/Detail/ItemDetailContainer';
import ItemListContainer from './components/List/ItemListContainer';
import Barra from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Carrusel from './components/Carrusel';
import CartContextProvide from './components/context/CartContext';
import CartList from './components/CartList';
import Contacto from './components/Contacto';
import CarruselProd from './components/CarruselProd';

function App() {
  
 return (
    <CartContextProvide>

      <Router>
    
        <Barra/>
    
        <Switch>
      

            <Route exact path="/">
              <Carrusel/>
              <CarruselProd/>
            </Route>

      
            <Route exact path="/productos/:categoryId">
            <ItemListContainer/>
            </Route>



            <Route exact path="/Contacto">
              <Contacto/>
            </Route>


            <Route exact path="/items/:itemId">
              <ItemDetailContainer/> 
              
            </Route>


            <Route exact path="/cart">
            <CartList/>
            </Route>
      
    
      
        </Switch>
          <h6 className="pie">Todos los derechos reservados</h6>
      </Router>

    </CartContextProvide>
    
  );
}

export default App;
