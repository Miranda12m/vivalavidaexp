import React from 'react';
import Tour from '../components/Tour';
import tourData from '../staticdata';

function HomeScreen() {
  return (
    <div>
      <h1>Bolas de Mono</h1>
      {tourData.map((tour) => (
        <Tour key={tour.id} tour={tour} />
      ))}
    </div>
  );
}

export default HomeScreen;
