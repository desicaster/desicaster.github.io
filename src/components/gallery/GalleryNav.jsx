import React, { Component } from "react";
import { Popover, Input, Affix, Button, InputNumber } from "antd";
import { Container, Row, Col } from "reactstrap";
import Archive from "react-ionicons/lib/MdArchive";
import Sort from "react-ionicons/lib/MdList";
import Up from "react-ionicons/lib/MdArrowUp";
import Down from "react-ionicons/lib/MdArrowDown";
import NewProjectModal from "../project/modals/NewProjectModal";

class GalleryNav extends Component {
  state = {
    sortVisible: false,
    show: false,
    sortMethodAsc: null
  };

  toggleModal = () => {
    this.setState({ show: !this.state.show });
  };

  hide = () => {
    this.setState({
      sortVisible: false
    });
  };

  handleSortVisibleChange = visible => {
    this.setState({ sortVisible: visible });
  };

  selectedSort = method => {
    let sortMethodAsc;
    this.setState({ sortVisible: false });
    this.props.onSortUpdate(method);
    if (method === "date-asc") {
      sortMethodAsc = true;
      this.setState({ sortMethodAsc });
    } else {
      sortMethodAsc = false;
      this.setState({ sortMethodAsc });
    }
  };

  onItemsPerPageChange(value) {
    this.props.onItemsPerPageUpdate(value);
  }

  render() {
    const {
      itemsCount,
      pageSize,
      currentPage,
      onPageChange,
      addProject,
      archive,
      title,
      displayArchived
    } = this.props;

    const totalPages = Math.ceil(itemsCount / pageSize);
    const { Search } = Input;

    const content = (
      <div>
        <Button
          onClick={() => this.selectedSort("date-asc")}
          className="mr-2 d-block w-100 mb-2"
        >
          Sort Ascending
        </Button>

        <Button
          onClick={() => this.selectedSort("date-desc")}
          className="d-block w-100 mb-2"
        >
          Sort Descending
        </Button>
      </div>
    );

    return (
      <div className="mt-2">
        <Container fluid={true}>
          <Row>
            <Col>
              {title ? <h4 className="mb-3 text-left">{title}</h4> : ""}
            </Col>
          </Row>
          <Row>
            <Col xl={archive ? "5" : "4"} lg="12">
              <div className="mb-4 flex IPNavSection">
                <Search
                  type="text"
                  id="search"
                  placeholder="Search..."
                  className={
                    addProject && archive
                      ? "projectGallerySearch form-control-sm mr-2"
                      : "IPGallerySearch form-control-sm mr-2"
                  }
                  onSearch={value => this.props.onSearchUpdate(value)}
                />

                <Popover
                  content={content}
                  placement="bottom"
                  trigger="click"
                  visible={this.state.sortVisible}
                  onVisibleChange={this.handleSortVisibleChange}
                >
                  <Button type="primary" className="btn-sm btn-dark">
                    <Sort color="white" fontSize="14.5pt" />{" "}
                    {this.state.sortMethodAsc ? (
                      <Up color="white" />
                    ) : (
                      <Down color="white" />
                    )}
                  </Button>
                </Popover>

                {addProject && archive ? (
                  <React.Fragment>
                    <div className="mx-2">
                      <NewProjectModal onNewProject={this.props.onNewProject}/>
                    </div>

                    <Button
                      onClick={this.props.onArchiveUpdate}
                      className={
                        displayArchived
                          ? "btn-sm bg-light border-0"
                          : "btn-sm bg-dark border-0"
                      }
                    >
                      <Archive
                        color={displayArchived ? "black" : "white"}
                        fontSize="20px"
                      ></Archive>
                    </Button>
                  </React.Fragment>
                ) : (
                  ""
                )}
              </div>
            </Col>
            <Col xl="4" md="6">
              <div className="mb-4 flex IPNavSection IPNavSectionTwo">
                <div className="mr-3">
                  <InputNumber
                    defaultValue={pageSize}
                    className="mr-2"
                    style={{ maxWidth: "65px" }}
                    maxLength={2}
                    min={1}
                    max={30}
                    onChange={this.onItemsPerPageChange.bind(this)}
                    formatter={value =>
                      `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                  />

                  <p className="IPGalleryNavP mr-4">
                    <b>Items per page</b>
                  </p>

                  <p className="IPGalleryNavP o-50">
                    <b>{itemsCount} Total Entries</b>
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={archive ? "3" : "4"} md="6">
              <div className="mb-4 flex IPNavSection IPNavSectionThree">
                <p className="IPGalleryNavP">
                  {" "}
                  <b>Page {currentPage}</b>{" "}
                </p>
                <Affix offsetTop={90}>
                  <div className="">
                    <Button
                      disabled={currentPage === 1}
                      onClick={() => onPageChange("prev")}
                      className="IPNavBtn btn-sm mr-2"
                      type="primary"
                    >
                      Prev Page
                    </Button>
                    <Button
                      disabled={totalPages < 2 || currentPage === totalPages}
                      onClick={() => onPageChange("next")}
                      className="IPNavBtn btn-sm"
                      type="primary"
                    >
                      Next Page
                    </Button>
                  </div>
                </Affix>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default GalleryNav;
