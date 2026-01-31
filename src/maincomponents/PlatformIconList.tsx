import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
  maxIcons?: number;
}

const PlatformIconList = ({ platforms, maxIcons }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  const visiblePlatforms = maxIcons ? platforms.slice(0, maxIcons) : platforms;
  const remainingCount = maxIcons ? platforms.length - maxIcons : 0;

  return (
    <HStack spacing={2}>
      {visiblePlatforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color="gray.500"
          boxSize={5}
        />
      ))}
      {remainingCount > 0 && <Text fontSize="sm">+{remainingCount}</Text>}
    </HStack>
  );
};

export default PlatformIconList;
