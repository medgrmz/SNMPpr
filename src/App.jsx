import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Dashboard, Devices, Alerts, Patches } from "./pages";
import { Box } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2c3e50", // Changed to a deeper blue
      light: "#34495e",
      dark: "#1a252f",
    },
    secondary: {
      main: "#e74c3c", // Changed to a vibrant red
      light: "#ff6b6b",
      dark: "#c0392b",
    },
    background: {
      default: "#ecf0f1", // Changed to a lighter gray
      paper: "#ffffff",
    },
    success: {
      main: "#27ae60", // Changed to a richer green
      light: "#2ecc71",
      dark: "#219a52",
    },
    warning: {
      main: "#f39c12", // Changed to a warmer orange
      light: "#f1c40f",
      dark: "#d35400",
    },
    error: {
      main: "#c0392b", // Changed to match secondary dark
      light: "#e74c3c",
      dark: "#962d22",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      color: "#2c3e50",
      letterSpacing: "0.5px",
    },
    h6: {
      fontWeight: 500,
      letterSpacing: "0.3px",
    },
    subtitle1: {
      fontWeight: 400,
      letterSpacing: "0.2px",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#2c3e50",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#2c3e50",
          color: "#ffffff",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: "4px 8px",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)",
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: "#ffffff",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            bgcolor: "background.default",
          }}>
          <Navbar />
          <Sidebar />
          <Box
            component='main'
            sx={{
              flexGrow: 1,
              p: 3,
              mt: 8,
              width: { sm: `calc(100% )` },
              "& .MuiPaper-root": {
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                },
              },
            }}>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/devices' element={<Devices />} />
              <Route path='/alerts' element={<Alerts />} />
              <Route path='/patches' element={<Patches />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
