import React, { Component } from "react";
import Gallery from "./gallery/Gallery";
import { getProjects } from "../services/fakeProjectService";

class Projects extends Component {
  state = { sort: "" };

  handleSortUpdate = sort => {
    console.log(sort);
    this.setState({ sort });
  };

  render() {
    return (
      <React.Fragment>
        <Gallery
          getContent={getProjects}
          onSortUpdate={this.handleSortUpdate}
          archive={true}
          newProject={true}
        />
      </React.Fragment>
    );
  }
}

export default Projects;
