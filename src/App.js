import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { IternalTheme } from './IternalTheme'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MuiAlert from '@material-ui/lab/Alert';

const theme = createMuiTheme(IternalTheme);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <Typography variant="h1" component="h2" gutterBottom>
            h1. Heading
      </Typography>
          <Typography variant="h2" gutterBottom>
            h2. Heading
      </Typography>
          <Typography variant="h3" gutterBottom>
            h3. Heading
      </Typography>
          <Typography variant="h4" gutterBottom>
            h4. Heading
      </Typography>
          <Typography variant="h5" gutterBottom>
            h5. Heading
      </Typography>
          <Typography variant="h6" gutterBottom>
            h6. Heading
      </Typography>
          <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
          <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
          <Typography variant="button" display="block" gutterBottom>
            button text
      </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            caption text
      </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            overline text
      </Typography>
        </div>

        <div>
          <br />
          <Button loading variant="contained" color="primary">
            Primary Contained
      </Button>

          <Button variant="outlined" color="primary">
            Primary Outlined
      </Button>
          <br />
          <Button variant="contained" color="secondary">
            Secondary Contained
      </Button>
          <Button variant="outlined" color="secondary">
            Secondary Outlined
      </Button>
          <br /><br />
          <MuiAlert severity="error">This is an error message!</MuiAlert>
          <MuiAlert severity="warning">This is a warning message!</MuiAlert>
          <MuiAlert severity="info">This is an information message!</MuiAlert>
          <MuiAlert severity="success">This is a success message!</MuiAlert>
          <br />
          <Button variant="contained">Default</Button>
          <br />
          <Button variant="contained" disabled>
            Disabled
      </Button>
        </div>


        <br />
        <br />
        <br />
        <form noValidate autoComplete="off">
          <TextField label="Standard" />
          <br />
          <TextField label="Filled" variant="filled" />
          <br />
          <TextField label="Outlined" variant="outlined" />
        </form>
      </ThemeProvider>
    </>
  );
}

export default App;
