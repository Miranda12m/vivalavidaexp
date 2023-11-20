import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import BannerHot from '../../components/services/bannerservices/bannerhot';
import Hotels from '../../components/services/Hotels';
function HotelScreen() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/tours/api/v1/hotels/');
        setHotels(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
    <BannerHot />
    <Container>
      <br />
      <br />
      <br />

      <h1 data-aos="fade-right">Hotels</h1>
      <Row data-aos="zoom-in">
        {hotels.map((hotel) => (
          <Col key={hotel.id} xs={12} sm={6} md={4} lg={4}>
            <Hotels hotel={hotel} />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}

export default HotelScreen;