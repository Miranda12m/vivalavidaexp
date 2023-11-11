import React from 'react'

function HomeScreen() {
  return (
    <>
    <div>HomeScreen</div>
    
    <div>
      <h1>Bolas de Mono</h1>
      {tourData.map((tour) => (
        <Tour key={tour.id} tour={tour} />
      ))}
    </div>
  )
}

export default HomeScreen;
