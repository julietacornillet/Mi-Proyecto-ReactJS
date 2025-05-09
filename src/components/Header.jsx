import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="primary" variant="dark" className="px-3">
      <Navbar.Brand>Comisión 25017</Navbar.Brand>
      <Navbar.Text className="ms-auto">
        <Button as={Link} to='/login' className='border-light'>Administrador <FontAwesomeIcon icon={faCaretRight} className='ms-1'></FontAwesomeIcon></Button>
      </Navbar.Text>
    </Navbar>
  );
}

export default Header;
