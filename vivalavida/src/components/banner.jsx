import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
    <MDBCarousel style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '750px', objectFit: 'fill' }}>
      <MDBCarouselItem itemId={1}>
        <img
          src='https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='d-block vw-100'
          alt='...'
          style={{ objectFit: 'cover', height: '750px' }}
        />
        
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img
          src='https://images.unsplash.com/photo-1535159530326-d7bf54bfb24e?q=80&w=1808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='d-block vw-100'
          alt='...'
          style={{ objectFit: 'cover', height: '750px' }}
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img
          src='https://images.unsplash.com/photo-1564762332974-5bf63a654c9d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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