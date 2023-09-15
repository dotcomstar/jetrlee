import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// System sets initial value.
// App subscribes to system color mode changes.
const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

export default theme;
