import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const DropdownField = ({
  current,
  capitalize,
  values,
  handleSelect,
  classValue
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className={classValue} caret>
        {current}
      </DropdownToggle>
      <DropdownMenu>
        {values.map(v => (
          <DropdownItem
            key={v}
            onClick={() => handleSelect(v)}
            className={capitalize ? "text-capitalize" : ""}
          >
            {v}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownField;
