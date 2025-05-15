import {Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Card, CardFooter, CardLink, ButtonToolbar} from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { Stack } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLink } from '@fortawesome/free-solid-svg-icons';
import ButtonAgregar from "./ButtonAgregar";


function CardModulo ({producto, infoLink, contador, setContador, modulosList}) {
    return (
        <>
        {modulosList.map((modulo, idx) => (
            <Col md={6} key={idx} lg="4" className="mb-4">
                <Card className="shadow h-100">
                    {/* <span className="position-absolute top-0 end-0 m-2">
                        <Button variant="danger rounded-circle shadow" title="Favorito" aria-label="Favorito" size="sm"> <FontAwesomeIcon icon={faHeart} size="sm" /></Button>
                    </span> */}
                    <Card.Img variant="top" src={modulo.imagen} title={modulo.titulo} className="border-bottom"/>
                    <Card.Header className="border-0 pb-0 ms-auto bg-transparent">
                        <Stack><small><Badge className="mt-0 border border-success text-success shadow" bg="light" pill>{producto}{idx + 1}</Badge></small></Stack>
                    </Card.Header>
                    <Card.Body className="mt-0">
                        <Card.Title>{modulo.titulo}</Card.Title>
                        <Card.Text>{modulo.texto}</Card.Text>
                    </Card.Body>
                    <CardFooter className="border-top-0 bg-white pb-3">
                        <ButtonToolbar className="justify-content-between" aria-label="Grupo de botones Agregar al carrito y descargar material" >
                            {modulo.btnAdicional ? 
                            <CardLink href={modulo.btnAdicional} title={`${modulo.titulo} - ${producto}` + (idx + 1)} aria-label={'Ver material del módulo' + modulo.titulo} className="btn btn-sm btn-outline-primary" target="blank"> {infoLink} <FontAwesomeIcon className="ms-1" icon={faLink} size="sm" /></CardLink> : <Button variant="outline-primary" size="sm" disabled>Próximamente</Button>}

                            {modulo.btnTexto ? 
                            <ButtonAgregar variant={'primary rounded-circle'} contador={contador} setContador={setContador} title={'Agregar al carrito'} alt={'Agregar'}/> : ''}
                        </ButtonToolbar>                                
                    </CardFooter>
                </Card>
            </Col>    
        ))}
        </>
    );
}

export default CardModulo;