import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import BannerLoc from '../../components/services/bannerservices/bannerloc';
import LocalConsume from '../../components/services/LocalConsume';
import Navbars from '../../components/services/navbars';


function LocalConsumesScreen() {
  const [localconsumes, setLocalconsumes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/tours/api/v1/localconsumes/');
        setLocalconsumes(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
    <BannerLoc />
    <Navbars />

    <Container>
  

      <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Local Consume</strong></h1>
      <Row data-aos="zoom-in">
          {localconsumes
            .sort((a, b) => b.id - a.id) // Cambiado el orden de la comparación por el ID
            .map((localconsume) => (
              <div key={localconsume.id}>
                <LocalConsume restaurant={localconsume} />
              </div>
            ))}
        </Row>
    </Container>
    </>
  );
}

export default LocalConsumesScreen;