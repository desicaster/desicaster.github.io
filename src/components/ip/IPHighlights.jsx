import React from "react";
import { CardHeader, CardBody, Card, Container, Col, Row } from "reactstrap";
import TableSection from "../common/TableSection";

const IPHighlights = ({
  languages,
  projects,
  contact,
  age,
  build,
  ethnicity
}) => {
  return (
    <Col lg="4">
      <Card className="shadow text-left">
        <CardHeader>
          <h4>Highlights</h4>
        </CardHeader>
        <CardBody>
          <Container fluid={true} className="px-0">
            <Row>
              <Col lg="12" m="3">
                <TableSection title="About" content={[age, build, ethnicity]} />
                <hr />
              </Col>
              <Col lg="12" m="3">
                <TableSection title="Past Projects" content={projects} />
                <hr />
              </Col>
              <Col lg="12" m="3">
                <TableSection title="Languages" content={languages} />
                <hr />
              </Col>
              <Col lg="12" m="3">
                <TableSection title="Contact" content={[contact]} />
                <hr />
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    </Col>
  );
};

export default IPHighlights;
