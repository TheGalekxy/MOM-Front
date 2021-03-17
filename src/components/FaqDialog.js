import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Divider,
} from "@material-ui/core";

const FaqDialog = ({ showDialog, closeDialog }) => {
  return (
    <Dialog open={showDialog} onClose={closeDialog} className="dialog-footer">
      <DialogTitle>Frequently Asked Questions</DialogTitle>
      <DialogContent className="dialog-footer-content-faq">
        <Typography variant="h5">About MomsOverMatter</Typography>
        <br />
        <Typography variant="h6">What is MomsOverMatter?</Typography>
        <Divider />
        <Typography>
          Made by lleTTonna <br />, MomsOverMatter is a free, confidential,
          mobile and web application that delivers information about postpartum
          mental health based on user-generated responses to validated
          psychiatric questionnaires.
        </Typography>
        <br />
        <Typography variant="h6">How is MomsOverMatter structured?</Typography>
        <Divider />
        <Typography>
          MomsOverMatter is structured in the following manner:
        </Typography>
        <Typography>
          1. Choose Survey: MomsOverMatter contains a variety of scientifically
          validated surveys which contain several screening questions that can
          indicate whether an individual has symptoms that are common in people
          with specific mental health problems. These surveys are not intended
          to provide a diagnosis.
        </Typography>
        <Typography>
          2. Complete Survey: Once you have chosen a specific survey that you
          would like to complete which corresponds to a specific mental health
          domain, please follow the instructions to complete the entire survey
          (demographic questions outside of the survey are all optional).
        </Typography>
        <Typography>
          3. Receive Information: Once you have completed a specific survey, you
          will receive a result based on your answers on said survey, as well as
          information regarding postpartum mental health as well as several
          treatment options that are available to moms. This survey result is
          not intended to provide a diagnosis – only trained health
          professionals should do this.
        </Typography>
        <br />
        <Typography variant="h6">
          Who is MomsOverMatter intended for?
        </Typography>
        <Divider />
        <Typography>
          MomsOverMatter is intended for moms in the postpartum period (0 to 12
          months post-birth) who are interested in learning more about their
          mental health during this stage in their life.
        </Typography>
        <br />
        <Typography variant="h6">
          What surveys are currently included in MomsOverMatter?
        </Typography>
        <Divider />
        <Typography>
          As of July 20, 2020, below are the surveys (psychiatric
          questionnaires) included in MomsOverMatter:
        </Typography>
        <Typography>
          1. Edinburgh Postnatal Depression Scale (EPDS) – Postpartum Depression
          Cox, J.L., Holden, J.M. and Sagovsky, R. (1987). Detection of
          postnatal depression: Development of the 10-item Edinburgh Postnatal
          Depression Scale. British Journal of Psychiatry, 150, 782-786.
        </Typography>
        <Typography>
          2. General Anxiety Disorder-7 (GAD-7) – Postpartum Anxiety Spitzer RL,
          Kroenke K, Williams JB, Löwe B. A brief measure for assessing
          generalized anxiety disorder: the GAD-7. Arch Intern Med.
          2006;166(10):1092-1097. doi:10.1001/archinte.166.10.1092
        </Typography>
        <br />
        <Typography variant="h6">Who is behind MomsOverMatter?</Typography>
        <Divider />
        <Typography>
          MomsOverMatter was designed and developed by a team of researchers,
          health professionals, and students who are passionate about improving
          the lives of moms and their families during the postpartum period.
          Below you will find a complete list of individuals who have
          contributed directly to MomsOverMatter as of July 20, 2020:
        </Typography>
        <Typography>
          Betty Guo – Product Manager, lleTTonna <br /> Amanda Du – Design Lead,
          lleTTonna <br /> Thomas Armena – Technical Lead, lleTTonna <br />{" "}
          Amanda Ding – UX Designer, lleTTonna <br /> Michelle Cruz – UX
          Designer, lleTTonna <br /> Rachel Xu – UX Designer, lleTTonna <br />{" "}
          Wenyi Hu – UX Designer, lleTTonna <br /> Ishan Verman – Software
          Developer, lleTTonna <br /> Justin Yeung – Software Developer,
          lleTTonna <br /> Rupinder Nagra – Software Developer, lleTTonna <br />{" "}
          Tailai Wang – Software Developer, lleTTonna <br /> Zoe Tsai – Market
          Research Coordinator, lleTTonna <br /> Adam Kiss – Market Research
          Specialist, lleTTonna <br /> Jessica Moreira – COO, lleTTonna <br />{" "}
          Callie Dougall – CHRO, lleTTonna <br /> Mateusz Faltyn – Founder and
          CEO, lleTTonna <br /> Sawayra Owais – Consultant <br /> Dr. Ryan Van
          Lieshout – Consultant
        </Typography>
        <br />
        <Typography variant="h5">For Moms</Typography>
        <br />
        <Typography variant="h6">What if I need help now?</Typography>
        <Divider />
        <Typography>
          If you or someone else is in immediate danger and/or needs urgent
          medical help, call Emergency 911.
        </Typography>
        <Typography>
          The Canadian Association for Suicide Prevention has a directory of
          local crisis centres in different provinces which are available 24/7
          to talk to you.
        </Typography>
        <Typography>
          If you are concerned that you or someone else is unsafe, you can also
          go to the emergency department of your local hospital or ring the
          hospital and ask for the number of your local crisis assessment team.
        </Typography>
        <Typography>
          Please note that MomsOverMatter is not intended nor appropriate for
          any form of crisis help.
        </Typography>
        <br />
        <Typography variant="h6">Is MomsOverMatter free? </Typography>
        <Divider />
        <Typography>
          Yes – MomsOverMatter is a completely free service with no hidden fees
          or charges
        </Typography>
        <br />
        <Typography variant="h6">
          Is MomsOverMatter anonymous and confidential?
        </Typography>
        <Divider />
        <Typography>
          Yes – MomsOverMatter is completely anonymous (all demographic
          questions are optional) and your answers to survey questions are kept
          confidential and secure. Please see our Privacy Policy for more
          information.
        </Typography>
        <br />
        <Typography variant="h6">
          Does MomsOverMatter protect my privacy?
        </Typography>
        <Divider />
        <Typography>
          lleTTonna understands the importance of keeping your information
          secure. Please see our Privacy Policy for more information.
        </Typography>
        <br />
        <Typography variant="h6">
          How can I participate in a research involving MomsOverMatter?
        </Typography>
        <Divider />
        <Typography>
          At this point in time we have no undergoing research projects – please
          stay tuned for more information regarding the start of clinical trials
          involving MomsOverMatter.
        </Typography>
        <br />
        <Typography variant="h5">For Researchers and Organizations</Typography>
        <br />
        <Typography variant="h6">
          How can I undertake research involving MomsOverMatter?
        </Typography>
        <Divider />
        <Typography>
          Please email Mateusz Faltyn at llettonna@gmail.com for research
          inquiries.
        </Typography>
        <Typography>Last updated: July 20, 2020</Typography>
      </DialogContent>
      <DialogActions className="dialog-footer-buttons">
        <Button variant="contained" onClick={() => closeDialog()}>
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
};

FaqDialog.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
};

export default FaqDialog;
