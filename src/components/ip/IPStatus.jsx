import React from "react";
import { Container } from "reactstrap";
import { Progress } from "antd";

const IPStatus = ({ statusUpdates, status, workflow }) => {
  let progress = undefined;
  let todo = undefined;

  if (workflow.length !== 0) {
    progress = parseInt((100 * (status - 1)) / workflow.length);
    todo = workflow[status - 1].label;
  }

  return (
    <div className="IPstatus py-4">
      <Container>
        <h3 className="text-left text-white">Status</h3>

        {progress && <Progress prercent={progress} showInfo={false} />}
        {todo && (
          <div className="input-group mt-2 input-group-sm w-100 mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
              </div>
            </div>

            <div className="form-control text-left">{"Up Next: " + todo}</div>
          </div>
        )}
        {statusUpdates.map(function(s, index) {
          return (
            <div className="text-left pb-1" key={index}>
              {"- " + s}
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default IPStatus;
