// Theme
import { createTheme } from '@mui/material/styles'
import { purple } from '@mui/material/colors'
import { palette } from '@mui/system';

const headerFont = '"Bebas Neue", sans-serif';
const bodyFont = '"Merriweather", sans-serif';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: purple
  },
  typography: {
    h1: { fontFamily: headerFont },
    h2: { fontFamily: headerFont },
    h3: { fontFamily: headerFont },
    h4: { fontFamily: headerFont },
    h5: { fontFamily: headerFont },
    h6: { fontFamily: headerFont },
    body1: {marginBottom: 8},
    button: { fontFamily: headerFont },
    fontFamily: bodyFont,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 600,
  },  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: '0', boxShadow: 'none'
        },
        outlined: {
          fontSize: '1rem',
          background: '#FFF',
          borderWidth: '3px', borderColor: '#000', borderRadius: '0',
          "&:hover": {
            borderWidth: '3px', color: '#fff', backgroundColor: '#000'
          },
          "&.title": {
            fontSize: '2rem', padding: '1rem', lineHeight: '1rem'
          },
        },
      },
    },
  }
})

export default theme;