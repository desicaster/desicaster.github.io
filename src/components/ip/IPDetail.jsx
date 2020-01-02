import React from "react";
import { Col } from "reactstrap";

const IPDetail = ({ name, photos, state, skills, rating }) => {
  return (
    <Col lg="8" className="mb-3">
      <h3 className="text-left py-2">{name}</h3>
      <p>Current state: {state}</p>

      {photos.map(p => (
        <img
          width="300"
          src={p}
          style={{ "padding-left": "40px" }}
          alt={"This is a thing"}
        />
      ))}

      <p style={{ "padding-top": "100px" }}>
        Skills: {skills === "" ? "No skills added" : skills}
      </p>
    </Col>
  );
};

export default IPDetail;
