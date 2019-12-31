import React from "react";
import { Modal, Form, Input, Button } from "antd";
import NewSection from "react-ionicons/lib/MdFiling";
import { addProjectSection } from "../../../services/fakeProjectService";

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
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
                    message: "Please input the title of project!"
                  }
                ]
              })(<Input />)}
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
                  rows={8}
                  placeholder="Description"
                  autoSize={{ minRows: 6, maxRows: 10 }}
                  size="large"
                />
              )}
            </Form.Item>
            <Form.Item></Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class NewSectionModal extends React.Component {
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

      const newSection = addProjectSection(this.props.projectID, values.title, values.description);
      this.props.onNewSection(newSection)
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
          <NewSection
            fontSize="16px"
            className="mr-2"
            color="white"
          ></NewSection>
          New Collection
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

export default NewSectionModal;
