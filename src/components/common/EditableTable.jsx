import React from "react";
import { Table, Input, Button, Popconfirm, Form } from "antd";

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`
            }
          ],
          initialValue: record[dataIndex]
        })(
          <Input
            ref={node => (this.input = node)}
            onPressEnter={this.save}
            onBlur={this.save}
          />
        )}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Workflow Items",
        dataIndex: "label",
        editable: true,
        width: "75%"
      },
      {
        dataIndex: "operation",
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="Are you sure?"
              onConfirm={() => this.handleDelete(record.id)}
            >
              <a>Delete</a>
            </Popconfirm>
          ) : null
      }
    ];
  }

  state = {};

  update(data) {
    this.props.onDataUpdate(data);
    this.setState({ dataSource: data });
  }

  componentDidMount() {
    const dataSource = this.props.dataSource;
    this.update(dataSource);
  }

  handleDelete = id => {
    const dataSource = [...this.state.dataSource];
    this.update(dataSource.filter(item => item.id !== id));
  };

  handleAdd = () => {
    const { dataSource } = this.state;
    const allIds = dataSource.map(d => parseInt(d.id));
    const nextId = Math.max.apply(Math, allIds) + 1;
    const newData = {
      id: nextId,
      label: `New WorkFlow Item`
    };
    this.update([...dataSource, newData]);
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.id === item.id);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row
    });
    this.update(newData);
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave
        })
      };
    });
    return (
      <div>
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          pagination={false}
          columns={columns}
          size="middle"
        />
        <Button onClick={this.handleAdd} type="primary" className="mt-3">
          New Workflow Item
        </Button>
      </div>
    );
  }
}

export default EditableTable;
