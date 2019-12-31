import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import { Button, Tooltip } from "antd";
import Back from "react-ionicons/lib/MdArrowBack";
import Contact from "react-ionicons/lib/MdMail";
import Similar from "react-ionicons/lib/MdBriefcase";
import License from "react-ionicons/lib/MdCart";
import PDF from "react-ionicons/lib/MdDocument";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { addIPToProject } from "../../services/fakeProjectService";
import SaveToProject from "../common/SaveToProject";

class IPNavBar extends Component {
  state = {};

  scrollBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  saveIP = project_id => {
    addIPToProject(this.props.ip.id, project_id);
  };

  render() {
    const { actor, onClick } = this.props;

    return (
      <div className="IPNav text-left">
        <Container className="py-2">
          <Row className="flex-sb flex-alic">
            <Button className="IPNavButton" onClick={onClick}>
              <Back color="black" className="mr-2" fontSize="16px" />
              <b>Back</b>
            </Button>
            <div className="flex flex-alic">
              <div>
                <div className="IPNavButtonBorder">
                  <CopyToClipboard text={actor.email}>
                    <Tooltip
                      placement="top"
                      trigger="click"
                      title="Copied email to clipboard!"
                    >
                      <Button className="IPNavButton btn-sm">
                        <Contact fontSize="16px" className="mr-2" />
                        Contact
                      </Button>
                    </Tooltip>
                  </CopyToClipboard>
                </div>

                <div className="IPNavButtonBorder">
                  <Button
                    className="IPNavButton btn-sm"
                    onClick={this.scrollBottom}
                  >
                    <Similar fontSize="16px" className="mr-2" />
                    Similar Actors
                  </Button>
                </div>
                <div className="IPNavButtonBorder">
                  <Button className="IPNavButton btn-sm">
                    <License fontSize="16px" className="mr-2" />
                    Express Casting
                  </Button>
                </div>
                <div className="IPNavButtonBorder">
                  <Button className="IPNavButton btn-sm">
                    <PDF fontSize="16px" className="mr-2" />
                    Download PDF
                  </Button>
                </div>

                <SaveToProject
                  onSuccess={this.saveIP}
                  icon={
                    <Button type="primary" className="btn-sm btn-dark ml-3">
                      Save Profile
                    </Button>
                  }
                />
              </div>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default IPNavBar;
