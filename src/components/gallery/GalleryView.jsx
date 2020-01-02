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
                birthday={i.birthday}
                email={i.email}
                phone={i.phone}
                photos={i.photos}
                state={i.state}
                gender={i.gender}
                hair_color={i.hair_color}
                eye_color={i.eye_color}
                hair_length={i.hair_length}
                height_feet={i.height_feet}
                height_inches={i.height_inches}
                instagram={i.instagram}
                facebook={i.facebook}
                imdb={i.imdb}
                reel={i.reel}
                website={i.website}
                agency_name={i.agency_name}
                agent_name={i.agent_name}
                agent_email={i.agent_email}
                agent_phone={i.agent_phone}
                languages={i.languages}
                skills={i.skills}
                age_range={i.age_range}
                rating={i.rating}
                similar={i.similar}
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
