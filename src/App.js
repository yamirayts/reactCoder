
import  'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import Barra from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Carrusel from './components/Carrusel';
import CartContextProvide from './components/context/CartContext';
import Cart from './components/Cart';

function App() {
  
 
  return (
    <CartContextProvide>
    <Router>
    
      <Barra/>
    
      <Switch>
      

      <Route exact path="/">
        <Carrusel/>
        <Cart/>
      </Route>

      <Route exact path="/productos/:categoryId">
      <ItemListContainer/>
      </Route>

      <Route exact path="/Contacto">
        <ItemListContainer saludo={"Hola Sr. Thompson"}/>
      </Route>

      <Route exact path="/:itemId">
        <ItemDetailContainer/> 
        
      </Route>

      <Route exact path="/cart">
        <Cart/>
      </Route>
      
    
      
    </Switch>
    
    </Router>
    </CartContextProvide>
  );
}

export default App;
