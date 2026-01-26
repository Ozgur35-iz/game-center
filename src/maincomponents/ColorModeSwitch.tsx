import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        sx={{
          "& .chakra-switch__thumb": {
            transition: "transform 0.35s ease !important",
          },
          "& .chakra-switch__track": {
            transition:
              "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important",
          },
        }}
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
