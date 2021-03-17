import React, { useEffect, useState, useContext } from "react";
import { Button } from "@material-ui/core";
import TermsDialog from "../components/TermsDialog";
import { Divider, Container, Grid } from "@material-ui/core";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import anxiety_photo from "../assets/anxiety-photo.png";
import depression_photo from "../assets/depression-photo.png";
import sleep_photo from "../assets/sleep-photo.png";
import { AppContext } from "../context";
import crib from "../assets/crib.png";

const picture = [anxiety_photo, depression_photo]; // add photos to this array
const Main = () => {
  const [termsDialog, setTermsDialog] = useState(false);

  const { person, surveys, setCurrSurvey, copyright } = useContext(AppContext);

  useEffect(() => {
    if (person === null) openTermsDialog();
  }, []);

  /**
   * Chooses survey and routes to survey page
   *
   * @param {Survey} val - chosen survey
   */
  // const chooseSurvey = (surveyIndex) => {
  //   //return `/survey/${index}`;
  //   //history.push("/survey/" + surveyIndex);
  // };

  /**
   * Opens the email confirmation dialog
   */
  const openTermsDialog = () => {
    if (localStorage.getItem("terms") !== "exists") {
      setTermsDialog(true);
    }
  };

  /**
   * Closes the email confirmation dialog
   */
  const closeTermsDialog = () => {
    setTermsDialog(false);
    localStorage.setItem("terms", "exists");
  };

  return (
    <div className="main-page">
      <div className="main-page-header">
        <img src={crib} alt="crib" />
        <Container className="main-page-header-text">
          <h1>You deserve to be a <span>happy</span> mother.</h1>
          <p>
          Take our 2 minute survey to learn more about your feelings after baby.
          </p>
          <p>
          Designed in collaboration with healthcare professionals from McMaster University.
          </p>
          <Button
            href="/survey/0"
            variant="contained"
          >
            Feeling Depressed?
          </Button>
        </Container>
        
      </div>

      {/* <div id="survey_select">
      {surveys &&
        surveys.map((val, index) => (
          <div
            tabIndex="1"
            className={index % 2 !== 0 ? "purple-background" : ""}
            id={index === 1 && "first_survey"}
            key={val.survey_id}
          >
            <Container maxWidth="md">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12} md={4} className="survey-image">
                  <img key={index} src={picture[index]} alt="image" />
                </Grid>
                <Grid item className="survey-description" xs={12} md={8}>
                  <div className="description-text">
                    <div className="title">
                      <div className="survey-name">{val.survey_name}</div>
                      <div className="num-questions">
                        {val.questions.length} questions
                      </div>
                    </div>
                    <Divider />
                    <p>{val.survey_description}</p>
                    <div className="start">
                      <div className="survey-time">Time: 3 mins</div>
                      <Button
                        component={Link}
                        variant="contained"
                        to={`/survey/${index}`}
                      >
                        Start
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        ))}
      </div> */}
      <Footer />
      <TermsDialog showDialog={termsDialog} closeDialog={closeTermsDialog} />
    </div>
  );
};

export default Main;
