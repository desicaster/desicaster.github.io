import React from "react";
import Edit from "react-ionicons/lib/MdCreate";
import { Button } from "reactstrap";

const ProjectDetail = ({ projectTitle, projectDescription }) => {
  return (
    <div>
      <div className="flex flex-alic ">
        <h3 className="text-left m-0">{projectTitle}</h3>
        <Button className="bg-transparent border-0 ml-2 py-0">
          <Edit fontSize="16px"></Edit>
        </Button>
      </div>
      <p className="text-left pt-3">{projectDescription}</p>
    </div>
  );
};

export default ProjectDetail;
