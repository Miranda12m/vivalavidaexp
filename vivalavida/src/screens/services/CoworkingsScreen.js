import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import BannerCow from '../../components/services/bannerservices/bannercow';
import Coworking from '../../components/services/Coworking';
import Navbars from '../../components/services/navbars';


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
    <Navbars />
    <Container>
      <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Coworking</strong></h1>
        <br></br>
        <Row data-aos="zoom-in">
          {coworkings
            .sort((a, b) => b.id - a.id) // Cambiado el orden de la comparación por el ID
            .map((coworking) => (
              <div key={coworking.id}>
                <Coworking coworking={coworking} />
              </div>
            ))}
        </Row>
    </Container>
    </>
  );
}

export default CoworkingsScreen;