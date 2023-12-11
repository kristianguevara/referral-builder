import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { ICreateReferralFormData } from '../../interfaces';
import { COUNTRIES } from '../../utils/constants';

const CreateReferralForm: FC<ICreateReferralFormData> = ({
    formData,
    handleFormChange
}) => {
  const {
    givenName,
    surName,
    homeName,
    street,
    suburb,
    state,
    postcode,
    country,
    avatar
  } = formData;

  return (
    <Box sx={{ padding: 1 }}>
      <Typography variant="h4" gutterBottom align="left">
        Referral Builder
      </Typography>
      <Typography variant="h6" gutterBottom align="left">
        Personal Details
      </Typography>
      <hr />
      <Grid container spacing={3} mt="10px">
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="givenName"
            name="givenName"
            label="GIVEN NAME"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            value={givenName}
            onChange={(e) => handleFormChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="surname"
            name="surName"
            label="SURNAME"
            fullWidth
            autoComplete="surname"
            variant="outlined"
            value={surName}
            onChange={(e) => handleFormChange(e)}
          />
        </Grid>
      </Grid>
      <Typography variant="h6" mt="30px" gutterBottom align="left">
        Address
      </Typography>
      <hr />
      <Grid container spacing={3} mt="10px">
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="homeName"
            name="homeName"
            label="HOME NAME OR #"
            fullWidth
            autoComplete="homeName"
            variant="outlined"
            value={homeName}
            onChange={(e) => handleFormChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="street"
            name="street"
            label="STREET"
            fullWidth
            autoComplete="street"
            variant="outlined"
            value={street}
            onChange={(e) => handleFormChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="suburb"
            name="suburb"
            label="SUBURB"
            fullWidth
            autoComplete="suburb"
            variant="outlined"
            value={suburb}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            name="state"
            label="STATE"
            fullWidth
            autoComplete="state"
            variant="outlined"
            value={state}
            onChange={(e) => handleFormChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="postcode"
            name="postcode"
            label="POSTCODE"
            fullWidth
            autoComplete="postcode"
            variant="outlined"
            value={postcode}
            onChange={(e) => handleFormChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="country-select-label">Country</InputLabel>
            <Select
              labelId="country-select-label"
              value={country}
              name="country"
              label="Age"
              onChange={(e) => handleFormChange(e)}
            >
              {COUNTRIES.map((c, idx) => {
                return (
                  <MenuItem key={`${c.code}-${idx}`} value={c.name}>{c.name}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            name="avatar"
            color="primary"
            accept="image/*"
            type="file"
            onChange={(e) => {
              const reader = new FileReader();

              if (!e.target.files) return;
              const file = e.target.files[0];
          
              reader.onload = (upload) => {
                if (!upload.target || !upload.target.result) return;
                handleFormChange(e, "image", upload.target.result);
              };
              reader.readAsDataURL(file);
          }}
            id="img-button-file"
            style={{ display: 'none', }}
          />
          <label htmlFor="img-button-file">
            <Button
              fullWidth
              component="span"
              variant="outlined"
              sx={{ float: "right", mb: "20px", height:"55px" }}
              >
                UPLOAD AVATAR
            </Button>
          </label>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            disabled={!avatar}
            fullWidth
            color="success"
            variant="contained"
            sx={{ float: "right", mb: "20px", height:"55px" }}
            onClick={() => {}}
            >
              CREATE REFERRAL
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CreateReferralForm;
