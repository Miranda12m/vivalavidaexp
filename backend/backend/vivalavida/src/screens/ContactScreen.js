import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import { FaFacebook, FaTwitter, FaInstagram, FaEvernote } from 'react-icons/fa';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function ContactScreen() {
  return (
    <>
    <div ></div>
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
                    <button className='m-1 btn btn-primary button-hover' style={{ backgroundColor: '#3b5998' }} onClick={() => window.location.href = 'https://www.instagram.com/vivalavidaexperiences/'}>
                      <FaFacebook size={20} style={{ marginRight: '10px' }} /> Facebook
                    </button>
                  </Col>
                  <Col>
                    <button className='m-1 btn btn-primary button-hover' style={{ backgroundColor: '#55acee' }} onClick={() => window.location.href = 'https://www.instagram.com/vivalavidaexperiences/'}>
                      <FaTwitter size={20} style={{ marginRight: '10px' }} /> Twitter
                    </button>
                  </Col>
                  <Col>
                    <button className='m-1 btn btn-primary button-hover' style={{ backgroundColor: '#ac2bac' }} onClick={() => window.location.href = 'https://www.instagram.com/vivalavidaexperiences/'}>
                      <FaInstagram size={20} style={{ marginRight: '10px' }} />Instagram
                    </button>
                  </Col>
                  <Col style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                    <button className='m-1 btn btn-primary button-hover' style={{ backgroundColor: '#ff4500' }} onClick={() => window.location.href = 'https://www.instagram.com/vivalavidaexperiences/'}>
                      <FaEvernote size={20} style={{ marginRight: '10px' }} />Eventbrite
                    </button>
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
    </>
  )
}

export default ContactScreen