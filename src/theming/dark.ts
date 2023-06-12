import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#845ec2",
    },
    secondary: {
      main: "#4b4453",
    },
    error: {
      main: "#c34a36",
    },
  },
});

export default darkTheme;
