import React from 'react';
import Tour from '../components/Tour';
import tourData from '../staticdata';
import { Container, Row, Col } from 'react-bootstrap';
import InstagramEmbed from '../components/Instagram';
import Carousel from '../components/banner';
import Services from '../components/services';
function HomeScreen() {
  return (
    <>
      <Carousel />

      <Container>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '5%',
            marginBottom: '5%',
          }}
        >
          <Row>
            <Col>
              <div
                style={{
                  flex: 1,
                  order: 2, // Cambiar el orden en dispositivos móviles

                }}
              >

                <h2>About Us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit
                  anim id est laborum.
                </p>
              </div>
            </Col>
            <Col>
              <div style={{ flex: 1, order: 1 }}>
                <img
                  src="https://images.unsplash.com/photo-1580934738416-ad531f2920f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="About Us"
                  style={{ maxWidth: '100%', minWidth: '300px', height: 'auto', borderRadius: "2%" }}
                />
              </div>
            </Col>
          </Row>
        </div>

      </Container >
      <Services/>
    </>

  );
}

export default HomeScreen;

