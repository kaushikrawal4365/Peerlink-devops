import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6366f1',
      light: '#a5b4fc',
      dark: '#4338ca',
    },
    secondary: {
      main: '#ec4899',
      light: '#f9a8d4',
      dark: '#be185d',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#111827',
      secondary: '#6b7280',
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h4: { fontWeight: 700, fontSize: '1.875rem' },
    h5: { fontWeight: 600, fontSize: '1.5rem' },
    h6: { fontWeight: 600, fontSize: '1.25rem' },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          padding: '10px 20px',
          boxShadow: 'none',
          '&:hover': { boxShadow: '0 4px 12px rgba(0,0,0,0.15)' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: '1px solid #f1f5f9',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          transition: 'all 0.2s ease',
          '&:hover': {
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

export default theme;
