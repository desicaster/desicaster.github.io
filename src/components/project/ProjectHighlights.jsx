import React from "react";
import { CardHeader, CardBody, Card, Container, Col, Row } from "reactstrap";
import TableSection from "../common/TableSection";

const ProjectHighlights = ({ scouts, tags, savedIP, lastUpdate, status }) => {
  return (
    <Col lg="4">
      <Card className="shadow-sm text-left mb-4">
        <CardHeader>
          <h4>Highlights</h4>
        </CardHeader>
        <CardBody>
          <Container fluid={true} className="px-0">
            <Row>
              <Col md="12" sm="6">
                <TableSection title="Scouts" content={scouts} />
                <hr />
              </Col>
              <Col md="12" sm="6">
                <TableSection title="Tags" content={tags} />
                <hr />
              </Col>
              <Col md="12" sm="6">
                <div>
                  <h6>Saved Actors</h6>{" "}
                  <p className="mb-0" style={{ fontSize: "12px" }}>
                    {savedIP + " actors"}
                  </p>
                  <p className="mb-0" style={{ fontSize: "12px" }}>
                    {"Last updated " + lastUpdate}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectHighlights;
