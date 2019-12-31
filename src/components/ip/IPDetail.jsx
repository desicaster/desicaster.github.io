import React from "react";
import { Col } from "reactstrap";

const IPDetail = ({ name, photos, rating }) => {
  return (
    <Col lg="8" className="mb-3">
      <h3 className="text-left py-2">{name}</h3>

      {photos.map(p => (
        <img src={p} alt={"This is a thing"} />
      ))}
    </Col>
  );
};

export default IPDetail;
