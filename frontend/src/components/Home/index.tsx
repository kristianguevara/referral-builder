import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Dashboard from "../Home/Dashboard";
import { Typography } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ height: "100%", background: "#f5f5f5" }}>
       
      <Box sx={{ padding: 6 }}>
      <Grid container spacing={3} mt="15px">
          <Grid item xs={6} sm={6}>
            <Typography variant="h4">Referral List</Typography>
          </Grid>
          <Grid item xs={6} sm={6}></Grid>
        </Grid>
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
