import React from 'react';
import Routes from './routes';
import {CssBaseline,ThemeProvider,createMuiTheme} from '@material-ui/core';
// import {purple,green} from '@material-ui/core/colors';
function App() {
  const theme = createMuiTheme({
    palette:{
      primary:{
        main:'#c30624'
      },
      secondary:{
        main:'#03a9f4'
      }
    }
  }); 
  return (
    // <BrowserRouter>
    <ThemeProvider theme={theme}>
    <CssBaseline>
    <Routes/>
    </CssBaseline>
    </ThemeProvider>
    
    // </BrowserRouter>
    );
  }
  
  export default App;
  