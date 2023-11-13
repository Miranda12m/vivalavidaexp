import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit';

function Tour({ tour }) {
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

      <Card className="my-3 p-3 rounded" style={{ height: "480px" }}>
        <Link to={tour.url}>
          <MDBCard className="mdb-card">
            <MDBCardImage src={tour.image} position='top' style={{ borderRadius: "1.2%" }} alt={tour.title} />
            <MDBCardBody>
              <MDBCardTitle>{tour.title}</MDBCardTitle>
              <MDBCardText>
                <div>Hour: {tour.hour}</div>
                <div>Duration: {tour.duration}</div>
                <div>Language: {tour.language}</div>
                <div>Meeting Point: {tour.meeting_point}</div>
                <div>Price: {tour.price}</div>
              </MDBCardText>
              <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                <Link  to={tour.url} >
                <button className="btn btn-primary button-hover" type="button" style={{ verticalAlign: 'center', margin: 'auto', alignSelf: 'center' }}>See more</button>
                </Link>
              </div>
            </MDBCardBody>
          </MDBCard>
        </Link>
      </Card>

      <Card className="my-3 p-3 rounded" style={{ height: "480px" }}>
        <Link to={tour.url}>
          <Card.Img src={tour.image} alt={tour.title} />
        </Link>

        <Card.Body as="div">
          <Link to={tour.url}>
            <Card.Title>
              <strong>{tour.title}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div">
            <div>Hour: {tour.hour}</div>
            <div>Duration: {tour.duration}</div>
            <div>Language: {tour.language}</div>
            <div>Meeting Point: {tour.meeting_point}</div>
            <div>Price: {tour.price}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Tour;
