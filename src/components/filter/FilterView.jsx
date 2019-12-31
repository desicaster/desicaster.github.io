import React, { Component } from "react";
import FilterRow from "./FilterRow";
import FilterModal from "./FilterModal";
import { Container, Row } from "reactstrap";
import AddIcon from "react-ionicons/lib/MdAdd";
import axios from "axios";

class FilterView extends Component {
  state = { show: false };

  toggleModal = () => {
    this.setState({ show: !this.state.show });
  };

  updatedFilter = (category, type, condition, values) => {
    let filters = [...this.props.filters];
    const idx = filters.findIndex(f => f.type === type);

    filters[idx].condition = condition;
    filters[idx].activeValues = values;

    this.props.setFilters(filters);
  };

  addFilter = async type => {
    const response = await axios.get(
      "http://127.0.0.1:4433/api/filter/" + type
    );
    const retrieved = response.data;

    const currentFiltersOfSameType = this.props.filters.map(f => f.type);

    // if the new filter doesn't exist or the filter is already created, then return
    if (
      typeof retrieved === undefined ||
      currentFiltersOfSameType.indexOf(type) > -1
    ) {
      return;
    }

    let newFilter = { ...retrieved };
    newFilter["condition"] =
      newFilter.conditions.length === 0 ? "" : newFilter.conditions[0];
    newFilter["activeValues"] = [newFilter.values[0]];

    // add the new filter to the filters object
    const filters = [...this.props.filters, newFilter];
    this.props.setFilters(filters);
  };

  removeFilter = type => {
    const filters = this.props.filters.filter(f => {
      return f.type !== type;
    });
    this.props.setFilters(filters);
  };

  render() {
    const { filters } = this.props;
    return (
      <div className="p-4">
        <FilterModal
          show={this.state.show}
          toggleModal={this.toggleModal}
          addFilter={this.addFilter}
        />
        <Container fluid={true}>
          {filters.map(filter => (
            <FilterRow
              key={filter.type}
              category={filter.category}
              type={filter.type}
              conditions={filter.conditions}
              values={filter.values}
              activeValues={filter.activeValues}
              handleDelete={this.removeFilter}
              handleUpdate={this.updatedFilter}
            />
          ))}
          <div className="filterRowRelativePositioner">
            <Row>
              {filters.length !== 0 && (
                <div className="addFilterButtonConnection"></div>
              )}
              <button
                className="btn addFilterButton shadow-sm"
                onClick={this.toggleModal}
              >
                <AddIcon fontSize="14px" /> Add Filter
              </button>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default FilterView;
