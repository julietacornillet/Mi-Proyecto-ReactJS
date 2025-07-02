import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Modulos from './pages/Modulos';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Books from './pages/Books';
import { CartProvider } from './components/CartContext';
import RutaProtegida from './components/RutaProtegida';
import Admin from './pages/Admin';
import Usuario from './pages/Usuario';
import ComingSoon from './components/ComingSoon';
import 'bootstrap/dist/css/bootstrap.min.css';






function App() {
  const [contador, setContador] = useState(0);

  return (
    <div className="d-flex flex-column min-vh-100">

      <CartProvider>
        <BrowserRouter>
     
          <Helmet>
            <title>Proyecto Julieta Cornillet</title>
            <meta name="description" content="Proyecto desarrollado como parte del curso de React JS en Talento Tech" />
          </Helmet>

          <Header />
          <Nav setContador={setContador} contador={contador} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/modulos' element={<Modulos />} />
            <Route path='/libros' element={<Books />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/usuario/:id' element={<RutaProtegida><Usuario /></RutaProtegida>} />
            <Route path='/admin/:id' element={<RutaProtegida><Admin /></RutaProtegida>} />
            <Route path='/comingSoon' element={<ComingSoon />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

