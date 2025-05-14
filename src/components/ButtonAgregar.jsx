import React from 'react';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function ButtonAgregar({title, variant, disabled, alt, contador, setContador}) {
  return (
    <Button onClick={()=>setContador(contador+1)} variant={variant} title={title} aria-label={alt} size="sm" disabled={disabled}> <FontAwesomeIcon icon={faCartShopping} size="sm" /></Button>
  );
}

export default ButtonAgregar;