import React from 'react';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function ButtonAgregar({title, variant, disabled, alt, onClick}) {
  return (
    <Button onClick={onClick} variant={variant} title={title} aria-label={alt} size="sm" disabled={disabled}> <FontAwesomeIcon icon={faCartShopping} size="sm" /></Button>
  );
}

export default ButtonAgregar;