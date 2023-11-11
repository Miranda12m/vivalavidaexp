import React from 'react'
import Tour from '../components/Tour';
import tourData from '../staticdata';
import { Container, Row, Col } from 'react-bootstrap';

function TourScreen() {
  return (
    <Container>
      <br />
      <br />
      <br />
      <h1>Bolas de Mono</h1>
      <Row>
        {tourData.map((tour) => (
          <Col key={tour.id} xs={12} sm={6} md={4} lg={4}>
            <Tour tour={tour} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default TourScreen