import React, { Component } from "react";
import { CardText, CardTitle } from "reactstrap";

class IPCardContent extends Component {
  render() {
    const { name, photos, projects, age_range, ethnicity, build } = this.props;
    return (
      <React.Fragment>
        <CardTitle>
          <h4>{name}</h4>
        </CardTitle>

        <div className="pb-3">
          {photos.map((p, idx) => (
            <img
              key={idx}
              className="actor-card-photo"
              src={p}
              alt={"this is the actor"}
            />
          ))}
        </div>

        <CardText className="m-0 txt-sm">
          Uploaded projects: {projects.length}
        </CardText>
        <CardText className="m-0 txt-sm">Age range: {age_range}</CardText>
        <CardText className="m-0 txt-sm">Ethnicity: {ethnicity}</CardText>
        <CardText className="m-0 txt-sm">Build: {build}</CardText>
        <hr className="my-2" />
      </React.Fragment>
    );
  }
}

export default IPCardContent;
