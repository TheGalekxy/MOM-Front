import React, { useState } from "react";
import { Button, Grid, IconButton } from "@material-ui/core";
import TermsDialog from "../components/TermsDialog";
import PrivacyDialog from "../components/PrivacyDialog";
import FaqDialog from "../components/FaqDialog";

import copyright from "../assets/copyright.png";
import facebook from "../assets/fb.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/insta.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  const [termsDialog, setTermsDialog] = useState(false);
  const [privacyDialog, setPrivacyDialog] = useState(false);
  const [faqDialog, setFaqDialog] = useState(false);
  /**
   * Opens the email confirmation dialog
   */
  const openTermsDialog = () => {
    setTermsDialog(true);
  };

  /**
   * Closes the email confirmation dialog
   */
  const closeTermsDialog = () => {
    setTermsDialog(false);
  };

  /**
   * Opens the privacy dialog
   */
  const openPrivacyDialog = () => {
    setPrivacyDialog(true);
  };

  /**
   * Closes the privacy dialog
   */
  const closePrivacyDialog = () => {
    setPrivacyDialog(false);
  };

  /**
   * Opens the faq dialog
   */
  const openFaqDialog = () => {
    setFaqDialog(true);
  };

  /**
   * Closes the faq dialog
   */
  const closeFaqDialog = () => {
    setFaqDialog(false);
  };

  return (
    <>
      <div className="footer">
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={4}
          className="normal"
        >
          <Grid item className="footer-dialogs">
            <Button onClick={() => openTermsDialog()}>
              Terms and Conditions
            </Button>
            <Button onClick={() => openPrivacyDialog()}>Privacy Policy</Button>
            <Button href="https://llettonna.com/index.php/contact-us/">
              Contact Us
            </Button>
            <Button onClick={() => openFaqDialog()}>FAQ</Button>
          </Grid>
          <Grid item>
            <div class="footer-container"> 
              <p>Follow Us On Social Media:</p>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={4}
              >
                <Grid item xs={3}>
                  <IconButton href="https://m.facebook.com/lleTTonna/">
                    <img src={facebook} alt={facebook} />
                  </IconButton>
                </Grid>
                <Grid item xs={3}>
                  <IconButton href="https://www.instagram.com/llettonna/">
                    <img src={instagram} alt={instagram} />
                  </IconButton>
                </Grid>
                <Grid item xs={3}>
                  <IconButton href="https://www.linkedin.com/company/llettonna/">
                    <img src={linkedin} alt={linkedin} />
                  </IconButton>
                </Grid>
                <Grid item xs={3}>
                  <IconButton href="https://twitter.com/lleTTonna">
                    <img src={twitter} alt={twitter} />
                  </IconButton>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
        
        <div className="mobile mobile-icons">
          <p>Follow Us On Social Media:</p>
          <IconButton href="https://m.facebook.com/lleTTonna/">
            <img src={facebook} alt={facebook} />
          </IconButton>
          <IconButton href="https://www.instagram.com/llettonna/">
            <img src={instagram} alt={instagram} />
          </IconButton>
          <IconButton href="https://www.linkedin.com/company/llettonna/">
            <img src={linkedin} alt={linkedin} />
          </IconButton>
        </div>
        <div className="copyright">
          <img src={copyright} alt="copyright" />
        </div>
      </div>
      <TermsDialog showDialog={termsDialog} closeDialog={closeTermsDialog} />
      <PrivacyDialog
        showDialog={privacyDialog}
        closeDialog={closePrivacyDialog}
      />
      <FaqDialog showDialog={faqDialog} closeDialog={closeFaqDialog} />
    </>
  );
};

export default Footer;
