import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

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
      <h3>INSTAGRAM - WHA - FB - GMAIL - SUMADRE</h3>
      <Card className="my-4 p-3">
        <Row noGutters>
          <Col md={4}>
            <Image
              src="https://placekitten.com/400/300"
              alt="Info Image"
              fluid
            />
          </Col>
          <Col md={7}>
            <Card.Body>
              <h3>Stay in touch with us</h3>
              <p>
                Bolas lorem, Gabus en este card hay que agregar socials y algun boton mamalon para que el usuario no tenga que utilizar el forms
              </p>
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