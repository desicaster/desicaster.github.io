import React from "react";
import { Container, Row } from "reactstrap";
import { Button } from "antd";
import Back from "react-ionicons/lib/MdArrowBack";
import Similar from "react-ionicons/lib/MdBriefcase";
import PDF from "react-ionicons/lib/MdDocument";
import NewSectionModal from "./modals/NewSectionModal";
import WorkflowModal from "./modals/WorkflowModal";

const ProjectNavBar = ({
  project,
  onBackClick,
  onStatusWorkflowClick,
  onWorkflowUpdate,
  workflow,
  onNewSectionAdd
}) => {
  function scrollBottom() {
    window.scrollTo(0, document.body.scrollHeight);
    console.log("scrolled");
  }

  return (
    <div className="text-left shadow-lg py-2">
      <Container>
        <Row className="flex-sb flex-alic">
          <Button className="IPNavButton" onClick={onBackClick}>
            <Back color="black" className="mr-2" fontSize="16px" />
            <b>Back</b>
          </Button>
          <div className="flex flex-alic">
            <div>
              <div className="IPNavButtonBorder">
                <WorkflowModal
                  workflow={workflow}
                  onWorkflowUpdate={onWorkflowUpdate}
                />
              </div>
              <div className="IPNavButtonBorder">
                <NewSectionModal
                  projectID={project.id}
                  onNewSection={onNewSectionAdd}
                />
              </div>
              <div className="IPNavButtonBorder">
                <Button className="IPNavButton btn-sm" onClick={scrollBottom}>
                  <Similar fontSize="16px" className="mr-2" />
                  Similar Actors
                </Button>
              </div>
              <div className="IPNavButtonBorder">
                <Button className="IPNavButton btn-sm">
                  <PDF fontSize="16px" className="mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectNavBar;
