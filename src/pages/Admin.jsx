import { useParams } from "react-router-dom";
import { Container, Row, Badge, Alert } from "react-bootstrap";
import ModulosAbm from "../components/ModulosAbm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

function Admin() {
    const { id } = useParams();
    //   const navigate = useNavigate();
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    //   useEffect(() => {
    //     if (!usuario || usuario.rol !== 'admin') {
    //       navigate('/login');
    //     }
    //   }, [usuario, navigate]);

    return (
        <Container className='py-5'>
        <Row>
        {usuario.rol === 'administrador' && (
                <>
                <Badge bg="light" className="border border-2 rounded-3 col-md-auto shadow-sm ms-2 text-black-50 mb-3">
                    <FontAwesomeIcon icon={faUserAlt} /> <span className="ms-1">Rol {usuario.rol}</span>
                </Badge>
                <ModulosAbm />
                </>
            )}

            {usuario.rol !== 'administrador' && (
                <Alert variant="danger">No tiene permisos para ver esta sección.</Alert>
            )} 
        </Row>
        </Container>
    );
}

export default Admin;
