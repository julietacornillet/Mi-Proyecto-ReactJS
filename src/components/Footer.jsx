import { Container, Col, Row } from 'react-bootstrap';

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
                  <li><a href='mailto:julietacornillet@gmail.com' className='text-decoration-none link-light'>julietacornillet@gmail.com</a></li>
              </ul>
          </Col>
      </Row>
        <Col className='text-center'>
          <p className="mb-0 text-light-emphasis small">© 2025 - Proyecto personal - Curso React JS Talento Tech</p>
        </Col>
      </Container>
    </footer>
  );
}

export default Footer;


