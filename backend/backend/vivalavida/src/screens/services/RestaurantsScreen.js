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

        <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Restaurants</strong></h1>
        <br></br>
        <Row data-aos="zoom-in">
          {restaurants
            .sort((a, b) => new Date(a.date) - new Date(b.date)) // Cambiado el orden de la comparación
            .map((restaurant) => (
              <div key={restaurant.id}>
                <Restaurant restaurant={restaurant} />
              </div>
            ))}
        </Row>

        <br />
        <br />
      </Container>
    </>
  );
}

export default RestaurantScreen;