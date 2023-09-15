import { Switch, Text, VStack, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack>
      <Text whiteSpace="nowrap" fontSize={"xs"}>
        Dark Mode
      </Text>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </VStack>
  );
};

export default ColorModeSwitch;
