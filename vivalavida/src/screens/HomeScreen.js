import React from 'react';
import Tour from '../components/Tour';
import tourData from '../staticdata';
import { Container, Row, Col } from 'react-bootstrap';
import InstagramEmbed from '../components/Instagram';
import Carousel from '../components/banner';
import Services from '../components/services';
import { FaFacebook, FaTwitter, FaInstagram, FaEvernote } from 'react-icons/fa';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function HomeScreen() {
  return (
    <>
    
      <Carousel />
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
            marginTop: '5%',
            marginBottom: '5%',

          }}
        >
          <Row>
            <Col>
              <div data-aos="fade-right"
                style={{
                  flex: 1,
                  order: 2,
                }}
              >
                <h2 style={{ marginTop: '4%' }}>About Us</h2>
                <p style={{ marginTop: '4%' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                {/* Agrega el botón de redirección hacia "Contact Us" */}
                <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                  <button onClick={() => window.location.href = '/contact-us'} className="btn btn-primary button-hover" style={{ verticalAlign: 'center', margin: 'auto', alignSelf: 'center' }}>Contact Us</button>

                </div>
                <Row className="mt-5" style={{alignItems:'center', display: 'flex', justifyContent: 'center', marginBottom:'10%'}}>
                  <Col>
                    <MDBBtn className='m-1 button-hover' style={{ backgroundColor: '#3b5998' }} href='#'>
                      <FaFacebook size={20} style={{ marginRight: '10px' }} /> Facebook
                    </MDBBtn>
                  </Col>
                  <Col>
                    <MDBBtn className='m-1 button-hover' style={{ backgroundColor: '#55acee' }} href='#'>
                      <FaTwitter size={20} style={{ marginRight: '10px' }} /> Twitter
                    </MDBBtn>
                  </Col>
                  <Col>
                    <MDBBtn className='m-1 button-hover' style={{ backgroundColor: '#ac2bac' }} href='#'>
                      <FaInstagram size={20} style={{ marginRight: '10px' }} />Instagram
                    </MDBBtn>
                  </Col>
                  <Col style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                    <MDBBtn className='m-1 button-hover' style={{ backgroundColor: '#ff4500' }} href='#'>
                    <FaEvernote size={20} style={{ marginRight: '10px' }} />Eventbrite
                    </MDBBtn>
                  </Col>
                </Row>
              </div>

            </Col>
            <Col>
            <div style={{ flex: 1, order: 1, position: 'relative', marginLeft:'10%', marginTop:'5%' }} data-aos="fade-left">
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(207, 106, 0, 0.8)', transform: 'rotate(-7deg)' }}></div>
              <img
                src="https://images.unsplash.com/photo-1580934738416-ad531f2920f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About Us"
                style={{ maxWidth: '87%', minWidth: '300px', height: 'auto', borderRadius: '2%', transform: 'rotate(7deg)' }}
              />
            </div>
            </Col>
          </Row>

        </div>
      </Container>
      <Services />
    </>

  );
}

export default HomeScreen;

