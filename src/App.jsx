import { Box, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import { createMuiTheme } from "./theme";

function App() {
  const theme = createMuiTheme();
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ paddingX: { xs: "20px", md: "140px"} }}>
        <Navbar />
      </Box>
    </ThemeProvider>
  );
}

export default App;
