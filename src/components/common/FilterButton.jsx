import React from "react";
import { Button } from "reactstrap";
import Bell from "react-ionicons/lib/MdNotifications";
import { Link } from "react-router-dom";

const FilterButton = ({ search }) => {
  return (
    <Link
      to={{
        pathname: "/search",
        state: {
          filters: search.filters,
          render_back: true
        }
      }}
    >
      <Button className="shadow-sm w-100 mb-3 text-left p-3 bg-white text-dark border-0">
        <div className="flex-sb flex-alic">
          <h5>{search.name}</h5>
          <Button className="bg-transparent border-0 p-0">
            <Bell fontSize="18px"></Bell>
          </Button>
        </div>
        <p className="m-0">{search.filters.length} Filters</p>
        <p className="m-0">{search.results} total results</p>
      </Button>
    </Link>
  );
};

export default FilterButton;
