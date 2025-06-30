import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Badge, Card, Button, CardTitle, CardBody, CardText } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';


function Usuario() {
  const { id } = useParams();
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  return (
    <Container className="py-5">

        <Badge bg="light" className="border border-2 rounded-3 col-md-auto shadow-sm text-black-50 mb-3">
            <FontAwesomeIcon icon={faUserAlt} /> <span className="ms-1">Rol {usuario.rol}</span>
        </Badge>
        <Row className="mb-4">
            <h2 className="text-primary-emphasis">Bienvenida, {usuario.nombre || 'Usuario'} al gestor de contenidos! </h2>         
        
            <Col md={6} className="mt-4">
                <Card variant="light" className="shadow-sm p-2">
                    <CardBody>
                        <CardTitle>Gestionar módulos</CardTitle>
                        <CardText>Puede dar de Alta, Modificar o Eliminar un contenido para la sección de Módulos</CardText>

                        <Button size="sm" variant="primary"
                        onClick={(e) => {
                            if (usuario.rol !== "administrador") {
                            e.preventDefault();
                            Swal.fire({
                                icon: "error",
                                title: "Acceso denegado",
                                text: "No tienes permiso para crear módulos",
                                footer: '<small><strong>Credenciales de prueba:</strong> <br> "Administrador" admin@admin.com / "Usuario" usuario@usuario.com <br> Password: 1234</small>'
                            });
                            }
                        }}
                        as={Link}
                        to={`/admin/${usuario.id}`}
                        >
                            Crear módulo
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>

      
    </Container>
  );
}

export default Usuario;
