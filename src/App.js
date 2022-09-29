import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContaine';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting='Bienvenidos a FABRICA DE HELADOS BARILE' />
        
      </header>
    </div>
  );
}

export default App;
