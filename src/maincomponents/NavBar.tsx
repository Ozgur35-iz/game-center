import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/Gemini_Generated_Image_me33dfme33dfme33.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent={"space-between"} padding="15px">
        <Image src={logo} boxSize="60px" />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
