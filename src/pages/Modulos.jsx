import {Container, Row, Col} from "react-bootstrap";

import ListCardModulo from "../components/ListCardModulo";



function Modulos({producto, infoLink, contador, setContador, modulosList}) {
    
    return(
        <Container className="py-5">
            <Row>
                <Col md='12' className="pb-4">
                    <h2 className="text-primary-emphasis">Módulos del curso</h2>
                </Col>
                {/* card del producto */}
                <ListCardModulo producto={producto} infoLink={infoLink} contador={contador} setContador={setContador} modulosList={modulosList}/>
            </Row>
        </Container>
    );
}

export default Modulos;