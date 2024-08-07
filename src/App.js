import React from "react";
import { CssBaseline, Box, Button } from "@mui/material";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Box style={{ marginTop: "24px", marginLeft: "10px" }}>
      <Button variant="contained">Home</Button>
      </Box>
      
      <Dashboard/>
     
    </>
  );
};

export default App;
