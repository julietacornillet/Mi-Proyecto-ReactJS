
import { Row, Col, Container, } from 'react-bootstrap';
import CardLibro from '../components/CardLibro';


function Books({contador, setContador}) {


    return (
        
        <Container className="py-5">
            <Row>
                <Col md='12' className="pb-4">
                    <h2 className="text-primary-emphasis">Libros React JS</h2>
                </Col>

                <CardLibro tipoLibro={'eBook'} contador={contador} setContador={setContador}/>
            </Row>
        </Container>
    );
}

export default Books;
