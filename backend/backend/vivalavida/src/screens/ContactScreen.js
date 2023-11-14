import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import ContactForm from '../components/contact/ContactForm';
import { FaFacebook, FaTwitter, FaInstagram, FaEvernote } from 'react-icons/fa';
import BannerContact from '../components/contact/bannerc';
function ContactScreen() {
  return (
    <>
    <BannerContact />
    
    <Container>
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1 data-aos="fade-right">Contact</h1>
      <ContactForm></ContactForm>
      <br></br>
      <br></br>

      <Card className="my-4 p-3" data-aos="fade-right">
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
            <Card.Body >
              <h3>Stay in touch with us</h3>
              <p>
                Bolas lorem, Gabus en este card hay que agregar socials y algun boton mamalon para que el usuario no tenga que utilizar el forms
              </p>
              <Row className="mt-5" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginBottom: '10%' }}>
                  <Col>
                    <button className='m-1 btn btn-primary button-hover' style={{ backgroundColor: '#3b5998' }} onClick={() => window.open ( 'https://www.instagram.com/vivalavidaexperiences/', '_blank')}>
                      <FaFacebook size={20} style={{ marginRight: '10px' }} /> Facebook
                    </button>
                  </Col>
                  <Col>
                    <button className='m-1 btn btn-primary button-hover' style={{ backgroundColor: '#55acee' }} onClick={() => window.open ( 'https://www.instagram.com/vivalavidaexperiences/', '_blank')}>
                      <FaTwitter size={20} style={{ marginRight: '10px' }} /> Twitter
                    </button>
                  </Col>
                  <Col>
                    <button className='m-1 btn btn-primary button-hover' style={{ backgroundColor: '#ac2bac' }} onClick={() => window.open ( 'https://www.instagram.com/vivalavidaexperiences/', '_blank')}>
                      <FaInstagram size={20} style={{ marginRight: '10px' }} />Instagram
                    </button>
                  </Col>
                  <Col style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                    <button className='m-1 btn btn-primary button-hover' style={{ backgroundColor: '#ff4500' }} onClick={() => window.open ( 'https://www.instagram.com/vivalavidaexperiences/', '_blank')}>
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