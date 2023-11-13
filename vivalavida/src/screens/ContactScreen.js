import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import { FaFacebook, FaTwitter, FaInstagram, FaEvernote } from 'react-icons/fa';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function ContactScreen() {
  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Contact</h1>
      <ContactForm></ContactForm>
      <br></br>
      <br></br>

      <Card className="my-4 p-3">
        <Row noGutters>
          <Col md={4}>
            <Image
              src="https://placekitten.com/400/300"
              alt="Info Image"
              fluid
              style={{ borderRadius: "1.2%" }}
            />
          </Col>
          <Col md={7}>
            <Card.Body>
              <h3>Stay in touch with us</h3>
              <p>
                Bolas lorem, Gabus en este card hay que agregar socials y algun boton mamalon para que el usuario no tenga que utilizar el forms
              </p>
              <Row className="mt-5" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginBottom: '10%' }}>
                <Col>
                  <MDBBtn className='m-1 button-hover' style={{ backgroundColor: '#3b5998' }} href='#'>
                    <FaFacebook size={20} style={{ marginRight: '10px' }} /> Facebook
                  </MDBBtn>
                </Col>
                <Col>
                  <MDBBtn className='m-1 button-hover' style={{ backgroundColor: '#55acee' }} href='#'>
                    <FaTwitter size={20} style={{ marginRight: '10px' }} /> Twitter
                  </MDBBtn>
                </Col>
                <Col>
                  <MDBBtn className='m-1 button-hover' style={{ backgroundColor: '#ac2bac' }} href='#'>
                    <FaInstagram size={20} style={{ marginRight: '10px' }} />Instagram
                  </MDBBtn>
                </Col>
                <Col style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                  <MDBBtn className='m-1 button-hover' style={{ backgroundColor: '#ff4500' }} href='#'>
                    <FaEvernote size={20} style={{ marginRight: '10px' }} />Eventbrite
                  </MDBBtn>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <br />
      <br />
      <br />
    </Container>
  )
}

export default ContactScreen