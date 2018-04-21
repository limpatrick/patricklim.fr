import { createMuiTheme } from 'material-ui';

export const fontFamily = ['open sans', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'];

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      root: {
        userSelect: 'none',
      },
    },
  },
  palette: {
    type: 'dark',
  },
  typography: {
    fontFamily,
  },
});

export default theme;
