import React from "react";
import { Link } from "react-router-dom";
import { Col, Row  } from "react-bootstrap";


function Coworking({ coworking}) {
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

        <div style={{ borderBottom: '1px solid #2f2f2f' }}>
          <h2 style={{ marginLeft: '10%', marginRight: '10%', marginTop:'15px' }} ><strong>{coworking.title}</strong></h2>
          <p style={{ marginLeft: '10%', marginRight: '10%' }}>{coworking.description}</p>
          <Row style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '10%', marginRight: '10%', alignItems: 'center' }}>
            <Col>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16" style={{ marginRight: '4px' }}>
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <span style={{ marginLeft: '10px' }}>{coworking.location}</span>
            </Col>
          </Row>
          <br />
          <div style={{ textAlign: 'center' }}>
            <img
              src={coworking.image}
              style={{ borderRadius: "1.2%", width: "70%", minWidth: '310px', objectFit: 'cover', height: '40vh', marginBottom: '30px', marginLeft: '30px', marginRight:'30px', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)' }}
              alt={coworking.title}
            />
          </div>
          <Link to={coworking.socials} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary button-hover" type="button" style={{ display: 'block', margin: 'auto' }}>See more</button>
          </Link>
          <br></br>
        </div>
    </>
  );
}

export default Coworking;
