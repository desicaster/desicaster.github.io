import React from "react";
import FilterButton from "../common/FilterButton";
import { Button } from "reactstrap";
import Edit from "react-ionicons/lib/MdCreate";

const ProjectSearches = ({ searches }) => {
  return (
    <React.Fragment>
      <div className="text-left">
        <div className="flex flex-alic">
          <h4 className="m-0">Saved Search Configurations</h4>
          <Button className="bg-transparent border-0 ml-2 py-0">
            <Edit fontSize="16px"></Edit>
          </Button>
        </div>
        <div className="pt-3">
          {searches.map(s => (
            <div key={s.name}>
              <FilterButton search={s} />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectSearches;
