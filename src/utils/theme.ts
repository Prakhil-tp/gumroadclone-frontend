import theme from "@chakra-ui/theme";

export default {
  ...theme,
  colors: {
    ...theme.colors,
    primary: {
      100: "#1f6264",
      200: "#247275",
      300: "#2a8286",
      400: "#2f9396",
      500: "#34a3a7",
      600: "#35a6ab",
      700: "#36aaaf",
      800: "#36a9ae"
    },
    nav: {
      100: "#797874"
    }
  },
  config: {
    initialColorMode: "light"
  }
};
