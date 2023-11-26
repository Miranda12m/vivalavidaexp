import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InstagramEmbed from '../components/home/Instagram';
import Carousel from '../components/home/banner';
import Services from '../components/home/services';
import { FaFacebook, FaTwitter, FaInstagram, FaEvernote } from 'react-icons/fa';
import Alianzas from '../components/home/alianzas';
import Testimonials from '../components/home/testimonials';
import Qt from '../components/home/qt';
import Team from '../components/home/team';
function HomeScreen() {
  return (
    <>

      <Carousel />
      <Alianzas />
      <Services />
      <div style={{ backgroundColor: 'white' }}>
      

      <Testimonials />
      </div>
      <Qt />
      <br></br>
      <style>
        {`
                  .button-hover:hover {
                      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
                      transform: scale(1.02);
                      transition: all 0.2s ease-in-out;
                  }
                `}
      </style>
      <Container>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '3%',
            marginBottom: '3%',

          }}
        >
          <Row >
            
            <Col>
              <div data-aos="fade-right"
                style={{
                  flex: 1,
                  order: 2,
                }}
              >
                <h2 style={{ marginTop: '4%' }}><strong>About Us</strong></h2>
                <p style={{ marginTop: '4%' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                {/*  <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                  <button onClick={() => window.location.href = '/#/contact'} className="btn btn-primary button-hover" style={{ verticalAlign: 'center', margin: 'auto', alignSelf: 'center' }}>Contact Us</button>

                </div> */}
               
                <Row className="mt-5" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginBottom: '10%' }}>
                  <Col>
                    <button className='m-1 btn btn-primary button-hover' style={{ backgroundColor: '#3b5998' }} onClick={() => window.open('https://www.instagram.com/vivalavidaexperiences/', '_blank')}>
                      <FaFacebook size={20} style={{ marginRight: '10px' }} /> Facebook
                    </button>
                  </Col>

                  <Col>
                    <button className='m-1 btn btn-primary button-hover' style={{ backgroundColor: '#ac2bac' }} onClick={() => window.open('https://www.instagram.com/vivalavidaexperiences/', '_blank')}>
                      <FaInstagram size={20} style={{ marginRight: '10px' }} />Instagram
                    </button>
                  </Col>
                  <Col style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                    <button className='m-1 btn btn-primary button-hover' style={{ backgroundColor: '#ff4500' }} onClick={() => window.open('https://www.instagram.com/vivalavidaexperiences/', '_blank')}>
                      <FaEvernote size={20} style={{ marginRight: '10px' }} />Eventbrite
                    </button>
                  </Col>
                </Row>
              </div>

            </Col>
            <Col>
              <div style={{ flex: 1, order: 1, position: 'relative', marginLeft: '10%', marginTop: '5%' }} data-aos="fade-up">
                <img
                  src="https://images.unsplash.com/photo-1580934738416-ad531f2920f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="About Us"
                  style={{ maxWidth: '87%', minWidth: '300px', height: 'auto', borderRadius: '2%', boxShadow:' 0px 0px 15px rgba(0, 0, 0, 0.3)' }}
                />
              </div>
            </Col>
          </Row>

        </div>
      </Container>
      <div style={{ backgroundColor: 'white' }}>
      

      <Team />
      </div>
      <InstagramEmbed />
      <br></br><br></br><br></br><br></br>
    </>

  );
}

export default HomeScreen;

