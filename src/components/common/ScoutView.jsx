import React from "react";
import { Card } from "reactstrap";
import Contact from "react-ionicons/lib/IosContact";

const ScoutView = ({ person }) => {
  return (
    <Card className="px-2 py-2 mb-3 shadow-sm border">
      <div className="flex flex-alic">
        <Contact fontSize="28pt" className="mr-2"></Contact>
        <div>
          <p className="mb-0 txt-sm">{person.name}</p>

          <p className="m-0 d-block txt-sm">Added {person.joinDate}</p>
        </div>
      </div>
    </Card>
  );
};

export default ScoutView;
