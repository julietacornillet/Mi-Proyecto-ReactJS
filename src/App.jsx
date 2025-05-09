import React, { useState } from 'react';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Modulos from './components/Modulos';
import Contacto from './components/Contacto';
import Login from './components/Login';
import ComingSoon from './components/ComingSoon';


// listado para modulos
import { modulosList } from './utils/moduloslist';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  // contador modulos carrito
  const [contador, setContador] = useState(0);


  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Header/>
        <Nav setContador={setContador} contador={contador} modulosList={modulosList}/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/modulos' element={<Modulos setContador={setContador} contador={contador} modulosList={modulosList}/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            
            <Route path='/comingSoon' element={<ComingSoon/>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
