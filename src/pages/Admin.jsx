
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ComingSoon from "../components/ComingSoon";

function Admin () {
    const { id } = useParams();

    return(
        <Container className='py-5'>
            <Row>
                <Col md={12}>
                    <h2 className="fw-bolder h1 text-primary-emphasis h3">Perfil Administrador: {id}</h2>
                </Col>
            </Row>
            <ComingSoon/>
        </Container> 
    );
}

export default Admin;