import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

function Dropdown({ thickness, setThickness, isInvalid, setIsInvalid }) {
  const handleMenuItemClick = (value) => {
    let newCorrectedValues = { ...isInvalid };
    setThickness(value);
    newCorrectedValues["thickness"] = false;
    setIsInvalid(newCorrectedValues);
  };

  return (
    <div>
      <Menu>
        <MenuButton as={Button} color={isInvalid.thickness ? "red.500" : ""}>
          {thickness ? `${thickness} (mm)` : "Select Thickness"}
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
