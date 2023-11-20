import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tour from '../components/services/Tour';
import { Container, Row, Col } from 'react-bootstrap';
import BannerServices from '../components/services/banners';

function ServicesScreen() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const toursResponse = await axios.get('/tours/api/v1/tours/');
        setTours(toursResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <BannerServices />
      <Container>
        <br />
        <br />
        <br />

        <h1 data-aos="fade-right" style={{borderBottom:'1px solid #2f2f2f', marginBottom:'15px'}}><strong>Know About Our Services</strong></h1>
        <br />
        <br />

        {/* Tours Section */}
        <h2>Tours</h2>
        <Row data-aos="zoom-in">
        {tours.map((tour) => (
          <Col key={tour.id} xs={12} sm={6} md={4} lg={4}>
            <Tour tour={tour} />
          </Col>
        ))}
      </Row>

        <br />
        <br />
      </Container>
    </>
  );
}

export default ServicesScreen;
