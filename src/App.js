
import  'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import Barra from './components/NavBar';

function App() {
  
 
  return (
    <div>
    <Barra/>
    <ItemListContainer saludo={"Hola Sr. Thompson"}/>
    </div>
  );
}

export default App;
