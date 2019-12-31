import React, { Component } from "react";
import Filter from "./filter/Filter";
import Gallery from "./gallery/Gallery";
import axios from "axios";

class Search extends Component {
  state = { actors: [], filters: [], go_back: undefined };

  async populateActors(filters, actor_start, actor_end) {
    const response = await axios.post("http://127.0.0.1:4433/api/search", {
      filters: filters.map(f => ({
        type: f.type,
        condition: f.condition,
        values: f.activeValues
      })),
      actor_start: actor_start,
      actor_end: actor_end
    });
    const actors = response.data;
    if (typeof actors === undefined) {
      return;
    }
    console.log(filters);
    console.log(actors);
    this.setState({ actors });
  }

  async componentDidMount() {
    this.parseLocationParams();
    this.populateActors(this.state.filters, 0, 500);
  }

  async parseLocationParams() {
    if (this.props.location.state) {
      // if filters, render each filter
      if (this.props.location.state.filters) {
        let allFilters = [...this.state.filters];
        for (const appliedFilter of this.props.location.state.filters) {
          const response = await axios.get(
            "http://127.0.0.1:4433/api/filter/" + appliedFilter[1]
          );
          let filter = response.data;

          if (typeof filter === undefined) {
            continue;
          }

          filter.condition = appliedFilter[2];
          filter.activeValues = appliedFilter[3];

          allFilters.push(filter);
        }

        this.setState({ filters: allFilters });
      }

      // if render_back, render the back button
      if ("render_back" in this.props.location.state) {
        this.setState({ go_back: this.props.history.goBack });
      }
    }
  }

  onFilterChange = async filters => {
    this.setState({ filters });
    this.populateActors(filters, 0, 500);
  };

  handleClear = async () => {
    this.setState({ filters: [] });
    this.populateActors([], 0, 500);
  };

  render() {
    return (
      <React.Fragment>
        <Filter
          filters={this.state.filters}
          handleClear={this.handleClear}
          onFilterChange={this.onFilterChange}
          go_back={this.state.go_back}
        />
        <Gallery getContent={() => this.state.actors} />
      </React.Fragment>
    );
  }
}

export default Search;
