import React, { Component } from "react";
import { getAllProjects } from "../../services/fakeProjectService";
import { Popover, Button } from "antd";

class SaveToProject extends Component {
  state = { showProjectsModal: false };

  hideProjectsModal = () => {
    this.setState({ showProjectsModal: false });
  };

  handleProjectsModalVisibleChange = showProjectsModal => {
    this.setState({ showProjectsModal });
  };

  handleProjectClick(project_id, e) {
    e.preventDefault();
    this.props.onSuccess(project_id);
    this.hideProjectsModal();
  }

  render() {
    const allProjects = getAllProjects().map(p => (
      <Button
        className="d-block w-100 mb-2"
        key={p.id}
        onClick={e => this.handleProjectClick(p.id, e)}
      >
        {p.projectTitle}
      </Button>
    ));

    const { icon } = this.props;

    return (
      <Popover
        arrowPointAtCenter
        placement="bottomRight"
        title="Projects"
        trigger="click"
        style={{ maxHeight: "150px", overflowY: "scroll" }}
        content={allProjects}
        visible={this.state.showProjectsModal}
        onVisibleChange={this.handleProjectsModalVisibleChange}
      >
        {icon}
      </Popover>
    );
  }
}

export default SaveToProject;
