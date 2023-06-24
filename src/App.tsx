import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail";
import Home from "./pages/Home"; 
import theme from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "pokemon/:pokemonName",
    element: <PokemonDetail/>
  }
])
function App() {
  return  <ThemeProvider theme={theme}>
  <CssBaseline />
  <RouterProvider router={router} />
</ThemeProvider>;
  
}

export default App;
