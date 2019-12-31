import React, { Component } from "react";
import FilterNav from "./FilterNav";
import FilterView from "./FilterView";

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <FilterNav
          filters={this.props.filters}
          go_back={this.props.go_back}
          onClear={this.props.handleClear}
        />
        <FilterView
          filters={this.props.filters}
          setFilters={this.props.onFilterChange}
        />
      </div>
    );
  }
}

export default Filter;
