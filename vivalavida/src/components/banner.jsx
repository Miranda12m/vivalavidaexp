import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
    <MDBCarousel style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '750px', objectFit: 'fill' }}>
      <MDBCarouselItem itemId={1}>
        <img
          src='https://mdbootstrap.com/img/new/slides/041.jpg'
          className='d-block vw-100'
          alt='...'
          style={{ objectFit: 'cover', height: '750px' }}
        />
        
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img
          src='https://mdbootstrap.com/img/new/slides/042.jpg'
          className='d-block vw-100'
          alt='...'
          style={{ objectFit: 'cover', height: '750px' }}
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img
          src='https://mdbootstrap.com/img/new/slides/043.jpg'
          className='d-block vw-100'
          alt='...'
          style={{ objectFit: 'cover', height: '750px' }}
        />
      </MDBCarouselItem>

    </MDBCarousel>
   
     <div className="container" style={{ height: '100%', position: 'absolute', zIndex: '2', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
     <br></br>    <br></br>
     <br></br>    <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>

     <br></br>


          <div className="row">
            <div className="col-md-12 text-white text-center">
              <h1 className="m-b-20">
                <strong>VIVA LA VIDA<br />Mexico Experiences</strong>
              </h1>
              <p className="m-b-40">
                Embrace a one-of-a-kind experience in our cool and lively haven.
                <br />
                Unforgettable memories are made.
              </p>
              <p>
              <button type="button" class="btn btn-success">Book your adventure now!</button>
              </p>
            </div>
          </div>
        </div>
    </>
  );
}