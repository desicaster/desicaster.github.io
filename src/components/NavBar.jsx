import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import Logo from "../imgs/axiteLogo.png";
import { Affix, Input } from "antd";

class NavBar extends Component {
  state = {};

  render() {
    const { Search } = Input;
    return (
      <Affix offsetTop={0}>
        <nav
          className="shadow-sm navbar navbar-expand-lg navbar-dark bg-primary py-3"
          id="axiteNav"
        >
          <Container fluid={true}>
            <a className="navbar-brand" href="/">
              <img src={Logo} alt="" width="35px" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/search"
                    isActive={(match, location) => {
                      const hasIp = location.pathname.includes("/ip/");
                      const isProjectIp = location.pathname.includes(
                        "project/ip/"
                      );

                      return (!isProjectIp && hasIp) || match;
                    }}
                  >
                    Actors
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/projects"
                    isActive={(match, location) => {
                      const isProject = location.pathname.includes("/project/");
                      return isProject || match;
                    }}
                  >
                    Auditions
                  </NavLink>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <Search
                  // className="form-control"
                  type="text"
                  placeholder="Search"
                />
                {/* <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button> */}
              </form>
            </div>
          </Container>
        </nav>
      </Affix>
    );
  }
}

export default NavBar;
