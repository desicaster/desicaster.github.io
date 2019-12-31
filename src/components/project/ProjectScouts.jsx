import React from "react";
import ScoutView from "../common/ScoutView";
import { Container, Row, Col, Button } from "reactstrap";
import Edit from "react-ionicons/lib/MdCreate";

const ProjectScouts = ({ scouts }) => {
  return (
    <React.Fragment>
      <div className="text-left pt-4">
        <div className="flex flex-alic m-0">
          <h4 className="mb-0">Assigned Scouts</h4>
          <Button className="bg-transparent border-0 ml-2 py-0">
            <Edit fontSize="16px"></Edit>
          </Button>
        </div>
        <div className="pt-3">
          <Container fluid="true" className="p-0">
            <Row>
              {scouts.map(s => (
                <Col xl="4" md="6" sm="12">
                  <ScoutView key={s.id} person={s} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectScouts;
