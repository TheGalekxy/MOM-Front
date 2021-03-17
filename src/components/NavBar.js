import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Leaves from "../assets/leaves-background.png";
import logo from "../assets/Logo.png";

import TermsDialog from "../components/TermsDialog";
import PrivacyDialog from "../components/PrivacyDialog";
import FaqDialog from "../components/FaqDialog";

import { Grid, AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const NavBar = () => {
  const [state, setState] = useState({
    right: false,
  });
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

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="nav-bar-drawer"
    >
      <List>
        <ListItem button onClick={() => openTermsDialog()}>
          <ListItemText primary={"Terms & Conditions"} />
        </ListItem>
        <ListItem button onClick={() => openPrivacyDialog()}>
          <ListItemText primary={"Privacy Notice"} />
        </ListItem>
        <ListItem
          button
          component="a"
          href="https://llettonna.com/index.php/contact-us/"
        >
          <ListItemText className="drawer" primary={"Contact Us"} />
        </ListItem>
        <ListItem button onClick={() => openFaqDialog()}>
          <ListItemText primary={"FAQ"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="fixed" className="nav-bar">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>
                  <img src={logo} alt="Logo" />
                </Grid>
                <Grid item>
                  <Button href="/">
                    <Typography variant="h6">MomsOverMatter</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className="nav-bar-buttons">
              <Grid item className="nav-bar-buttons-right">
                <Button href="/">
                  <Typography variant="h6">Home</Typography>
                </Button>
              </Grid>
              <Grid item className="nav-bar-buttons-right">
                <Button href="https://llettonna.com/index.php/momsovermatter/">
                  <Typography variant="h6">About Us</Typography>
                </Button>
              </Grid>
              <Grid item className="nav-bar-buttons-menu">
                <React.Fragment key={"right"}>
                  <Button className="" onClick={toggleDrawer("right", true)}>
                    <MenuIcon style={{ color: "white" }}></MenuIcon>
                  </Button>
                  <Drawer
                    className="right-drawer"
                    anchor={"right"}
                    open={state["right"]}
                    onClose={toggleDrawer("right", false)}
                  >
                    <IconButton onClick={toggleDrawer("right", false)}>
                      <CloseIcon />
                    </IconButton>
                    {list("right")}
                    <img src={Leaves} alt="leaves" />
                  </Drawer>
                </React.Fragment>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <TermsDialog showDialog={termsDialog} closeDialog={closeTermsDialog} />
      <PrivacyDialog
        showDialog={privacyDialog}
        closeDialog={closePrivacyDialog}
      />
      <FaqDialog showDialog={faqDialog} closeDialog={closeFaqDialog} />
    </>
  );
};

export default NavBar;
