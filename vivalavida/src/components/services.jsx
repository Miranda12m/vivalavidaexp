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
           
            <h1 style={{ textAlign: 'center', marginBottom: '2%'}}>Services</h1>


            <div data-aos="zoom-in-down">


                <Container style={{ marginBottom: '3%' }}>
                    <Row style={{alignItems:'center', display: 'flex', justifyContent: 'center', marginBottom:'10%'}}>
                        <Col xs={6} md={4} style={{marginBottom:'4%'}}>
                            <a href='/tour'>
                                <MDBCard className="mdb-card">
                                    <MDBCardImage src='https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' position='top' style={{ borderRadius: "1.2%" }} alt='...' />
                                    <MDBCardBody>
                                        <MDBCardTitle>Card title</MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </MDBCardText>
                                        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                            <button onClick={() => window.location.href = '/tour'} className="btn btn-primary button-hover" type="button" style={{ verticalAlign: 'center', margin: 'auto', alignSelf: 'center' }}>See more</button>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </a>
                        </Col>
                        <Col xs={6} md={4} style={{marginBottom:'4%'}}>
                            <a href='/contact'>
                                <MDBCard className="mdb-card">
                                    <MDBCardImage src='https://plus.unsplash.com/premium_photo-1681406994990-e16f7e02e027?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' position='top' style={{ borderRadius: "1.2%" }} alt='...' />
                                    <MDBCardBody>
                                        <MDBCardTitle>Card title</MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </MDBCardText>
                                        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                            <button onClick={() => window.location.href = '/contact'} className="btn btn-primary button-hover" type="button" style={{ verticalAlign: 'center', margin: 'auto', alignSelf: 'center' }}>See more</button>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </a>
                        </Col>
                        <Col xs={6} md={4} style={{marginBottom:'4%'}}>
                            <a href='/tour'>
                                <MDBCard className="mdb-card" onClick={() => window.location.href = '/tour'} >
                                    <MDBCardImage src='https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' position='top' style={{ borderRadius: "1.2%" }} alt='...' />
                                    <MDBCardBody>
                                        <MDBCardTitle>Card title</MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </MDBCardText>
                                        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                            <button onClick={() => window.location.href = '/tour'} className="btn btn-primary button-hover" type="button" style={{ verticalAlign: 'center', margin: 'auto', alignSelf: 'center' }}>See more</button>
                                        </div>                                </MDBCardBody>
                                </MDBCard>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
