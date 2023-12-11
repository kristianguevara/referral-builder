import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dashboard from "../Home/Dashboard";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ height: "100%", background: "#f5f5f5" }}>
      <Box  sx={{ padding: 6 }}>
        <Button
          variant="contained"
          sx={{ float: "right", mb: "20px" }}
          onClick={() => navigate("/create")}
          >
            Create Referral
        </Button>
        <Dashboard />
      </Box>
    </Box>
  );
}

export default Home;
