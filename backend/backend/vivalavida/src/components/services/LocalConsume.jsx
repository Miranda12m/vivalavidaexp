import React from "react";
import { Link } from "react-router-dom";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit';

function LocalConsume({ localconsume}) {
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

      
        <Link to={localconsume.socials}>
          <MDBCard className="mdb-card rounded" style={{ height: "540px", width: '400px' }}>
            <MDBCardImage src={localconsume.image} position='top' style={{ borderRadius: "6.6%", height: "260px" }} alt={localconsume.title} />
            <MDBCardBody>
              <MDBCardTitle>{localconsume.title}</MDBCardTitle>
              <MDBCardText>
                <div>Description: <br /> {localconsume.description}</div>
                <div>Location: <br /> {localconsume.location}</div>
            
              </MDBCardText>
              <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                <Link  to={localconsume.socials} >
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

export default LocalConsume;
