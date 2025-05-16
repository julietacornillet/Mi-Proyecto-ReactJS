
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import {Nav as MenuNav, Navbar, NavDropdown} from 'react-bootstrap';
import ButtonCarrito from './ButtonCarrito';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';


function Nav({contador, setContador}) {
  // console.log(modulosList);
  
  // offCanvas navbar
  const [offcanvasShow, mostrarOffCanvas] = useState(false);

  // modal finalizar carrito
  const [modalShow, mostrarModal] = useState(false); 

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light" className="shadow sticky-top">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand as={Link} to="/" className='fw-bolder text-black d-flex align-items-center'>ReactShop<FontAwesomeIcon icon={faReact} className="text-info mx-1" size='2x'/>Juli</Navbar.Brand>

        {/* botón carrito small */}
        <div className='d-lg-none d-md-none'>
          <ButtonCarrito contador={contador} setContador={setContador} mostrarOffCanvas={mostrarOffCanvas} mostrarModal={mostrarModal} modalShow={modalShow} offcanvasShow={offcanvasShow} />
        </div>{/* fin botón carrito small */}

        <Navbar.Collapse id="responsive-navbar-nav">
          <MenuNav className="ms-auto">
            
            <MenuNav.Link as={Link} to='/'>Inicio</MenuNav.Link>
            <MenuNav.Link as={Link} to='/modulos'>Módulos</MenuNav.Link>
            <MenuNav.Link as={Link} to='/libros'>Libros</MenuNav.Link>

            <NavDropdown title="Documentación" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="https://aulasvirtuales.bue.edu.ar/login/index.php" target='_blank'>Plataforma virtual</NavDropdown.Item>
              <NavDropdown.Item href="https://www.youtube.com/playlist?list=PLPhAjoBgoPidSKXDsJO27RKDXoYDH2fC0" target='_blank'>Clases grabadas</NavDropdown.Item>
              <NavDropdown.Item href="https://react.dev/" target='_blank'>Documentación React</NavDropdown.Item>
              <NavDropdown.Item href="https://gamma.app/docs/React-JS-Clase-2-96cn3lmtklm5ejz?mode=doc" target='_blank'>Guía de Props</NavDropdown.Item>
              <NavDropdown.Item href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises" target='_blank'>Guía introductoria a las promesas de JavaScript</NavDropdown.Item>
              <NavDropdown.Item href="https://www.freecodecamp.org/espanol/news/tutorial-de-react-router-version-6-como-navegar-a-otros-componentes-y-configurar-un-enrutador/" target='_blank'>React Router - Guía para principiantes</NavDropdown.Item>
              <NavDropdown.Item href="https://mockapi.io/" target='_blank'>MockAPI: Plataforma de simulación de datos</NavDropdown.Item>                    
                <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/nmfernandez1982/Talento-React-2025-1/tree/main" target='_blank'>Repositorio GIT</NavDropdown.Item>
            </NavDropdown>
        
            <MenuNav.Link as={Link} to='/contacto'>Contacto</MenuNav.Link>

            {/* carrito botón medium */}
            <MenuNav.Item>
              <div className='d-none d-md-block d-lg-block'>
                <ButtonCarrito contador={contador} setContador={setContador} mostrarOffCanvas={mostrarOffCanvas} mostrarModal={mostrarModal} modalShow={modalShow} offcanvasShow={offcanvasShow}/>
              </div>
            </MenuNav.Item> {/* fin carrito medium */}
            
          </MenuNav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
