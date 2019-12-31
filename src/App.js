import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound";
import IPPage from "./components/IPPage";
import ProjectPage from "./components/ProjectPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/project/:project_id/ip/:id" component={IPPage} />
          <Route path="/project/:id" component={ProjectPage} />
          <Route path="/ip/:id" component={IPPage} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/search" exact component={Search} />
          <Redirect from="/" to="/search" exact />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
