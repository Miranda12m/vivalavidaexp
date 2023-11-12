import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function Tour({ tour }) {
  return (
    <Card className="my-3 p-3 rounded" style={{ height: "480px" }}>
      <Link to={tour.url}>
        <Card.Img src={tour.image} alt={tour.title} />
      </Link>

      <Card.Body as="div">
        <Link to={tour.url}>
          <Card.Title>
            <strong>{tour.title}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div>Hour: {tour.hour}</div>
          <div>Duration: {tour.duration}</div>
          <div>Language: {tour.language}</div>
          <div>Meeting Point: {tour.meeting_point}</div>
          <div>Price: {tour.price}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Tour;
