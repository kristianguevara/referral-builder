import React from 'react';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface IConfirmCancelModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Function;
  handleConfirmation: Function;
  handleCancel: Function;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ConfirmCancelModal: React.FC<IConfirmCancelModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  handleConfirmation,
  handleCancel
}) => {

  return (
    <Modal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
      <Box sx={style}>
        <Typography variant="h4">
          Warning
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          You currently have answers to required fields.
        </Typography>
        <Grid container spacing={3} mt="15px">
          <Grid item xs={6} sm={6}>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              sx={{ float: "right", mb: "20px", height:"40px" }}
              onClick={() => handleCancel() }
              >
                CONTINUE FORM
            </Button>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Button
              fullWidth
              color="inherit"
              variant="contained"
              sx={{ float: "right", mb: "20px", height:"40px" }}
              onClick={() => handleConfirmation()}
              >
                RETURN TO HOME
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ConfirmCancelModal;
