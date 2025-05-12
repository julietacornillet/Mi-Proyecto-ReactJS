import {Container, Row, Col} from "react-bootstrap";

import CardProduct from "../components/CardProduct";



function Modulos({producto, infoLink, contador, setContador, modulosList}) {
    
    return(
        <Container className="py-5">
            <Row>
                <Col md='12' className="pb-4">
                    <h2 className="text-primary-emphasis">Módulos del curso</h2>
                </Col>
                {/* car del producto */}
                <CardProduct producto={producto} infoLink={infoLink} contador={contador} setContador={setContador} modulosList={modulosList}/>
            </Row>
        </Container>
    );
}

export default Modulos;