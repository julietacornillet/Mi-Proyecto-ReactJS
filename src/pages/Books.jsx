
import { Row, Col, Container, } from 'react-bootstrap';
import ListCardBook from '../components/ListCardBook';


function Books({contador, setContador}) {


    return (
        
        <Container className="py-5">
            <Row>
                <Col md='12' className="pb-4">
                    <h2 className="text-primary-emphasis">Libros React JS</h2>
                </Col>

                <ListCardBook tipoLibro={'eBook'} contador={contador} setContador={setContador} filters={"react+javascript"}/>
            </Row>
        </Container>
    );
}

export default Books;
