import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';

function ComingSoon () {

    return(
        <Row className="d-flex justify-content-center m-auto py-5">
            <Col md={2}>
                <FontAwesomeIcon icon={faPersonDigging} size="10x" className="text-warning" />
            </Col>
            <Col md={12} className="text-center">
                <h2 className="fw-bolder h1 my-3 text-warning-emphasis"> Página en construcción</h2>
                <h3 className="text-warning-emphasis text-opacity-75 fw-normal"> Próximamente ud. podrá acceder al gestionar el contenido de su sitio</h3>
            </Col>
        </Row>
    );
}

export default ComingSoon;