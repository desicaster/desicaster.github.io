import React, { Component } from "react";
import GalleryView from "../gallery/GalleryView";
import { paginate } from "../../utils/paginate";
import { Container, Button } from "reactstrap";
import axios from "axios";

export default class IPSimilar extends Component {
  state = { actors: [], pageSize: 3, itemsCount: 0, currentPage: 1 };

  async componentDidMount() {
    console.log(this.props.similarIDs);
    const response = await axios.post(
      "https://desicaster.herokuapp.com/api/actors",
      {
        query: this.props.similarIDs
      }
    );

    const actors = response.data;
    console.log(actors);
    if (typeof actors === undefined || actors.length === 0) {
      return;
    }
    this.setState({ actors, itemsCount: actors.length });
  }

  handlePageChange = direction => {
    if (direction === "next") {
      this.setState({ currentPage: this.state.currentPage + 1 });
    } else if (direction === "prev") {
      this.setState({ currentPage: this.state.currentPage - 1 });
    }
  };

  render() {
    const { actors, itemsCount, pageSize, currentPage } = this.state;

    const paginated = paginate(actors, currentPage, pageSize);

    const totalPages = Math.ceil(itemsCount / pageSize);

    return (
      <div className="similarTechnology px-3 pb-2">
        <Container fluid={true}>
          <div className="flex-sb py-3">
            <h4 className="mb-0">Similar Actors</h4>
            <div className="flex">
              <Button
                className="IPNavBtn btn-sm mr-2"
                disabled={currentPage === 1}
                onClick={() => this.handlePageChange("prev")}
              >
                Prev Page
              </Button>
              <Button
                className="IPNavBtn btn-sm"
                disabled={totalPages < 2 || currentPage === totalPages}
                onClick={() => this.handlePageChange("next")}
              >
                Next Page
              </Button>
            </div>
          </div>
        </Container>
        <GalleryView content={paginated} />
      </div>
    );
  }
}
