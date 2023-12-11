import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CreateReferralForm from "./CreateReferralForm";
import PreviewReferralForm from "./PreviewReferralForm";
import { ICreateFormData } from '../../interfaces';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const CreateReferral = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ICreateFormData>({
    givenName: "",
    surName: "",
    homeName: "",
    street: "",
    suburb: "",
    state: "",
    postcode: "",
    country: "",
    avatar: ""
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>, type: string | null, fileValue: string | null) => {
    const fieldName = event.target.name;
    
    if (type === "image") {
      console.log("fieldName = ", fieldName);
      console.log("fileValue = ", fileValue);
      setFormData({
        ...formData,
        [fieldName]: fileValue
      });
    } else {
      const fieldValue = event.target.value;
      setFormData({
        ...formData,
        [fieldName]: fieldValue
      });
    };
    
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 5 }}>
      <Button
        color="error"
        variant="contained"
        sx={{ mb: "20px" }}
        onClick={() => navigate("/")}
        >
          CANCEL
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={7} md={9}>
          <Item>
            <CreateReferralForm formData={formData} handleFormChange={handleFormChange}/>
          </Item>
        </Grid>
        <Grid item xs={5} md={3}>
          <Item>
            <PreviewReferralForm formData={formData} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CreateReferral;
