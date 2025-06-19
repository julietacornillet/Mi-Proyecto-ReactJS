
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ComingSoon from '../components/ComingSoon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

function Usuario () {
    const { id } = useParams();

    return(
        <Container className="py-5">
            <Row>
                <Col md={12}>
                    <p className="fw-bolder text-primary-emphasis h3"><FontAwesomeIcon icon={faUserAlt}/> Perfil Usuario: {id}</p>
                </Col>
            </Row>
            <ComingSoon />
        </Container> 
    );
}

export default Usuario;