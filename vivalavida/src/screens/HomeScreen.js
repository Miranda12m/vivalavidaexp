import React from 'react';
import Tour from '../components/Tour';
import tourData from '../staticdata';
import { Container, Row, Col } from 'react-bootstrap';
import InstagramEmbed from '../components/Instagram';
import Carousel from '../components/banner';
import Services from '../components/services';
function HomeScreen() {
  return (
    <Container>
      <br />
      <br />
      <br />
      <h1>Home Screen bitch</h1>
    </Container>
    <div>
      <Carousel/>
      <h1>Bolas de Mono</h1>
      {tourData.map((tour) => (
        <Tour key={tour.id} tour={tour} />
      ))}
    </div>
  );
}

export default HomeScreen;

