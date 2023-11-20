import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tour from '../../components/services/Tour';
import { Container, Row, Col } from 'react-bootstrap';
import BannerTour from '../../components/services/bannerservices/bannertour';
import Navbars from '../../components/services/navbars';
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
    <>
    <BannerTour />
    <Navbars />
    <Container>


      <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Tours</strong></h1>
      <br></br>
      <Row data-aos="zoom-in">
        {tours.map((tour) => (
          <Col key={tour.id} xs={12} sm={6} md={4} lg={4}>
            <Tour tour={tour} />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}

export default TourScreen;