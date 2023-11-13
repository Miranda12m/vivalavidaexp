import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tour from '../components/Tour';
import { Container, Row, Col } from 'react-bootstrap';

function TourScreen() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/tours/api/v1/tours/');
        setTours(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 data-aos="fade-right">Tours</h1>
      <Row data-aos="zoom-in">
        {tours.map((tour) => (
          <Col key={tour.id} xs={12} sm={6} md={4} lg={4}>
            <Tour tour={tour} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TourScreen;
