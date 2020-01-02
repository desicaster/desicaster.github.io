import React, { Component } from "react";
import { getProject } from "../services/fakeProjectService";
import { Redirect } from "react-router-dom";
import ProjectNavBar from "./project/ProjectNavBar";
import ProjectDetail from "./project/ProjectDetail";
import ProjectHighlights from "./project/ProjectHighlights";
import { Container, Row, Col } from "reactstrap";
import Gallery from "./gallery/Gallery";
import ProjectSearches from "./project/ProjectSearches";
import ProjectScouts from "./project/ProjectScouts";
import IPSimilar from "./ip/IPSimilar";
import { updateWorkflow } from "../services/fakeProjectService";

import axios from "axios";

class ProjectPage extends Component {
  state = {
    showWorkflow: false,
    showSection: false,
    workflow: [],
    addedSections: [],
    actors: []
  };

  async componentDidMount() {
    const project_id = this.props.match.params.id;
    const project = getProject(project_id);
    if (!project) {
      return <Redirect to="/not-found" />;
    }

    this.setState({ workflow: project.workflow });

    const response = await axios.post(
      "https://desicaster.herokuapp.com/api/actors",
      {
        query: project.ip
      }
    );
    console.log(project.ip);
    const actors = response.data;
    console.log(actors);
    if (typeof actors === undefined) {
      return [];
    }
    this.setState({ actors });
  }

  toggleWorkflow = () => {
    this.setState({ showWorkflow: !this.state.showWorkflow });
  };

  toggleSection = () => {
    this.setState({ showSection: !this.state.showSection });
  };

  handleClick = () => {
    this.props.history.goBack();
  };

  handleWorkflowUpdate = workflow => {
    updateWorkflow(workflow, this.props.match.params.id);
    this.setState({ workflow });
    console.log(workflow);
  };

  handleAddSection = newSection => {
    const sections = [...this.state.addedSections, newSection];
    this.setState({ addedSections: sections });
  };

  render() {
    const project_id = this.props.match.params.id;
    const project = getProject(project_id);
    if (!project) {
      return <Redirect to="/not-found" />;
    }

    const allSections = [...project.collections, ...this.state.addedSections];

    return (
      <React.Fragment>
        <ProjectNavBar
          project={project}
          onBackClick={this.handleClick}
          onStatusWorkflowClick={this.toggleWorkflow}
          onWorkflowUpdate={this.handleWorkflowUpdate}
          workflow={this.state.workflow}
          onNewSectionClick={this.toggleSection}
          onNewSectionAdd={this.handleAddSection}
        />
        <div className="project-info">
          <Container className="pt-4">
            <Row>
              <Col lg="8" className="mb-3">
                <ProjectDetail
                  projectTitle={project.projectTitle}
                  projectDescription={project.projectDescription}
                />
                {allSections.map(c => (
                  <ProjectDetail
                    projectTitle={c.heading}
                    projectDescription={c.body}
                  />
                ))}
                <ProjectSearches searches={project.searches} />
                <ProjectScouts scouts={project.scouts} />
              </Col>
              <ProjectHighlights
                scouts={project.scouts.map(s => s.name)}
                tags={project.tags.map(t => (
                  <a href="https://www.google.com">{t}</a>
                ))}
                savedIP={project.ip.length}
                lastUpdate={project.lastUpdate}
                status={project.archived}
              />
            </Row>
          </Container>
        </div>
        <Gallery
          title="Saved Actors"
          getContent={() => this.state.actors}
          workflow={this.state.workflow}
        />
        <IPSimilar similarIDs={project.similar} />
      </React.Fragment>
    );
  }
}

export default ProjectPage;
