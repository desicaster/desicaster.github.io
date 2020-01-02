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
      "https://desicaster.herokuapp.com/api/actor/" + this.props.match.params.id
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
              state={actor.state}
              photos={actor.photos}
              rating={actor.rating}
              skills={actor.skills}
            />

            <IPHighlights
              email={"Email: " + actor.email}
              phone={"Phone: " + actor.phone}
              height={
                "Height: " + actor.height_feet + "'" + actor.height_inches + '"'
              }
              gender={"Gender: " + actor.gender}
              hair={"Hair: " + actor.hair_length + ", " + actor.hair_color}
              eyes={"Eyes: " + actor.eye_color}
              languages={actor.languages}
              age={"Age: " + actor.birthday}
              instagram={
                actor.instagram === "" ? (
                  ""
                ) : (
                  <a href={actor.instagram}>Instagram</a>
                )
              }
              facebook={
                actor.facebook === "" ? (
                  ""
                ) : (
                  <a href={actor.facebook}>Facebook</a>
                )
              }
              imdb={actor.imdb === "" ? "" : <a href={actor.imdb}>IMDB</a>}
              reel={actor.reel === "" ? "" : <a href={actor.reel}>Reel</a>}
              website={
                actor.website === "" ? (
                  ""
                ) : (
                  <a href={actor.website}>Personal Website</a>
                )
              }
              agency={
                actor.agent_email === ""
                  ? ["No agent found"]
                  : [
                      actor.agent_name,
                      actor.agency_name,
                      actor.agent_email,
                      actor.agent_phone
                    ]
              }
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
