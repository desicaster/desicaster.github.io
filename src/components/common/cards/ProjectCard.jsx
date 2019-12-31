import React from "react";
import ProjectCardNav from "./ProjectCardNav";
import ProjectCardContent from "./ProjectCardContent";
import { Card, CardHeader, Col, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const ProjectCard = ({
  publishDate,
  lastUpdate,
  projectTitle,
  projectDescription,
  scouts,
  count,
  id,
  onDeleteProject,
  archived
}) => {
  return (
    <Col xl="4" lg="6" md="6">
      <Link className="IPCardLink" to={"/project/" + id}>
        <Card className="shadow-sm text-left mb-4 projectCard">
          <CardHeader>
            <ProjectCardNav
              archived={archived}
              publishDate={publishDate}
              lastUpdate={lastUpdate}
              id={id}
              onDeleteProject={onDeleteProject}
            />
          </CardHeader>
          <CardBody>
            <ProjectCardContent
              projectTitle={projectTitle}
              projectDescription={projectDescription}
              scouts={scouts.map(s => s.name)}
              count={count}
            />
          </CardBody>
        </Card>
      </Link>
    </Col>
  );
};

export default ProjectCard;
