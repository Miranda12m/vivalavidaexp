import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
} from 'mdb-react-ui-kit';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
function Recomendation() {
    AOS.init();
  return (
        <>
            <style>
                {`
                  .mdb-card:hover {
                      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
                      transform: scale(1.02);
                      transition: all 0.2s ease-in-out;
                  }

                  .button-hover:hover {
                    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
                    transform: scale(1.02);
                    transition: all 0.2s ease-in-out;
                }

                `}
            </style>
            <div data-aos="zoom-in-down">


                <Container style={{ marginBottom: '3%' }}>
                    <Row style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginBottom: '5%' }}>
                        <Col style={{ marginBottom: '4%' }}>
                            <Link to='/restaurants'>
                                <MDBCard className="mdb-card" style={{ minWidth: '300px', marginLeft: '5%', marginRight: '5%', marginBottom: '5%' }}>
                                    <MDBCardImage src='https://images.unsplash.com/photo-1553527922-767df645c5f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' position='top' style={{ borderRadius: "1.2%" }} alt='...' />
                                    <MDBCardBody>
                                        <MDBCardTitle><strong>Restaurants</strong></MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </MDBCardText>
                                        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                            <button className="btn btn-primary button-hover" type="button" style={{ verticalAlign: 'center', margin: 'auto', alignSelf: 'center' }}>See more</button>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </Link>
                        </Col>
                        <Col style={{ marginBottom: '4%' }}>
                            <Link to='/coworking'>
                                <MDBCard className="mdb-card" style={{ minWidth: '300px', marginLeft: '5%', marginRight: '5%', marginBottom: '5%' }}>
                                    <MDBCardImage src='https://images.unsplash.com/photo-1520881363902-a0ff4e722963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' position='top' style={{ borderRadius: "1.2%" }} alt='...' />
                                    <MDBCardBody>
                                        <MDBCardTitle><strong>Coworking</strong></MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </MDBCardText>
                                        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                            <button className="btn btn-primary button-hover" type="button" style={{ verticalAlign: 'center', margin: 'auto', alignSelf: 'center' }}>See more</button>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </Link>
                        </Col>
                        <Col style={{ marginBottom: '4%' }}>
                            <Link to='/local-consume'>
                                <MDBCard className="mdb-card"  style={{ minWidth: '300px', marginLeft: '5%', marginRight: '5%', marginBottom: '5%' }} >
                                    <MDBCardImage src='https://images.unsplash.com/photo-1694885274524-615f580c111a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' position='top' style={{ borderRadius: "1.2%" }} alt='...' />
                                    <MDBCardBody>
                                        <MDBCardTitle><strong>Local Consume</strong></MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </MDBCardText>
                                        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                            <button  className="btn btn-primary button-hover" type="button" style={{ verticalAlign: 'center', margin: 'auto', alignSelf: 'center' }}>See more</button>
                                        </div>                                </MDBCardBody>
                                </MDBCard>
                            </Link>
                        </Col>
                        <Col style={{ marginBottom: '4%' }}>
                            <Link to='/hotels'>
                                <MDBCard className="mdb-card" style={{ minWidth: '300px', marginLeft: '5%', marginRight: '5%', marginBottom: '5%' }}>
                                    <MDBCardImage src='https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' position='top' style={{ borderRadius: "1.2%" }} alt='...' />
                                    <MDBCardBody>
                                        <MDBCardTitle><strong>Hotels</strong></MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </MDBCardText>
                                        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                            <button className="btn btn-primary button-hover" type="button" style={{ verticalAlign: 'center', margin: 'auto', alignSelf: 'center' }}>See more</button>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Recomendation