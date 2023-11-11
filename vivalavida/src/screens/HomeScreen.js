import React from 'react';
import Tour from '../components/Tour';
import tourData from '../staticdata';
import Carousel from '../components/banner';
function HomeScreen() {
  return (
    <div>
      <Carousel/>
      <h1>Bolas de Mono</h1>
      {tourData.map((tour) => (
        <Tour key={tour.id} tour={tour} />
      ))}
    </div>
  );
}

export default HomeScreen;
