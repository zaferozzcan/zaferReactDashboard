import React, { Component } from "react";
import Notifications from "../dashboard/Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    // console.log(this.props.projects);
    const { projects } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col sm12 m6">
            {" "}
            <ProjectList projects={projects} />
          </div>
          <div className="col sm12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.project.projects
  };
}

export default connect(mapStateToProps)(Dashboard);
