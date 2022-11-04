import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './componentes/pages/Inicio';
import Productos from './componentes/pages/Productos';
import Ubicacion from './componentes/pages/Ubicacion';
import ItemDetailContainer from './componentes/main/ItemDetailContainer';
import Form from './componentes/Form/Form';
import Cart from './componentes/Cart/Cart'
import Provider from './context/CartContext';





function App() {

  return (
    <div className="App">
      <header className="App-header">
      
    <Provider>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element= {<Inicio />}/>
          <Route path='/inicio' element= {<Inicio />}/>
          <Route path='/Productos' element= {<Productos />}/>
          <Route path='/item/:id' element= {<ItemDetailContainer/>}/>
          <Route path='/Ubicacion' element= {<Ubicacion />}/>
          <Route path='/Form' element= {<Form/>}/>
          <Route path='/Cart' element= {<Cart/>}/> 
          <Route path='/checkout' element= {<Form/>}/> 
        </Routes>
        </BrowserRouter>
    </Provider>
      </header>
    </div>
  );
  
}


export default App;
