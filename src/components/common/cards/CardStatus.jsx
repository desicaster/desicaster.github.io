import React from "react";
import { Progress } from "antd";

const CardStatus = ({ progress, todo }) => {
  return (
    <div>
      <hr className="my-2" />
      <p className="txt-sm text-secondary mb-2">Status</p>
      <Progress percent={progress} />
      <div className="input-group mt-2 input-group-sm">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
          </div>
        </div>

        <div className="form-control">{todo}</div>
      </div>
    </div>
  );
};

export default CardStatus;
