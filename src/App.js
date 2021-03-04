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
      light: '#abca',
      main: '#abca',
      dark: '#abca',
      contrastTest: '#fff',
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
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
      </div>

      <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
      </ThemeProvider>
    </>
  );
}

export default App;
