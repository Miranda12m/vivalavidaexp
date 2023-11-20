import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import BannerCow from '../../components/services/bannerservices/bannercow';
import Coworking from '../../components/services/Coworking';
function CoworkingsScreen() {
  const [coworkings, setCoworkings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/tours/api/v1/coworkings/');
        setCoworkings(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
    <BannerCow />
    <Container>
      <br />
      <br />
      <br />

      <h1 data-aos="fade-right">Coworkings</h1>
      <Row data-aos="zoom-in">
        {coworkings.map((coworking) => (
          <Col key={coworking.id} xs={12} sm={6} md={4} lg={4}>
            <Coworking coworking={coworking} />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}

export default CoworkingsScreen;