import { typography } from "./typography";
import { createTheme } from "@mui/material";
import _ from "lodash";

const baseOptions = {
  typography,
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
  },
};

export const createMuiTheme = (config = {}) => {
  const options = _.merge({}, baseOptions, config);
  const theme = createTheme(_.merge({},options));

  return theme;
};
