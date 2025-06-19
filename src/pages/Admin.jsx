
import { useParams } from "react-router-dom";
import { Container, Row, Badge } from "react-bootstrap";
// import ComingSoon from "../components/ComingSoon";
import ModulosAbm from "../components/ModulosAbm";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

function Admin () {
    const { id } = useParams();

    return(
        <Container className='py-5'>
            <Row>
                <Badge bg="light" className="border border-2 rounded-3 col-md-auto shadow-sm ms-2 text-black-50">
                  <FontAwesomeIcon icon={faUserAlt}/> <span className="ms-1">{id}: Rol Administrador</span>
                </Badge>
                <ModulosAbm/>
            </Row>
        </Container> 
    );
}

export default Admin;