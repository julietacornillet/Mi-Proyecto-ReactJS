import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer className="bg-dark bg-gradient text-white py-3 mt-auto">
      <Container>
      <Row>
          <Col className='me-auto' md="auto">
              <ul className='list-unstyled'>
                  <li className='fw-bold'>Staff académico</li>
                  <li>Amancay Arribillaga</li>
                  <li>Nicolás Fernández</li>
              </ul>
          </Col>
          <Col className='ms-auto' md="auto">
              <ul className='list-unstyled'>
                  <li className='fw-bold'>Alumna</li>
                  <li>Julieta Cornillet</li>
                  <li>julietacornillet@gmail.com</li>
              </ul>
          </Col>
      </Row>
        <Col className='text-center'>
          <p className="mb-0 text-light-emphasis small">© 2025 - Proyecto Julieta Cornillet para el Curso React JS en Talento Tech</p>
        </Col>
      </Container>
    </footer>
  );
}

export default Footer;


