import React from 'react';
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
export default function Services() {
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

            <h1 style={{ textAlign: 'center', marginBottom: '2%', marginTop: '5%' }}><strong>Services</strong></h1>


            <div data-aos="zoom-in-down">


                <Container style={{ marginBottom: '3%' }}>
                    <Row style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginBottom: '5%' }}>
                        <Col style={{ marginBottom: '4%' }}>
                            <Link to='/services'>
                                <MDBCard className="mdb-card" style={{ minWidth: '300px', marginLeft: '5%', marginRight: '5%', marginBottom: '5%' }}>
                                    <MDBCardImage src='https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' position='top' style={{ borderRadius: "1.2%" }} alt='...' />
                                    <MDBCardBody>
                                        <MDBCardTitle><strong>Know about our Services</strong></MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </MDBCardText>
                                        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                            <Link to='/services'>
                                                <button className="btn btn-primary button-hover" type="button" style={{ verticalAlign: 'center', margin: 'auto', alignSelf: 'center' }}>See more</button>
                                            </Link>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </Link>
                        </Col>
                        <Col style={{ marginBottom: '4%' }}>
                            <Link to='/services'>
                                <MDBCard className="mdb-card" style={{ minWidth: '300px', marginLeft: '5%', marginRight: '5%', marginBottom: '5%' }}>
                                    <MDBCardImage src='https://images.unsplash.com/photo-1601652589234-c282487ec97e?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' position='top' style={{ borderRadius: "1.2%" }} alt='...' />
                                    <MDBCardBody>
                                        <MDBCardTitle><strong>Mexico City Tours</strong></MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </MDBCardText>
                                        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                            <Link to='/services'>
                                                <button className="btn btn-primary button-hover" type="button" style={{ verticalAlign: 'center', margin: 'auto', alignSelf: 'center' }}>See more</button>
                                            </Link>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </Link>
                        </Col>
                        <Col style={{ marginBottom: '4%' }}>
                            <Link to='/contact'>
                                <MDBCard className="mdb-card" style={{ minWidth: '300px', marginLeft: '5%', marginRight: '5%', marginBottom: '5%' }} >
                                    <MDBCardImage src='https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' position='top' style={{ borderRadius: "1.2%" }} alt='...' />
                                    <MDBCardBody>
                                        <MDBCardTitle><strong>Custom Tour Experience</strong></MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </MDBCardText>
                                        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                            <Link to='/contact'>
                                                <button className="btn btn-primary button-hover" type="button" style={{ verticalAlign: 'center', margin: 'auto', alignSelf: 'center' }}>See more</button>
                                            </Link>
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
