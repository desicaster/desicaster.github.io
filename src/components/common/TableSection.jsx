import React from "react";

const TableSection = ({ title, content }) => {
  return (
    <div>
      <h6>{title}</h6>
      {content.map(function(c, index) {
        return (
          <p className="mb-0" key={index} style={{ fontSize: "12px" }}>
            {c.constructor === Object && "title" in c && c.title}
            {c.constructor === Object && !("title" in c) && c}
            {c.constructor !== Object && c}
          </p>
        );
      })}
    </div>
  );
};

export default TableSection;
