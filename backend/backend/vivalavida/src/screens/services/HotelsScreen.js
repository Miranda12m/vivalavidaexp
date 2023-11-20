import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import BannerHot from '../../components/services/bannerservices/bannerhot';
import Hotels from '../../components/services/Hotels';
import Navbars from '../../components/services/navbars';


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
    <Navbars />

    <Container>

      <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Hotels</strong></h1>
        <br></br>
        <Row data-aos="zoom-in">
          {hotels
            .sort((a, b) => b.id - a.id) // Cambiado el orden de la comparación por el ID
            .map((hotel) => (
              <div key={hotel.id}>
                <Hotels hotel={hotel} />
              </div>
            ))}
        </Row>
    </Container>
    </>
  );
}

export default HotelScreen;