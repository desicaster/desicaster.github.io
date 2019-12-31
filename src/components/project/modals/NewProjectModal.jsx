import React from "react";
import { Button, Modal, Form, Input, Select } from "antd";
import { createProject } from "../../../services/fakeProjectService";

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    state = {
      options: [{ id: "1", name: "john doe" }]
    };

    render() {
      const { Option } = Select;
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const { TextArea } = Input;
      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Title">
              {getFieldDecorator("title", {
                rules: [
                  {
                    required: true,
                    message: "Please input the title of collection!"
                  }
                ]
              })(<Input placeholder="Title" />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator("description", {
                rules: [
                  {
                    required: true,
                    message: "Please input a description"
                  }
                ]
              })(
                <TextArea
                  placeholder="Description"
                  autoSize={{ minRows: 6, maxRows: 10 }}
                  size="large"
                />
              )}
            </Form.Item>
            <Form.Item label="Scouts">
              {getFieldDecorator("Scouts", {
                rules: [
                  {
                    required: true,
                    message: "Please assign at least one scout"
                  }
                ]
              })(
                <Select
                  mode="multiple"
                  style={{ width: "100%" }}
                  placeholder="Assign Scouts"
                  defaultValue={["a10", "c12"]}
                  // onChange={handleChange}
                >
                  {this.state.options.map(o => (
                    <Option key={o.id}>{o.name}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class NewProjectModal extends React.Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      let new_project = createProject(
        values.title,
        values.description,
        values.Scouts
      );
      this.props.onNewProject(new_project);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          + New Audition
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default NewProjectModal;
