import React from "react";
import { Button, Form, Modal } from "antd";
import EditableTable from "../../common/EditableTable";
import WorkFlow from "react-ionicons/lib/MdCheckboxOutline";

const CreateWorkflowForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, workflow } = this.props;

      return (
        <Modal
          visible={visible}
          title="Status Workflow"
          okText="Create"
          footer={null}
          onCancel={onCancel}
        >
          <EditableTable
            onDataUpdate={this.props.onWorkflowUpdate}
            dataSource={workflow}
          />
        </Modal>
      );
    }
  }
);

class WorkflowModal extends React.Component {
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

      console.log("Received values of form: ", values);
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
          <WorkFlow className="mr-2" color="white" fontSize="16px"></WorkFlow>{" "}
          Casting Workflow
        </Button>
        <CreateWorkflowForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          onWorkflowUpdate={this.props.onWorkflowUpdate}
          workflow={this.props.workflow}
        />
      </div>
    );
  }
}

export default WorkflowModal;
