import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import tourData from "../staticdata";

function Product({ product }) {
  return (
    <Card className="border-success mb-3" style={{ maxWidth: "20rem" }}>
      <div className="card-header">{tourData.name}</div>
      <div className="card-body">
        <Link to={`#`}>
          <Card.Title>
            <h4 className="card-title">{tourData.name}</h4>
          </Card.Title>
        </Link>

        <Card.Text>
          <p className="card-text">{tourData.description}</p>
        </Card.Text>
      </div>
    </Card>
  );
}

export default Product;
