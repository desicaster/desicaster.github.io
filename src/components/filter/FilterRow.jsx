import React, { Component } from "react";
import DropdownField from "../common/DropdownField";
import { Row } from "reactstrap";
import { Select } from "antd";
import Trash from "react-ionicons/lib/MdTrash";

class FilterRow extends Component {
  state = { showTrash: false, condition: "", activeValues: [""] };

  componentDidMount() {
    this.updateValuesFromProps();
  }

  updateValuesFromProps() {
    const { conditions, activeValues } = this.props;
    const condition = conditions.length > 0 ? conditions[0] : "";
    this.setState({ condition, activeValues });
  }

  updateCondition = condition => {
    this.setState({ condition });
    const { category, type } = this.props;
    const { activeValues } = this.state;
    this.props.handleUpdate(category, type, condition, activeValues);
    this.hideTrash();
  };

  updateSingleValue = value => {
    const activeValues = [value];
    this.setState({ activeValues });
    const { category, type } = this.props;
    const { condition } = this.state;
    this.props.handleUpdate(category, type, condition, activeValues);
    this.hideTrash();
  };

  updateMultiValues = activeValues => {
    this.setState({ activeValues });
    const { category, type } = this.props;
    const { condition } = this.state;
    this.props.handleUpdate(category, type, condition, activeValues);
    this.hideTrash();
  };

  showTrash = () => {
    this.setState({ showTrash: true });
  };

  hideTrash = () => {
    this.setState({ showTrash: false });
  };

  renderValuesField() {
    const { Option } = Select;

    if (this.state.condition !== "" && this.state.condition.includes("blank")) {
      return null;
    } else if (
      this.state.condition !== "" &&
      this.state.condition.includes(" of")
    ) {
      return (
        <div style={{ minWidth: "10rem" }} className="ml-2">
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            className="shadow-sm"
            defaultValue={this.state.activeValues}
            onChange={this.updateMultiValues}
            size="large"
          >
            {this.props.values.map(v => (
              <Option key={v.toString(36)}>{v}</Option>
            ))}
          </Select>
        </div>
      );
    } else {
      return (
        <div className="rounded mx-2 shadow-sm">
          <DropdownField
            values={this.props.values.filter(f => {
              return f !== this.state.activeValues[0];
            })}
            current={this.state.activeValues[0]}
            handleSelect={this.updateSingleValue}
            classValue={"filterValue"}
            capitalize={true}
          />
        </div>
      );
    }
  }

  render() {
    const { category, type, conditions, handleDelete } = this.props;

    return (
      <React.Fragment>
        <Row
          className="mb-3"
          onMouseEnter={this.showTrash}
          onMouseLeave={this.hideTrash}
        >
          <div className="filterRowRelativePositioner">
            <div className="flex filterRowContainer">
              <div className="filterConnection"></div>
              <div className="filterConnectionVert"></div>
              <div className="filterCategory shadow">{category}</div>
              <div className="filterType shadow">{type}</div>

              {this.state.condition !== "" &&
                this.props.conditions.length === 1 && (
                  <div className="filterCondition shadow">
                    {this.state.condition}
                  </div>
                )}

              {this.state.condition !== "" && this.props.conditions.length > 1 && (
                <div className="rounded mx-2 shadow">
                  <DropdownField
                    values={conditions.filter(f => {
                      return f !== this.state.condition;
                    })}
                    current={this.state.condition}
                    handleSelect={this.updateCondition}
                    classValue={"filterConditions"}
                    capitalize={false}
                  />
                </div>
              )}

              {this.renderValuesField()}
              <div>
                <button
                  className={
                    this.state.showTrash
                      ? "btn filterDelete"
                      : "btn filterDelete o-0"
                  }
                >
                  <Trash onClick={() => handleDelete(type)} />
                </button>
              </div>
            </div>
          </div>
        </Row>
      </React.Fragment>
    );
  }
}

export default FilterRow;
