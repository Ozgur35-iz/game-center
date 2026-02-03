import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/Gemini_Generated_Image_me33dfme33dfme33.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack height={"90px"} padding="15px">
      <Image
        src={logo}
        boxSize="60px"
        onClick={() => {
          setTimeout(() => {
            window.location.reload();
          }, 80);
        }}
        cursor="pointer"
        transition="transform 0.12s ease"
        _active={{ transform: "scale(0.9)" }}
        _hover={{ transform: "scale(1.03)" }}
      />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
