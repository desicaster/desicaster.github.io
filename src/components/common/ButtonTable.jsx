import React from "react";

const ButtonTable = ({ elements, handleTap, selectedElement }) => {
  return (
    <ul className="list-group">
      {elements.map(e => (
        <li
          key={e}
          className={
            selectedElement === e
              ? "buttonTableContainer list-group-item active text-dark rounded-0"
              : "buttonTableContainer list-group-item rounded-0"
          }
        >
          <button
            className="buttonTableElement"
            onClick={() => handleTap(e)}
            style={{ fontSize: "larger" }}
          >
            {e.charAt(0).toUpperCase() + e.slice(1)}
            <span>{selectedElement === e ? ">" : ""}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ButtonTable;
