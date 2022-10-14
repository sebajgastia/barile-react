import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './componentes/pages/Inicio';
import Productos from './componentes/pages/Productos';
import Ubicacion from './componentes/pages/Ubicacion';
import ItemDetailContainer from './componentes/main/ItemDetailContainer';
import ItemListContainer from './componentes/main/ItemListContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/Inicio' element= {<Inicio />}/>
          <Route path='/Productos' element= {<Productos />}/>
          <Route path='/category/:categoryName' element= {<ItemListContainer />}/>
          <Route path='/item/:id' element= {<ItemDetailContainer/>}/>
          <Route path='/Ubicacion' element= {<Ubicacion />}/>
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}


export default App;
