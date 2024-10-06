import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import materials from "./preDefinedMaterialList";

function PreDefinedMaterial({
  preMaterial,
  setPreMaterial,
  setA,
  setB,
  setN,
  setC,
  setM,
  setDensity,
}) {
  const handleMenuItemClick = (item) => {
    setPreMaterial(item.material);
    setA(item.A);
    setB(item.B);
    setN(item.n);
    setC(item.C);
    setM(item.m);
    setDensity(item.density);
  };

  return (
    <div>
      <Menu>
        <MenuButton as={Button}>
          {preMaterial ? `Material: ${preMaterial}` : "Choose a material"}
        </MenuButton>
        <MenuList maxHeight="200px" overflowY="auto">
          {materials.map((item) => (
            <MenuItem
              key={item.material}
              onClick={() => handleMenuItemClick(item)}
            >
              {item.material}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}

export default PreDefinedMaterial;
