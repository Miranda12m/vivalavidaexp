import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Restaurant from '../../components/services/Restaurant';
import BannerRes from '../../components/services/bannerservices/bannerres';
function RestaurantScreen() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/tours/api/v1/restaurants/');
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
    <BannerRes />
    <Container>
      <br />
      <br />
      <br />

      <h1 data-aos="fade-right">Restaurants</h1>
      <Row data-aos="zoom-in">
        {restaurants.map((restaurant) => (
          <Col key={restaurant.id} >
            <Restaurant restaurant={restaurant} />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}

export default RestaurantScreen;