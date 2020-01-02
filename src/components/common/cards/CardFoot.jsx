import React, { Component } from "react";
import { Container, Row, Col, CardText } from "reactstrap";

class CardFoot extends Component {
  shortenTags = tags => {
    if (tags.length > 4) {
      const shortTags = tags.slice(0, 4);
      const returnedTags = [...shortTags, "..."];
      return returnedTags;
    } else {
      return tags;
    }
  };

  render() {
    const { languages } = this.props;
    return (
      <Container fluid={true} className="p-0">
        <Row>
          <Col>
            <div>
              <CardText className="tags">
                Languages ({languages.length}):
              </CardText>

              <ul className="tags">
                <p>
                  {this.shortenTags(languages).reduce((result, item) => {
                    if (item !== "...") {
                      return result + ", " + item;
                    } else {
                      return result + item;
                    }
                  })}
                </p>
              </ul>
            </div>
          </Col>
          {/*
          <Col>
            {scout && (
              <div>
                <CardText className="txt-sm text-secondary">
                  Assigned to
                </CardText>
                <ScoutView person={scout} />
              </div>
            )}
          </Col>
          */}
        </Row>
      </Container>
    );
  }
}

export default CardFoot;
