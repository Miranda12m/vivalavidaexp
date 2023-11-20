import React from "react";
import { Link } from "react-router-dom";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit';

import { Col, Row } from "react-bootstrap";
function Restaurant({ restaurant }) {
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
      <div>
        <h2><strong>{restaurant.title}</strong></h2>
        <p> {restaurant.description}</p>
        <Row>
          <Col>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            {restaurant.location}
          </Col>
          <Col>
            <Link to={restaurant.socials} >
              <button className="btn btn-primary button-hover" type="button" style={{ verticalAlign: 'center', margin: 'auto', alignSelf: 'center' }}>See more</button>
            </Link>
          </Col>
        </Row>
        <img src={restaurant.image} position='top' style={{ borderRadius: "1.2%", width: "100wh", minWidth:'400px', objectFit:'cover' }} alt={restaurant.title}></img>
      </div>



      <Link to={restaurant.socials}>
        <MDBCard className="mdb-card rounded" style={{ height: "540px", width: '400px' }}>
          <MDBCardImage src={restaurant.image} position='top' style={{ borderRadius: "1.2%", height: "260px", }} alt={restaurant.title} />
          <MDBCardBody>
            <MDBCardTitle>{restaurant.title}</MDBCardTitle>
            <MDBCardText>
              <div>Description: <br /> {restaurant.description}</div>
              <div>Location: <br /> {restaurant.location}</div>

            </MDBCardText>
            <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
              <Link to={restaurant.socials} >
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

export default Restaurant;
