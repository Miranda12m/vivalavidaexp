import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navbars from "../../components/services/navbars";
import BannerHot from "../../components/services/bannerservices/bannerhot";
import { Link } from "react-router-dom";

function HotelsScreen() {

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hotelsResponse = await axios.get("/tours/api/v1/hotels/");
        setHotels(hotelsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Eldiablo

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
      <BannerHot />
      <Navbars />
      <Container>
        <h1
          data-aos="fade-right"
          style={{ borderBottom: "1px solid #2f2f2f", marginBottom: "15px" }}
        >
          <strong>Hotels</strong>
        </h1>
        <br />

        {/* Hotels Section */}
        <Link to="{hotels.socials}" target="_blank" rel="noopener noreferrer">
          <Row data-aos="zoom-in">
            {hotels.map((hotels) => (
              <Col key={hotels.id} xs={12} sm={6} md={4} lg={4}>
                <Card>
                  <Card.Img variant="top" src={hotels.image} alt={hotels.title} />
                  <Card.Body>
                    <Card.Title>{hotels.title}</Card.Title>
                    <Card.Text>{hotels.description}</Card.Text>
                    <Card.Text>Location: {hotels.location}</Card.Text>
                    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                      <button className="btn btn-primary button-hover" type="button" style={{ verticalAlign: 'center', margin: 'auto', alignSelf: 'center' }}>See more</button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Link>
      </Container>
      <br></br>
    </>
  );
}

export default HotelsScreen;
