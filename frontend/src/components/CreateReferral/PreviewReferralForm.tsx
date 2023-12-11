import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { IPreviewReferralFormData } from '../../interfaces';

const PreviewReferralForm: FC<IPreviewReferralFormData> = ({
    formData,
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
      <Typography variant="h4">Preview</Typography>

      <Typography variant="h5" align="left">Personal Details</Typography>
      <hr />
      <Typography align="left">Given name: {givenName} </Typography>
      <Typography align="left">Surname: {surName}</Typography>

      <Typography variant="h5" align="left" mt="15px">Address </Typography>
      <hr />
      <Typography align="left">Home name / #: {homeName}</Typography>
      <Typography align="left">Street: {street}</Typography>
      <Typography align="left">Suburb: {suburb}</Typography>
      <Typography align="left">State: {state}</Typography>
      <Typography align="left">Postcode: {postcode}</Typography>
      <Typography align="left">Country: {country}</Typography>

      <Typography variant="h5" align="left" mt="15px">Avatar</Typography>
      <hr />
      {!avatar && <Typography>No avatar uploaded</Typography>}
      <Box mt="10px">
        {avatar && (
          <Avatar
          alt="Remy Sharp"
          sx={{ margin: "0 auto", height: "100px", width: "100px" }}
          src={avatar}
          />
        )}
        
      </Box>
    </Box>
  );
}

export default PreviewReferralForm;
