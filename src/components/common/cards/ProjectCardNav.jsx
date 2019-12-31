import React, { Component } from "react";
import { Button } from "reactstrap";
import Archive from "react-ionicons/lib/MdArchive";
import Trash from "react-ionicons/lib/MdTrash";
import {
  archiveProject,
  unarchiveProject,
  deleteProject
} from "../../../services/fakeProjectService";

class ProjectCardNav extends Component {
  state = {};

  onTrash(project_id, e) {
    e.preventDefault();
    const deleted_id = deleteProject(project_id);
    if (deleted_id !== "-1") {
      this.props.onDeleteProject(deleted_id);
    }
  }

  handleArchiveProject(id, e) {
    e.preventDefault();
    archiveProject(id);
  }

  handleUnarchiveProject(id, e) {
    e.preventDefault();
    unarchiveProject(id);
  }

  render() {
    const { publishDate, lastUpdate, archived, id } = this.props;
    return (
      <React.Fragment>
        <div className="flex-sb flex-alic">
          <p
            className="mb-0 mt-1 font-weight-normal"
            style={{ fontSize: "smaller" }}
          >
            Created {publishDate} <br />
            Last update: {lastUpdate}
          </p>

          <div className="text-right">
            {!archived && (
              <Button
                onClick={e => this.handleArchiveProject(id, e)}
                className="bg-transparent border-0 p-0 mr-3"
              >
                <Archive></Archive>
              </Button>
            )}

            {archived && (
              <React.Fragment>
                <Button
                  onClick={e => this.handleUnarchiveProject(id, e)}
                  className="bg-transparent border-0 p-0 mr-3"
                >
                  <Archive></Archive>
                </Button>
                <Button
                  onClick={e => this.onTrash(id, e)}
                  className="bg-transparent border-0 p-0"
                >
                  <Trash></Trash>
                </Button>
              </React.Fragment>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectCardNav;
