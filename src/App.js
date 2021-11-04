import Header from "./Components/Header";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import "fontsource-roboto";
import { Paper } from "@material-ui/core";

import { green, orange } from "@material-ui/core/colors";
import Footer from "./Components/Footer";


const theme = createTheme({
  typography: {
    h1: {
      fontSize: "3rem"
    }
  },
  palette: {
    type: "dark",
    primary: {
      main: green[600]
    },
    secondary: {
      main: orange[400]
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "auto",marginTop:'-16vh',background:'#fff' }}>
        <Header />  
      </Paper>
      <Footer/>

    </ThemeProvider>
  );
}

export default App;
