import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SwitchColorMode from "./ColoModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SwitchColorMode></SwitchColorMode>
    </HStack>
  );
};

export default NavBar;
