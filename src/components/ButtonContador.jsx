import React from 'react';
import { Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


function ButtonContador({iconoSuma, iconoResta, contador, setContador}) {

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <ButtonGroup>
        <Button onClick={sumar} size="sm" variant="outline-success shadow ms-3 py-0 rounded-start-5" title="Sumar" aria-label="Sumar al carrito" className='ml-3'> {iconoSuma ?? <FontAwesomeIcon icon={faPlus} />} </Button> 

        <Button onClick={restar} size="sm" variant="outline-danger shadow py-0 rounded-end-5" title="Quitar" aria-label="Quitar al carrito"> {iconoResta ?? <FontAwesomeIcon icon={faMinus} />} </Button>
    </ButtonGroup>
  );
}

export default ButtonContador;