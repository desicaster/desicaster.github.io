import React from "react";
import IPCard from "../common/cards/IPCard";
import ProjectCard from "../common/cards/ProjectCard";
import { Container, Row } from "reactstrap";

const GalleryView = ({ content, workflow, onDeleteProject }) => {
  return (
    <div>
      <Container fluid={true}>
        <Row>
          {content[0] &&
            "first_name" in content[0] &&
            content.map(i => (
              <IPCard
                key={i.id}
                id={i.id}
                first_name={i.first_name}
                last_name={i.last_name}
                email={i.email}
                ethnicity={i.ethnicity}
                build={i.build}
                languages={i.languages}
                birthday={i.birthday}
                minimum_age={i.minimum_age}
                maximum_age={i.maximum_age}
                photos={i.photos}
                rating={i.rating}
                projects={i.projects}
                workflow={workflow}
              />
            ))}
          {content[0] &&
            "projectTitle" in content[0] &&
            content.map(i => (
              <ProjectCard
                key={i.id}
                id={i.id}
                projectTitle={i.projectTitle}
                projectDescription={i.projectDescription}
                lastUpdate={i.lastUpdate}
                publishDate={i.publishDate}
                scouts={i.scouts}
                archived={i.archived}
                count={i.count}
                onDeleteProject={onDeleteProject}
              />
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default GalleryView;
