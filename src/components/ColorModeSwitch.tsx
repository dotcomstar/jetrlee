import { Icon, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Icon
      as={colorMode === "dark" ? FaSun : FaMoon}
      onClick={toggleColorMode}
    />
  );
};

export default ColorModeSwitch;
