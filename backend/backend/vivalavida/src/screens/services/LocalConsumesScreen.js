import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import BannerLoc from '../../components/services/bannerservices/bannerloc';
import LocalConsume from '../../components/services/LocalConsume';

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
    <Container>
      <br />
      <br />
      <br />

      <h1 data-aos="fade-right">Local Consume</h1>
      <Row data-aos="zoom-in">
        {localconsumes.map((localconsume) => (
          <Col key={localconsume.id} xs={12} sm={6} md={4} lg={4}>
            <LocalConsume localconsume={localconsume} />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}

export default LocalConsumesScreen;