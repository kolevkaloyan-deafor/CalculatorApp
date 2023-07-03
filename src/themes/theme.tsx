import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#212121" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: 10,
          borderRadius: 50,
          fontSize: 23,
          color: "#fafafa",
          background: "#424242",
          ":hover": {
            backgroundColor: "white",
            color: "black"
          }
        },
      },
    },
  },
});

export default theme;
