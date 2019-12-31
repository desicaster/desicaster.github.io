import React, { Component } from "react";
import { Button, CardHeader } from "reactstrap";
import StarIconOutline from "react-ionicons/lib/MdStarOutline";
import StarIcon from "react-ionicons/lib/MdStar";
import EmailIcon from "react-ionicons/lib/MdMail";
import SaveIcon from "react-ionicons/lib/MdAddCircle";
import Tooltip from "../tooltip";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  addIPToProject,
  removeIPFromProject
} from "../../../services/fakeProjectService";
import SaveToProject from "../SaveToProject";
import StarRatings from "react-star-ratings";

class IPCardNav extends Component {
  state = { favorited: false };

  componentDidMount() {
    this.setState({ favorited: this.props.favorited });
  }

  switchFavorited(evt) {
    evt.preventDefault();

    if (this.state.favorited) {
      removeIPFromProject(this.props.id, 0);
      this.setState({ favorited: false });
    } else {
      addIPToProject(this.props.id, 0);
      this.setState({ favorited: true });
    }
  }

  saveIP = project_id => {
    addIPToProject(this.props.id, project_id);
  };

  age(birthday) {
    var today = new Date();
    var birthdate = new Date(birthday);
    var age = today.getFullYear() - birthdate.getFullYear();
    var m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
    return age;
  }

  render() {
    const { name, birthday, rating, contact_email } = this.props;

    return (
      <React.Fragment>
        <CardHeader>
          <div className="flex-sb flex-alic">
            <div>
              <p
                className="mb-0 mt-1 font-weight-normal"
                style={{ fontSize: "smaller" }}
              >
                {name} <br /> Age {this.age(birthday)}
              </p>
            </div>

            <div>
              <StarRatings
                rating={rating}
                starRatedColor="#ffba49"
                numberOfStars={4}
                name="rating"
                starDimension="20px"
                starSpacing="2px"
              />
            </div>

            <div className="text-right">
              <Button
                onClick={evt => this.switchFavorited(evt)}
                className="bg-transparent border-0 p-0 mr-3"
              >
                {this.state.favorited ? <StarIcon /> : <StarIconOutline />}
              </Button>

              <SaveToProject
                onSuccess={this.saveIP}
                icon={
                  <Button className="bg-transparent border-0 p-0 mr-3">
                    <SaveIcon />
                  </Button>
                }
              />

              <CopyToClipboard text={contact_email}>
                <Button
                  onClick={e => e.preventDefault()}
                  className="bg-transparent border-0 p-0"
                >
                  <Tooltip
                    placement="top"
                    trigger="click"
                    tooltip="Copied email to clipboard!"
                  >
                    <EmailIcon />
                  </Tooltip>
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </CardHeader>
      </React.Fragment>
    );
  }
}

export default IPCardNav;
