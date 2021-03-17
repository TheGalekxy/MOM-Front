import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import image from "../assets/back_to_school.png";

const EmailDialog = ({ showDialog, closeDialog }) => {
  const [step, setStep] = useState(0);

  /**
   * sets dialog page back to first when dialog opens/closes
   */
  useEffect(() => {
    setStep(0);
  }, [showDialog]);

  /**
   * Goes to next page in dialog or closes dialog on last page
   */
  const nextStep = () => {
    step === 0 || step === 1 || step === 2 ? setStep(step + 1) : closeDialog();
  };

  return (
    <>
      {showDialog && (
        <Dialog open={true} onClose={closeDialog} className="dialog-email">
          {step === 0 ? (
            <>
              <DialogTitle>Wait!</DialogTitle>
              <DialogContent>
                <Typography>
                  Your results will not be saved once you exit this survey, but
                  we can email you a copy of your results!
                </Typography>
                <img src={image} alt="back_to_school" />
              </DialogContent>
              <DialogActions>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <Button variant="contained" onClick={() => nextStep()}>
                      Email
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="text" onClick={() => closeDialog()}>
                      No Thanks!
                    </Button>
                  </Grid>
                </Grid>
              </DialogActions>
            </>
          ) : step === 1 ? (
            <>
              <DialogTitle className="dialog-close-btn">
                <IconButton onClick={() => closeDialog()}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent className="dialog-email-content">
                <Typography>Please enter your email:</Typography>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  placeholder="Email"
                  variant="outlined"
                />
              </DialogContent>
              <DialogActions className="dialog-email-buttons">
                <Button variant="contained" onClick={() => nextStep()}>
                  Submit
                </Button>
              </DialogActions>
            </>
          ) : (
            <>
              <DialogTitle className="dialog-close-btn">
                <IconButton onClick={() => closeDialog()}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent className="dialog-confirmation">
                <Typography>
                  Thank you for submitting! Your results will be in your inbox
                  shortly.
                </Typography>
                <img style={{marginTop: 30, marginBottom: 60}} src={image} alt="back_to_school" />
              </DialogContent>
            </>
          )}
        </Dialog>
      )}
    </>
  );
};

EmailDialog.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
};

export default EmailDialog;
