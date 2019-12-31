import React, { Component } from "react";
import { CardTitle } from "reactstrap";

class ProjectCardContent extends Component {
  render() {
    const { projectTitle, projectDescription, scouts, count } = this.props;
    return (
      <React.Fragment>
        <CardTitle>
          <h6>{projectTitle}</h6>
        </CardTitle>

        <div className="m-0" style={{ fontSize: "smaller" }}>
          <div className="pb-3">
            <p>{projectDescription}</p>
          </div>
          <h6>Scouts</h6>
          <div className="pb-3">
            {scouts.map(s => (
              <div key={s}>
                <span>- {s}</span>
              </div>
            ))}
          </div>

          <div>
            <p className="mb-0">{count} actors scouted</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectCardContent;
