import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tour from '../components/services/Tour';
import { Container, Row, Col } from 'react-bootstrap';
import Restaurant from '../components/services/Restaurant';
import Coworking from '../components/services/Coworking';
import LocalConsume from '../components/services/LocalConsume';
import Hotels from '../components/services/Hotels';
import { useNavigate } from 'react-router-dom'; 
import BannerServices from '../components/services/banners';

function ServicesScreen() {
  const [tours, setTours] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [coworkings, setCoworkings] = useState([]);
  const [localconsumes, setLocalConsumes] = useState([]);
  const [hotels, setHotels] = useState([]);

  const [showAllTours, setShowAllTours] = useState(false);
  const [showAllRestaurants, setShowAllRestaurants] = useState(false);
  const [showAllCoworkings, setShowAllCoworkings] = useState(false);
  const [showAllLocalConsumes, setShowAllLocalConsumes] = useState(false);
  const [showAllHotels, setShowAllHotels] = useState(false);

  const navigate = useNavigate(); 

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
      <BannerServices />
      <Container>
        <br />
        <br />
        <br />

        <h1 data-aos="fade-right">Know about our Services</h1>
        <br />
        <br />

        {/* Tours Section */}
        <Row data-aos="zoom-in">
          <h2>Tours</h2>
          {tours.length > 0 &&
            tours.slice(0, showAllTours ? tours.length : 4).map((tour) => (
              <Col key={tour.id} xs={12} sm={6} md={4} lg={4}>
                <Tour tour={tour} />
              </Col>
            ))}
          {tours.length > 4 && (
            <Col xs={12}>
              <button onClick={() => {
                setShowAllTours(!showAllTours);
                navigate.push('/services/tours'); // Reemplaza con tu ruta correcta
              }}>
                Ver más Tours
              </button>
            </Col>
          )}
        </Row>
        <br />
        <br />
        <Row data-aos="zoom-in">
        <h2>Restaurants</h2>
          {restaurants.length > 0 &&
            restaurants.slice(0, showAllRestaurants ? restaurants.length : 4).map((restaurant) => (
              <Col key={restaurant.id} xs={12} sm={6} md={4} lg={4}>
                <Restaurant restaurant={restaurant} />
              </Col>
            ))}
          {restaurants.length > 4 && (
            <Col xs={12}>
              <button onClick={() => {
                setShowAllRestaurants(!showAllRestaurants);
                navigate.push('/services/restaurants'); // Reemplaza con tu ruta correcta
              }}>
                Ver más Restaurantes
              </button>
            </Col>
          )}
        </Row>
        <br />
        <br />
        <Row data-aos="zoom-in">
        <h2>Coworking</h2>
          {coworkings.length > 0 &&
            coworkings.slice(0, showAllCoworkings ? coworkings.length : 4).map((coworking) => (
              <Col key={coworking.id} xs={12} sm={6} md={4} lg={4}>
              <Coworking coworking={coworking} />
            </Col>
            ))}
          {coworkings.length > 4 && (
            <Col xs={12}>
              <button onClick={() => {
                setShowAllCoworkings(!showAllCoworkings);
                navigate.push('/services/coworkings'); // Reemplaza con tu ruta correcta
              }}>
                Ver más Cowokings
              </button>
            </Col>
          )}
        </Row>
 
        <br />
        <br />
        <Row data-aos="zoom-in">
        <h2>Local Consume</h2>
          {localconsumes.length > 0 &&
            localconsumes.slice(0, showAllLocalConsumes ? localconsumes.length : 4).map((localconsume) => (
              <Col key={localconsume.id} xs={12} sm={6} md={4} lg={4}>
              <LocalConsume localconsume={localconsume} />
            </Col>
            ))}
          {localconsumes.length > 4 && (
            <Col xs={12}>
              <button onClick={() => {
                setShowAllLocalConsumes(!showAllLocalConsumes);
                navigate.push('/services/localconsumes'); // Reemplaza con tu ruta correcta
              }}>
                Ver más Local Consumes
              </button>
            </Col>
          )}
        </Row>
        <br />
        <br />
        <Row data-aos="zoom-in">
        <h2>Hotels</h2>
          {hotels.length > 0 &&
            hotels.slice(0, showAllLocalConsumes ? hotels.length : 4).map((hotel) => (
              <Col key={hotel.id} xs={12} sm={6} md={4} lg={4}>
              <Hotels hotel={hotel} />
            </Col>
            ))}
          {hotels.length > 4 && (
            <Col xs={12}>
              <button onClick={() => {
                setShowAllHotels(!showAllHotels);
                navigate.push('/services/hotels'); // Reemplaza con tu ruta correcta
              }}>
                Ver más Hotels
              </button>
            </Col>
          )}
        </Row>

        <br />
        <br />
      </Container>
    </>
  );
}

export default ServicesScreen;
