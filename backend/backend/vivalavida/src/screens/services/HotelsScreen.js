import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navbars from "../../components/services/navbars";
import BannerHot from "../../components/services/bannerservices/bannerhot";
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
      <Row data-aos="zoom-in">
        {hotels.map((hotels) => (
          <Col key={hotels.id} xs={12} sm={6} md={4} lg={4}>
            <Card>
              <Card.Img variant="top" src={hotels.image} alt={hotels.title} />
              <Card.Body>
                <Card.Title>{hotels.title}</Card.Title>
                <Card.Text>{hotels.description}</Card.Text>
                <Card.Text>Location: {hotels.location}</Card.Text>
                <a href={hotels.socials} target="_blank" rel="noopener noreferrer">
                  Socials
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}

export default HotelsScreen;
