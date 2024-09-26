import React, { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

function Dropdown() {
  const [selectedThickness, setSelectedThickness] = useState(null);

  const handleMenuItemClick = (value) => {
    setSelectedThickness(value);
  };

  return (
    <div>
      <Menu>
        <MenuButton as={Button}>
          {selectedThickness ? `${selectedThickness} (mm)` : "Select Thickness"}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => handleMenuItemClick(6)}>6</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick(7)}>7</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick(8)}>8</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default Dropdown;
