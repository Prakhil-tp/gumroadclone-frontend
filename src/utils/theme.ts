import theme from "@chakra-ui/theme";

export default {
  ...theme,
  styles: {
    global: {
      "html,body": {
        backgroundColor: "#efefe9"
      }
    }
  },
  colors: {
    ...theme.colors,
    primary: {
      100: "#72c3c6",
      200: "#5ebabe",
      300: "#4ab2b6",
      400: "#36a9ae",
      500: "#31989d",
      600: "#2b878b",
      700: "#26767a",
      800: "#206568",
      900: "#1b5557"
    },
    text: {
      gray: "#797874",
      black: "#252a2e"
    }
  },
  config: {
    initialColorMode: "light"
  }
};
