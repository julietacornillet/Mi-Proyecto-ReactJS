import React from 'react';
import { Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


function ButtonContador({suma, resta, contador, setContador}) {
  return (
    <ButtonGroup>
        <Button onClick={()=>setContador(contador+1)} size="sm" variant="outline-success shadow ms-3 py-0 rounded-start-5" title="Sumar" aria-label="Sumar al carrito" className='ml-3'> {suma ?? <FontAwesomeIcon icon={faPlus} />} </Button> 

        <Button onClick={()=>setContador(contador-1)} size="sm" variant="outline-danger shadow py-0 rounded-end-5" title="Quitar" aria-label="Quitar al carrito"> {resta ?? <FontAwesomeIcon icon={faMinus} />} </Button>
    </ButtonGroup>
  );
}

export default ButtonContador;