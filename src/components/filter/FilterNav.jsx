import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import Bell from "react-ionicons/lib/MdNotifications";
import Download from "react-ionicons/lib/MdDownload";
import { addSearchToProject } from "../../services/fakeProjectService";
import SaveToProject from "../common/SaveToProject";
import { Button, Popconfirm } from "antd";

export default class FilterNav extends Component {
  state = {};

  saveFilter = project_id => {
    addSearchToProject(this.props.filters, project_id);
  };

  render() {
    const { filters, onClear, go_back } = this.props;

    return (
      <Container fluid={true}>
        <Row>
          <div
            className="flex-sb flex-alic w-100 shadow-sm p-2 border-bottom"
            style={{ height: "57px" }}
          >
            <div className="mx-4">
              <Popconfirm
                title="Are you sure?"
                onConfirm={onClear}
                okText="Yes"
                cancelText="No"
                disabled={filters.length !== 0 ? false : true}
              >
                <Button
                  disabled={filters.length !== 0 ? false : true}
                  className="btn-sm mr-2"
                >
                  Clear Filters
                </Button>
              </Popconfirm>

              {go_back && (
                <Button onClick={go_back} className="btn-sm btn-dark">
                  Back
                </Button>
              )}
            </div>
            <div className="mx-4 flex flex-alic">
              <Button
                className="btn-sm"
                disabled={filters.length !== 0 ? false : true}
              >
                <Download color={filters.length !== 0 ? "black" : "#C2C2C2"} />
              </Button>
              <Button
                className="mx-2 btn-sm"
                disabled={filters.length !== 0 ? false : true}
              >
                <Bell color={filters.length !== 0 ? "black" : "#C2C2C2"} />
              </Button>
              <SaveToProject
                onSuccess={this.saveFilter}
                icon={
                  <Button
                    className="btn-sm"
                    disabled={filters.length !== 0 ? false : true}
                  >
                    Save Filters
                  </Button>
                }
              />
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}
