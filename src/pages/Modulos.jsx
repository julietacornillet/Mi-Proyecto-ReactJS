import {Container, Row, Col} from "react-bootstrap";

import ListCardModulo from "../components/ListCardModulo";



function Modulos({modulosList, contador, setContador}) {
    
    return(
        <Container className="py-5">
            <Row>
                <Col md='12' className="pb-4">
                    <h2 className="text-primary-emphasis">Módulos del curso</h2>
                </Col>
                
                {modulosList.map((modulo, id) => (
                    <ListCardModulo key={id} contador={contador} setContador={setContador} modulo={modulo} />
                ))}
            </Row>
        </Container>
    );
}

export default Modulos;