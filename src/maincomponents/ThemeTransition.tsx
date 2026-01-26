import { Box, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ThemeTransition = ({ children }: { children: React.ReactNode }) => {
  const { colorMode } = useColorMode();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const t = setTimeout(() => setShow(false), 300);
    return () => clearTimeout(t);
  }, [colorMode]);

  return (
    <Box position="relative">
      {children}
      <Box
        position="fixed"
        inset="0"
        bg={colorMode === "dark" ? "black" : "white"}
        opacity={show ? 0.25 : 0}
        transition="opacity 0.3s ease"
        pointerEvents="none"
        zIndex={9999}
      />
    </Box>
  );
};

export default ThemeTransition;
