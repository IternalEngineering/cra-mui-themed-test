import './App.css';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const theme = createMuiTheme({
  palette: {
    common: {
      black: '#222',
      white: '#fff',
    },
    type: 'light',
    primary: {
      light: '#0a2156',
      main: '#0a2156',
      dark: '#0a2156',
      contrastTest: '#fff',
    },
    secondary: {
      light: '#e0a614',
      main: '#e0a614',
      dark: '#e0a614',
      contrastTest: '#000',
    },
    error: {
      light: '#a30707',
      main: '#a30707',
      dark: '#a30707',
      contrastTest: '#fff',
    },
    warning: {
      light: '#e26713',
      main: '#e26713',
      dark: '#e26713',
      contrastTest: '#000',
    },
    info: {
      light: '#1d6a91',
      main: '#1d6a91',
      dark: '#1d6a91',
      contrastTest: '#000',
    },
    success: {
      light: '#0bafaa',
      main: '#0bafaa',
      dark: '#0bafaa',
      contrastTest: '#000',
    }
  },
});

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <h1>Stefan's CRA-MUI Themed Test</h1>
      <p>This is hopefully where I'll put some magic lmao</p>
      <div>
      <Button variant="contained" color="primary">
        Primary Contained
      </Button>
      
      <Button variant="outlined" color="primary">
        Primary Outlined
      </Button>
      <br/>
      <Button variant="contained" color="secondary">
        Secondary Contained
      </Button>

      <Button variant="outlined" color="secondary">
        Secondary Outlined
      </Button>
      <br/>
      <Button variant="contained">Default</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      </div>


      <br/>
      <br/>
      <br/>
      <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <br/>
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <br/>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
      </ThemeProvider>
    </>
  );
}

export default App;
