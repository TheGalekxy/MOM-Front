import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@material-ui/core";

const PrivacyDialog = ({ showDialog, closeDialog }) => {
  return (
    <Dialog open={showDialog} onClose={closeDialog} className="dialog-footer">
      <DialogTitle>Privacy Notice</DialogTitle>
      <DialogContent className="dialog-footer-content">
        <Typography variant="h6">MomsOverMatter Privacy Policy</Typography>
        <Typography variant="body1">
          <Typography>
            lleTTonna is committed to respecting and protecting your privacy in
            connection with your use of our MomsOverMatter resources, including
            the MomsOverMatter app. Applicable privacy laws, including (but not
            limited to) Municipal Freedom of Information and Protection of
            Privacy Act, Ontario’s Freedom of Information and Protection of
            Privacy Act. and the federal Personal Information Protection and
            Electronic Documents Act, set out the rules for the disclosure,
            collection, use, retention, security, and destruction of personal
            information.
          </Typography>
          <Typography>
            This privacy policy is intended to outline how we handle any
            personal information we collect from you or that you provide to us
            in connection with MomsOverMatter. Please carefully read the
            following to understand our practices regarding your personal
            information and how we will collect, disclose, and use your personal
            information. This privacy policy is incorporated into and forms a
            part of the Terms of Use for MomsOverMatter.
          </Typography>
          <Typography>
            lleTTonna reserves the right to change or update this privacy policy
            and will notify users by posting any updates to www.llettonna.com or
            via pop-up/push notifications; changes are effective immediately and
            your continued use of MomsOverMatter constitutes your agreement to
            abide by the updated privacy policy. We may also elect to notify you
            of changes or updates to this policy by additional means, such as
            pop-up or push notifications within MomsOverMatter, or via email.
          </Typography>
        </Typography>
        <Typography variant="h6">1. Information Collected by Us</Typography>
        <Typography variant="body1">
          <Typography>
            lleTTonna is committed to limiting our collection of your personal
            information to only the information that is necessary to fulfill the
            reasonable purposes that we identify to you at (or before) the time
            of collection. These purposes are also summarized in sections 6
            (Uses Made of the Information) and 7 (Disclosure of Your
            Information) of this privacy policy.
          </Typography>
          <Typography>
            We may collect and process the following information about you:
            Personal information including, but not limited to: your name,
            e-mail address, location, telephone, information about your usage of
            MomsOverMatter and information collected by tracking technologies as
            further described below that may identify you as an individual or
            allow online/ offline contact with you; Device information such as
            operating device type, system version, and system performance
            information. Survey information (for example, your responses on our
            surveys)
          </Typography>
        </Typography>
        <Typography variant="h6">
          2. Ensuring Security and Confidentiality{" "}
        </Typography>
        <Typography variant="body1">
          <Typography>
            The security of your personal information is important to us. We
            follow generally accepted standards to protect your personal
            information. We use strict technical security features and internal
            procedures to try to prevent unauthorized use, access, or disclosure
            of your personal information. If you have any further questions
            regarding the security of your personal information, please contact
            us at llettonna@gmail.com.
          </Typography>
          <Typography>
            Unfortunately, the transmission of information via the Internet is
            not completely secure. Although we will do our best to protect your
            personal information, we cannot guarantee the entire security of
            your information transmitted to MomsOverMatter; any transmission is
            at your own risk.
          </Typography>
          <Typography>
            Your use of the MomsOverMatter app should take place in an
            appropriately private space to ensure that you cannot be overheard
            or seen.
          </Typography>
        </Typography>
        <Typography variant="h6">3. Communication via Email </Typography>
        <Typography variant="body1">
          <Typography>
            If you sign up to receive promotional and/or informational materials
            from us via email, we will use the information you give us to
            provide the communications you have requested.
          </Typography>
          <Typography>
            If you inform us that you wish to cancel email promotional materials
            by selecting “unsubscribe” at the bottom of such communications, or
            via emailing us at llettonna@gmail.com, we will remove you from our
            mailing list.
          </Typography>
        </Typography>
        <Typography variant="h6">4. Web and Mobile Analytics</Typography>
        <Typography variant="body1">
          <Typography>
            We use mobile and web analytics software to allow us to gain insight
            and better understand the functionality of our mobile software on
            your device. This software may record information, such as how often
            you engage with MomsOverMatter, aggregated usage and performance
            data, the events that occur within MomsOverMatter, and where
            MomsOverMatter was downloaded from. We may link the information we
            store within the analytics software to any personal information you
            submit within the mobile application. The reasons we collect this
            data include: to better understand which parts of the app consumers
            are/are not using, to be able to understand level of engagement with
            the app and areas that require improvement or change. As an
            organization, we provide aggregated and anonymized data to report
            out to donors and/or sponsors.
          </Typography>
        </Typography>
        <Typography variant="h6">
          5. Storage of Your Personal Information{" "}
        </Typography>
        <Typography variant="body1">
          <Typography>
            All information you provide to us through MomsOverMatter is stored
            on secure servers located in Canada. In using MomsOverMatter, you
            are deemed to agree and acknowledge that we may store and access
            your personal information in Canada for the purposes set out in this
            privacy policy and the Terms of Use. Therefore, your personal
            information will be subject to Canadian laws.
          </Typography>
        </Typography>
        <Typography variant="h6">6. How We Use Your Information</Typography>
        <Typography variant="body1">
          <Typography>
            We will use your information in the following ways: To ensure that
            content provided by MomsOverMatter is presented in the most
            effective manner for your web and mobile device; To provide you with
            information related to MomsOverMatter that will facilitate your
            engagement with the app; To provide you with information related to
            your result on a particular survey via email, given that you have
            provided consent to receive such communications under applicable
            law; To provide you with promotional communications, such as email,
            given that you have provided consent to receive such communications
            under applicable law; To carry out our obligations arising from any
            agreements entered into between you and us; To allow you to
            participate in interactive features of MomsOverMatter when you
            choose to do so; To notify you about changes to MomsOverMatter; To
            understand your broad, non-specific geographic location to help us
            identify groups of users by general geographic market (such as
            country, province, or postal code); We may also ask you to complete
            surveys that we use for research purposes, however they are optional
            to complete.
          </Typography>
        </Typography>
        <Typography variant="h6">
          7. How We Disclose Your Information
        </Typography>
        <Typography variant="body1">
          <Typography>
            We generally do not disclose your personal information. Without your
            specific consent, we do not provide your personal information to any
            third party, except as permitted or required by law. For instance,
            we may disclose your personal information to third parties as
            follows: If MomsOverMatter service providers (e.g. hosting or market
            analytics) require this information to provide services to
            lleTTonna. lleTTonna requires each of its service providers to agree
            to maintain the security and confidentiality of your personal
            information to our standards; If MomsOverMatter or substantially all
            of our assets are acquired by a third party, in which personal
            information held by us about our users may be transferred; If we are
            under a legal duty to disclose or share your personal information in
            order to comply with any legal obligation, such as to comply with a
            bankruptcy proceedings, subpoena, similar legal process, or in order
            to enforce or apply our agreements with you; or to protect the
            rights, safety, or property of MomsOverMatter, our customers or
            others.
          </Typography>
        </Typography>
        <Typography variant="h6">
          8. How We Maintain Accuracy of Information
        </Typography>
        <Typography variant="body1">
          <Typography>
            We make reasonable efforts to ensure that your personal information
            that we collect, use, and disclose – in accordance with this Policy
            – is complete and accurate. Thus, we need your help to accomplish
            this. Given that in the vast majority of cases we will directly
            collect your personal information from you, we rely on you to
            provide us with accurate information and to update that information
            as and when needed.
          </Typography>
          <Typography>
            Whether or not we have collected your personal information directly
            from you, you have the right to request access to that information
            and to request that we correct any errors in or omissions from that
            information. If your request for correction is reasonable and we are
            not subject to any legal obligations that may require us not to
            correct the information (e.g. we cannot correct a healthcare
            professional’s clinical opinions), we will correct the information.
            Where appropriate, we will also send the updated information to any
            organizations to which we have disclosed your personal information
            during the year prior to your correction request. If your request
            for correction is not reasonable or cannot be granted for any other
            reason, we will nevertheless include a note in the file to indicate
            that a request for correction was made, but not completed.
          </Typography>
        </Typography>
        <Typography variant="h6">
          9. Our Limited Retention of Your Information
        </Typography>
        <Typography variant="body1">
          <Typography>
            Generally speaking, we will retain the personal information we
            collect from or about you only for so long as we require it to
            satisfy the purposes for which we collected it. We will also retain
            your personal information for as long as is required to meet our
            various legal and business obligations, which in some cases may be
            for a longer period than is necessary to satisfy the purposes for
            collection.
          </Typography>
          <Typography>
            Particularly, if we use any of your personal information to make a
            decision that directly affects you, we are legally required to
            retain that information for at least one year after the date we use
            the information to make the decision. This is for the purpose of
            giving you time to request access to your personal information.
          </Typography>
          <Typography>
            Once there is no longer a business purpose or legal requirement to
            retain your personal information, we will securely anonymize,
            delete, or destroy it.{" "}
          </Typography>
        </Typography>
        <Typography variant="h6">
          10. Please Contact Us with Questions
        </Typography>
        <Typography variant="body1">
          <Typography>
            If you have any further questions or concerns about your personal
            information or privacy, or if you would like to correct or request
            access to your personal information that we hold, please contact us
            at llettonna@gmail.com.
          </Typography>
          <Typography>
            This Privacy Policy was last updated on July 15th, 2020, effective
            immediately.
          </Typography>
        </Typography>
      </DialogContent>
      <DialogActions className="dialog-footer-buttons">
        <Button variant="contained" onClick={() => closeDialog()}>
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
};

PrivacyDialog.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
};

export default PrivacyDialog;
