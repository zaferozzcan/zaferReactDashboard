import React from "react";
import ProjectSummary from "../projects/ProjectSummary";

function ProjectList(props) {
  const projs = props.projects;
  return (
    <div className="project-list section">
      {projs.map((item, index) => (
        <ProjectSummary key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default ProjectList;
