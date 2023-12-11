import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { toast } from 'react-toastify';
import ReferralInputForm from "./ReferralInputForm";
import PreviewReferralForm from "./PreviewReferralForm";
import { validateEmail } from "../../utils";
import { IReferralData } from '../../interfaces';
import { OPTIONAL_FIELDS, REFERRAL_API_URL } from "../../utils/constants";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const ReferralForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const { pathname } = location;
  const { id } = params;
  const isEditPage = pathname.indexOf('/edit') > -1 && id !== undefined && id !== null;

  const { success, error } = toast;
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<IReferralData>({
    given_name: "",
    surname: "",
    email: "",
    phone: "",
    home_name: "",
    street: "",
    suburb: "",
    state: "",
    postcode: "",
    country: "",
    avatar: ""
  });
  
  useEffect(() => {
    const getReferralData = async () => {
      try {
        const result = await axios.get(`${REFERRAL_API_URL}/${id}`);
        const fetchedData = result.data;

        setFormData(fetchedData);
      } catch (e) {
        console.log(e)
        error('Failed to fetch this referral. Redirecting to home page...');
        setTimeout(() => {
          navigate('/');
        }, 2000)
      }

      setIsLoading(false);
    };

    setIsLoading(true);
    if (isEditPage) {
        getReferralData();
    } else {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const areRequiredFieldsFilled = () => {
    const keyObjects = Object.keys(formData);
    let isAtLeastOneAnswer = false;
  
    const answeredRequiredFields = keyObjects.filter(key => {
      const isNotEmpty = formData[key as keyof IReferralData] !== '';
      if(!isAtLeastOneAnswer && isNotEmpty) isAtLeastOneAnswer = true;

      // Exclude suburb from the check
      if (OPTIONAL_FIELDS.includes(key)) {
        return false;
      }

      // Check if the value is not an empty string
      return isNotEmpty;
    });

    return {
      isFormValid: answeredRequiredFields.length >= (keyObjects.length - OPTIONAL_FIELDS.length),
      answeredRequiredFields,
      isAtLeastOneAnswer
     };
  }

  const submitForm = async () => {
    setIsLoading(true);
    const { isFormValid } = areRequiredFieldsFilled();
    const isEmailValid = validateEmail(formData.email);

    if (!isEmailValid) {
      error("You placed an invalid email. Ensure to put a proper email.");
      setIsLoading(false);
      return;
    }

    if (!isFormValid) {
      error("Form is not valid. Kindly check your input.");
      setIsLoading(false);
      return;
    }

    try {
      let result: AxiosResponse<any, any>;
      const actionWord = isEditPage ? "edit" : "create";
  
      if (isEditPage) {
        result = await axios.put(REFERRAL_API_URL, formData,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          });
      } else {
        result = await axios.post(REFERRAL_API_URL, formData,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          });
      }

      const { data } = result;

      if (data.error) {
        error(`Failed to ${actionWord} referral data. Please try again.`);
        return;
      }
      
      success(`Referral ${actionWord} successfully! Redirecting to home page`);
      setTimeout(() => {
        navigate("/");
      }, 2000)
    } catch (e: any) { // Keep any type
      const errorData = e.response.data;
      if (errorData.error && errorData.error.name === "SequelizeUniqueConstraintError") {
        error("The email has already been taken. Kindly place a different email.");
      } else {
        error("Failed processing referral. Please try again.");
      }
      
      setIsLoading(false);
    }
  }

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>, type: string | null, fileValue: string | null) => {
    const fieldName = event.target.name;
    
    if (type === "image") {
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

  const confirmCancel = () => {
    const { answeredRequiredFields } = areRequiredFieldsFilled();
    if (answeredRequiredFields.length) {
      const isTrue = window.confirm("You are currently answering the form. Are you sure you want to cancel?");
      if (isTrue) navigate("/");
      return;
    }

    navigate("/");
  }

  const { isFormValid } = areRequiredFieldsFilled();
  const disabled = isLoading || !isFormValid;

  return (
    <Box sx={{ flexGrow: 1, padding: 5 }}>
      <Button
        disabled={isLoading}
        color="error"
        variant="contained"
        sx={{ mb: "20px" }}
        onClick={() => confirmCancel()}
        >
          CANCEL
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={7} md={9}>
          <Item>
            <ReferralInputForm
              isEditPage={isEditPage}
              formData={formData}
              handleFormChange={handleFormChange}
              disabled={disabled}
              submitForm={submitForm} />
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

export default ReferralForm;
