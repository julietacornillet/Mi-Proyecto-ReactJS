import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

function Header() {

    const navigate = useNavigate();
  
    const isAuth = localStorage.getItem('auth') === 'true';
  
    const cerrarSesion = () => 
      {
      localStorage.removeItem('auth');
      navigate('/login');
    };

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="px-md-5 px-4">
      <Navbar.Brand>Comisión 25017</Navbar.Brand>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">          
        {/* si soy usuario Auth muestro los links con botones login / logout */}
            {isAuth && (
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/usuario/usuario123">Usuario</Nav.Link>
                <Nav.Link as={Link} to="/admin/usuario123">Administrador</Nav.Link>
              </Nav>
            )}

            {/* botón de login / logout */}
            <Nav className="ms-auto">
            {!isAuth ? (
              <Button as={Link} to='/login' className='border-light'>Iniciar sesión <FontAwesomeIcon icon={faCaretRight} className='ms-1'/></Button>
            ) : (
              <Button variant="danger" onClick={cerrarSesion}>Cerrar sesión <FontAwesomeIcon icon={faTimesCircle} className='me-1'/></Button>
              )}          
              </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
