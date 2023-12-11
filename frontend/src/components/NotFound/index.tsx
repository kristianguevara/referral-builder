import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000)
  }, [])
  return <Typography>404 - Not Found. Redirecting back to home page...</Typography>;
};

export default NotFound;
