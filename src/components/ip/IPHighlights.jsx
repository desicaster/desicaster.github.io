import React from "react";
import { CardHeader, CardBody, Card, Container, Col, Row } from "reactstrap";
import TableSection from "../common/TableSection";

const IPHighlights = ({
  email,
  phone,
  height,
  gender,
  hair,
  eyes,
  languages,
  age,
  instagram,
  facebook,
  imdb,
  reel,
  agency,
  website
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
                <TableSection title="Contact" content={[email, phone]} />
                <hr />
              </Col>
              <Col lg="12" m="3">
                <TableSection title="Agency" content={agency} />
                <hr />
              </Col>
              <Col lg="12" m="3">
                <TableSection
                  title="Appearance"
                  content={[gender, hair, eyes, height]}
                />
                <hr />
              </Col>
              <Col lg="12" m="3">
                <TableSection title="Languages" content={languages} />
                <hr />
              </Col>
              <Col lg="12" m="3">
                <TableSection
                  title="Links"
                  content={[facebook, instagram, imdb, reel, website]}
                />
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
