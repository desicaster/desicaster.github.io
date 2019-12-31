import React from "react";
import Form from "../../common/form";
import Joi from "joi-browser";
import { addWorkflowItem } from "../../../services/fakeProjectService";

class WorkflowForm extends Form {
  state = {
    data: { id: "placeholder", label: "" },
    errors: {}
  };

  schema = {
    label: Joi.string()
      .required()
      .label("Label"),
    id: Joi.string()
  };

  doSubmit = () => {
    const p = addWorkflowItem(this.state.data);
    this.props.addedItems(p);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInputGroup("label", "Create new item", "Add")}
        </form>
      </div>
    );
  }
}

export default WorkflowForm;
