import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import ContactForm from '../components/contact/ContactForm';
import { FaFacebook, FaTwitter, FaInstagram, FaEvernote } from 'react-icons/fa';
import BannerContact from '../components/contact/bannerc';
import Qt from '../components/home/qt';
function ContactScreen() {
  return (
    <>
      <BannerContact />
      <div style={{ backgroundColor: 'white', width: '100%' }}>

        <br />
        <br />
        <br />
        <br />
        <h3 data-aos="fade-right" style={{ fontSize: '12px', textAlign: 'center', marginLeft: '20%', marginRight: '20%' }}>Interested in travel with us? Have an idea for us you can’t wait to share? We’d love to hear from you. Let us know how we can help you, and i'll promise to get back to you as soon as possible!</h3>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <Container>
        <ContactForm></ContactForm>
      </Container>

      <br></br>
      <Container>

        <Card className="my-4 p-3" data-aos="fade-right" style={{ boxShadow: ' 0px 0px 15px rgba(0, 0, 0, 0.3)' }}>
          <Row noGutters>
            <Col md={4}>
              <Image

                src="https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                    <button className='m-1 btn btn-primary button-hover' style={{ backgroundColor: '#3b5998' }} onClick={() => window.open('https://www.instagram.com/vivalavidaexperiences/', '_blank')}>
                      <FaFacebook size={20} style={{ marginRight: '10px' }} /> Facebook
                    </button>
                  </Col>
                  <Col>
                    <button className='m-1 btn btn-primary button-hover' style={{ backgroundColor: '#ac2bac' }} onClick={() => window.open('https://www.instagram.com/vivalavidaexperiences/', '_blank')}>
                      <FaInstagram size={20} style={{ marginRight: '10px' }} />Instagram
                    </button>
                  </Col>
                  <Col style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                    <button className='m-1 btn btn-primary button-hover' style={{ backgroundColor: '#ff4500' }} onClick={() => window.open('https://www.instagram.com/vivalavidaexperiences/', '_blank')}>
                      <FaEvernote size={20} style={{ marginRight: '10px' }} />Eventbrite
                    </button>
                  </Col>
                </Row>
              </Card.Body>
            </Col>
          </Row>
        </Card>
     
      </Container>
      <br></br><br></br>
    </>
  )
}

export default ContactScreen