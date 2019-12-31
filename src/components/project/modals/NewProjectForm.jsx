import React from "react";
// import Form from "../common/form";
import Joi from "joi-browser";
import { Form, Input, Select, Button } from "antd";

class NewProjectForm extends Form {
  state = {
    data: {
      title: "",
      disc: ""
    },
    scouts: [
      { id: "1", name: "John Doe" },
      { id: "2", name: "Jane Doe" },
      { id: "3", name: "David Doe" }
    ],
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    disc: Joi.string()
      .required()
      .label("Description"),
    scouts: Joi.string()
  };

  doSubmit = () => {};

  render() {
    const { TextArea } = Input;
    const { Option } = Select;
    const scouts = this.state.scouts;
    const children = [];

    for (let i = 10; i < 36; i++) {
      children.push(
        <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
      );
    }

    function handleChange(value) {
      console.log(`selected ${value}`);
    }

    return (
      <div className="p-3">
        <Form onSubmit={this.handleSubmit}>
          <h5>New Project</h5>
          <hr />
          <Form.Item>
            <Input placeholder="Title" size="large" />
          </Form.Item>
          <Form.Item>
            <TextArea
              rows={8}
              placeholder="Description"
              autoSize={{ minRows: 6, maxRows: 10 }}
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Select mode="multiple" placeholder="Assigned Scouts" size="large">
              {scouts.map(s => (
                <Option value={s.id}>{s.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder="Tags"
              onChange={handleChange}
              size="large"
            >
              {children}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Create Project
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default NewProjectForm;
