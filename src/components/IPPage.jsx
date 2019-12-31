import React, { Component } from "react";
import IPNavBar from "./ip/IPNavBar";
import IPDetail from "./ip/IPDetail";
import IPStatus from "./ip/IPStatus";
import IPHighlights from "./ip/IPHighlights";
import IPSimilar from "./ip/IPSimilar";
import { Redirect } from "react-router-dom";
import { Container, Row } from "reactstrap";

import axios from "axios";

class IPPage extends Component {
  state = {
    actor: null,
    workflow: []
  };

  async componentDidMount() {
    this.parseLocationParams();
    const response = await axios.get(
      "http://127.0.0.1:4433/api/actor/" + this.props.match.params.id
    );
    console.log(this.props.match.params.id);
    const actor = response.data;
    console.log(actor);

    if (typeof actor === undefined || "error" in actor) {
      return <Redirect to="/not-found" />;
    }

    this.setState({ actor });
  }

  parseLocationParams() {
    if (this.props.location.state) {
      if (this.props.location.state.workflow) {
        this.setState({ workflow: this.props.location.state.workflow });
      }
    }
  }

  handleClick = () => {
    this.props.history.goBack();
  };

  render() {
    const { actor, workflow } = this.state;

    if (actor == null) {
      return <p>Loading...</p>;
    }

    console.log(actor);

    return (
      <React.Fragment>
        <IPNavBar actor={actor} onClick={this.handleClick} />
        <Container className="mt-4 mb-4">
          <Row>
            <IPDetail
              name={actor.first_name + " " + actor.last_name}
              photos={actor.photos}
              rating={actor.rating}
            />

            <IPHighlights
              contact={actor.email}
              languages={actor.languages}
              ethnicity={"Ethnicity: " + actor.ethnicity}
              build={"Build: " + actor.build}
              age={"Age: " + actor.birthday}
              projects={actor.projects}
            />
          </Row>
        </Container>

        {actor.status_updates && (
          <IPStatus
            status={actor.status}
            workflow={workflow}
            statusUpdates={actor.status_updates}
          />
        )}

        <IPSimilar similarIDs={actor.similar} />
      </React.Fragment>
    );
  }
}

export default IPPage;
