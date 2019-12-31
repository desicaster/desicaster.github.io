import React from "react";

const WorkflowBody = ({ currentItems }) => {
  return (
    <div className="">
      <table className="table mb-0">
        <tbody>
          {currentItems.map(i => (
            <tr key={i.id}>
              <td>
                {parseInt(i.id) + 1 + ". "}
                {i.label}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr className="mt-0" />
    </div>
  );
};

export default WorkflowBody;
