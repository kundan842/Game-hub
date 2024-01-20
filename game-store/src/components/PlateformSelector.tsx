import { Plateform } from "../hooks/useGameS";
import usePlateforms from "../hooks/usePlateforms";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface Props {
  onSelectPlateform: (plateform: Plateform) => void;
  selectedPalteform: Plateform | null;
}
const PlateformSelector = ({ onSelectPlateform, selectedPalteform }: Props) => {
  const { error, data } = usePlateforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button}>
        {selectedPalteform?.name || "Plateforms"}
      </MenuButton>

      <MenuList>
        {data.map((plateform) => (
          <MenuItem
            key={plateform.id}
            onClick={() => onSelectPlateform(plateform)}
          >
            {plateform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlateformSelector;
