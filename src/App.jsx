import React, { useState } from 'react';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Modulos from './pages/Modulos';
import Contacto from './pages/Contacto';
import Login from './components/Login';
import Books from './pages/Books';
import ComingSoon from './components/ComingSoon';


// listado para modulos
import { modulosList } from './utils/modulosList';
// css
import 'bootstrap/dist/css/bootstrap.min.css';
// rutas
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  // contador modulos carrito
  const [contador, setContador] = useState(0);


  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Header/>
        <Nav setContador={setContador} contador={contador}/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/modulos' element={<Modulos setContador={setContador} contador={contador} modulosList={modulosList} producto={'Módulo 0'} infoLink={'Material teórico'}/>}/>
            <Route path='/libros' element={<Books contador={contador} setContador={setContador} />}/>
            <Route path='/contacto' element={<Contacto/>}/>
            
            <Route path='/comingSoon' element={<ComingSoon/>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
