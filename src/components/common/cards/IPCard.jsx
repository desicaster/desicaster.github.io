import React from "react";
import IPCardNav from "./IPCardNav";
import IPCardContent from "./IPCardContent";
import { Card, CardBody, Col } from "reactstrap";
import CardFoot from "./CardFoot";
import { Link } from "react-router-dom";

const IPCard = ({
  id,
  favorited,
  projects,
  workflow,
  first_name,
  last_name,
  birthday,
  email,
  phone,
  photos,
  state,
  gender,
  hair_color,
  eye_color,
  hair_length,
  height_feet,
  height_inches,
  instagram,
  facebook,
  imdb,
  reel,
  website,
  agency_name,
  agent_name,
  agent_email,
  agent_phone,
  languages,
  skills,
  age_range,
  rating,
  similar
}) => {
  return (
    <Col xl="4" lg="6" md="6">
      <Link
        className="IPCardLink"
        to={{
          pathname: "/ip/" + id,
          state: {
            workflow: workflow
          }
        }}
      >
        <Card className="shadow-sm text-left mb-4 IPCard border">
          <IPCardNav
            name={first_name + " " + last_name}
            birthday={birthday}
            email={email}
            state={state}
            id={id}
            rating={rating}
            favorited={favorited}
          />
          <CardBody>
            <IPCardContent
              photos={photos}
              age_range={age_range}
              reel={reel}
              height_feet={height_feet}
              height_inches={height_inches}
              skills={skills}
            />

            <CardFoot languages={languages} />
            {/*
            {status && workflow && (
              <CardStatus
                progress={parseInt((100 * (status - 1)) / workflow.length)}
                todo={workflow.length === 0 ? "" : workflow[status - 1].label}
              />
            )}
            */}
          </CardBody>
        </Card>
      </Link>
    </Col>
  );
};

export default IPCard;
