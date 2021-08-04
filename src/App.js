
import  'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import Barra from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Carrusel from './components/Carrusel';
import CartContextProvide from './components/context/CartContext';

function App() {
  
 
  return (
    <CartContextProvide>
    <Router>
     
      <Barra/>
      <Switch>
      
      <Route exact path="/">
        <Carrusel/>
        
      </Route>
      <Route exact path="/productos/:categoryId">
      <ItemListContainer/>
      </Route>
      <Route path="/Contacto">
        <ItemListContainer saludo={"Hola Sr. Thompson"}/>
      </Route>
      <Route exact path="/:itemId">
        <ItemDetailContainer/> 
      </Route>

      
    
      
    </Switch>
    
    </Router>
    </CartContextProvide>
  );
}

export default App;
