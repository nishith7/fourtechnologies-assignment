import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a custom theme using Poppins font
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    fontWeightBold:'bold'
  },
});

export default theme;
