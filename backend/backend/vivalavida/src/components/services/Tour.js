import React from "react";
import { Link } from "react-router-dom";

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

      
        <Link to={tour.url}>
          <MDBCard className="mdb-card rounded" style={{ height: "520px", width: '370px', minWidth:'350px' }}>
            <MDBCardImage src={tour.image} position='top' style={{ borderRadius: "1.2%", height: "260px" }} alt={tour.title} />
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
        <br></br>
        <br></br>
    </>
  );
}

export default Tour;
