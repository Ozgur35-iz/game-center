import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/Gemini_Generated_Image_me33dfme33dfme33.webp";

const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo} boxSize="60px" />
      </HStack>
    </div>
  );
};

export default NavBar;
