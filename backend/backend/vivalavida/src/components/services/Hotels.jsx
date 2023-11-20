import React from "react";
import { Link } from "react-router-dom";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit';

function Hotels({ hotels}) {
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

      
        <Link to={hotels.socials}>
          <MDBCard className="mdb-card rounded" style={{ height: "540px", width: '400px' }}>
            <MDBCardImage src={hotels.image} position='top' style={{ borderRadius: "1.2%", height: "260px" }} alt={hotels.title} />
            <MDBCardBody>
              <MDBCardTitle>{hotels.title}</MDBCardTitle>
              <MDBCardText>
                <div>Description: <br /> {hotels.description}</div>
                <div>Location: <br /> {hotels.location}</div>
            
              </MDBCardText>
              <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                <Link  to={hotels.socials} >
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

export default Hotels;
