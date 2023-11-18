import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tour from '../components/services/Tour';
import { Container, Row, Col } from 'react-bootstrap';
import BannerTour from '../components/services/banners';
import Restaurant from '../components/services/Restaurant';
import Coworking from '../components/services/Coworking';
import LocalConsume from '../components/services/LocalConsume';
import Hotels from '../components/services/Hotels';

function ServicesScreen() {
  const [tours, setTours] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [coworkings, setCoworkings] = useState([]);
  const [localconsumes, setLocalConsumes] = useState([]);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const toursResponse = await axios.get('/tours/api/v1/tours/');
        setTours(toursResponse.data);
        const restaurantsResponse = await axios.get('/tours/api/v1/restaurants/');
        setRestaurants(restaurantsResponse.data);
        const coworkingsResponse = await axios.get('/tours/api/v1/coworkings/');
        setCoworkings(coworkingsResponse.data);
        const localconsumesResponse = await axios.get('/tours/api/v1/localconsumes/');
        setLocalConsumes(localconsumesResponse.data);
        const hotelsResponse = await axios.get('/tours/api/v1/hotels/');
        setHotels(hotelsResponse.data);
          
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <BannerTour />
      <Container>
        <br />
        <br />
        <br />

        <h1 data-aos="fade-right">Know about our Services</h1>
        <br />
        <br />
        <Row data-aos="zoom-in">
          <h2>Tours</h2>
          {tours.length > 0 && tours.map((tour) => (
            <Col key={tour.id} xs={12} sm={6} md={4} lg={4}>
              <Tour tour={tour} />
            </Col>
          ))}
        </Row>
        <br />
        <br />
        <Row data-aos="zoom-in">
          <h2>Restaurants</h2>
          {restaurants.length > 0 && restaurants.map((restaurant) => (
            <Col key={restaurant.id} xs={12} sm={6} md={4} lg={4}>
              <Restaurant restaurant={restaurant} />
            </Col>
          ))}
        </Row>
        <br />
        <br />
        <Row data-aos="zoom-in">
          <h2>Coworking</h2>
          {coworkings.length > 0 && coworkings.map((coworking) => (
            <Col key={coworking.id} xs={12} sm={6} md={4} lg={4}>
              <Coworking coworking={coworking} />
            </Col>
          ))}
        </Row>
        <br />
        <br />
        <Row data-aos="zoom-in">
          <h2>Local Consume</h2>
          {localconsumes.length > 0 && localconsumes.map((localconsume) => (
            <Col key={localconsume.id} xs={12} sm={6} md={4} lg={4}>
              <LocalConsume localconsume={localconsume} />
            </Col>
          ))}
        </Row>
        <br />
        <br />
        <Row data-aos="zoom-in">
          <h2>Hotels</h2>
          {hotels.length > 0 && hotels.map((hotel) => (
            <Col key={hotel.id} xs={12} sm={6} md={4} lg={4}>
              <Hotels hotel={hotel} />
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
