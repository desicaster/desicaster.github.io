import React, { Component } from "react";
import { CardText } from "reactstrap";

class IPCardContent extends Component {
  pretty_age_range(age_range) {
    const first = age_range[0].split("-")[0];
    const last = age_range[age_range.length - 1];

    if (last.includes("+")) {
      return first + "+";
    }
    return first + " to " + last.split("-")[1];
  }

  render() {
    const { photos, age_range, height_feet, height_inches, reel } = this.props;
    return (
      <React.Fragment>
        <div className="pb-3">
          {photos.slice(0, 3).map((p, idx) => (
            <img
              height="175"
              key={idx}
              className="actor-card-photo"
              src={p}
              alt={"this is the actor"}
            />
          ))}
        </div>

        <CardText className="m-0 txt-sm">
          Age range: {this.pretty_age_range(age_range)}
        </CardText>
        <CardText className="m-0 txt-sm">
          Height: {height_feet}'{height_inches}"
        </CardText>
        <CardText className="m-0 txt-sm">
          Reel: {reel ? reel : "None added"}
        </CardText>
        <hr className="my-2" />
      </React.Fragment>
    );
  }
}

export default IPCardContent;
