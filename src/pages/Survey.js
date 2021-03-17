import React, { useContext, useState, useEffect } from "react";
import DemographicSurvey from "./DemographicSurvey";
import { postAnswer } from "../actions/answerActions";
import { AppContext } from "../context";
import swing from "../assets/swingmom.png";
import mom1 from "../assets/depression-photo.png";
import mom2 from "../assets/sleep-photo.png";
import mom3 from "../assets/anxiety-photo.png";
import {
  LinearProgress,
  Divider,
  Container,
  Grid,
  Button,
} from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
const photo = [mom1, mom2, mom3];
let counter = 0;
let random = 0;
const Survey = ({ history, match }) => {
  const [answerIndex, setAnswerIndex] = useState(-1);
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);

  const { person, surveys } = useContext(AppContext);

  const currSurveyIndex = match.params.index;
  const currSurvey = surveys[currSurveyIndex];
  const currQuestion = currSurvey.questions[currQuestionIndex];

  random = Math.floor(Math.random() * photo.length);
  while (random == counter) {
    random = Math.floor(Math.random() * photo.length);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const btnClicked = async () => {
    console.log(person);
    const personID = person.person_id;
    const optionID = answerIndex >= 0 ? currQuestion.options[answerIndex].option_id : null;
    console.log(personID, optionID);
    await postAnswer(personID, optionID);
    counter = random;
    if (currQuestionIndex < currSurvey.questions.length - 1) {
      setCurrQuestionIndex(currQuestionIndex + 1);
      setAnswerIndex(-1);
      window.scrollTo(0, 0);
    } else {
      let route;
      console.log(currSurvey);
      if ( currSurvey.survey_name === "Anxiety"){
        route = "/gad7Results/"+currSurveyIndex;
      } else {
        route = "/epdsResults/"+currSurveyIndex;
      }
      history.push(route);
     } //else {
     // history.push("/surveyComplete/" + currSurveyIndex);
    //}
  };

  const handleAnswer = (event, newAnswer) => {
    console.log(newAnswer);
    setAnswerIndex(newAnswer);
    window.scrollTo(500, 500);
  };

  const progress = Math.round(
    (currQuestionIndex / currSurvey.questions.length) * 100
  );

  if (person === null)
    return <DemographicSurvey surveyIndex={currSurveyIndex} />;

  return (
    <>
      <Container maxWidth="lg" className="survey-page">
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} md={3}>
            <Button
              style={{
                color: "purple",
                fontFamily: "Quicksand",
                textTransform: "none",
              }}
              variant="text"
              startIcon={<ChevronLeftIcon fontSize="large" />}
              href="/"
            >
              Back to main menu
            </Button>
          </Grid>
        </Grid>
        <h1>Edinburgh Postnatal Depression Scale (EPDS)*</h1>
        <p className="survey-page__progress-text">{progress}% complete</p>
        <LinearProgress variant="determinate" value={progress} />
        <Grid container direction="row" justify="center" alignItems="center"> 
          <Grid item xs={12} sm={10} md={7}>
            <p className="survey-page__question-num">
              Question {currQuestionIndex + 1}
            </p>
            <Divider />
            <p className="survey-page__question-text">
              In the past 7 days, {currQuestion && currQuestion.question}
            </p>
            <ToggleButtonGroup
              orientation="vertical"
              value={answerIndex}
              exclusive
              onChange={handleAnswer}
            >
              {currQuestion.options &&
                currQuestion.options.map((option, index) => (
                  <ToggleButton key={index} value={index}>
                    {option.description}
                  </ToggleButton>
                ))}
            <Button variant="contained" style={{marginTop: "20px", borderRadius:"200px", }} onClick={() => btnClicked()}>
              Next
            </Button>
            </ToggleButtonGroup>
          </Grid>
          <Grid item xs={12} md={5} className="survey-page__image-container">
            <img src={photo[counter]} alt="swing" />
          </Grid>
          <Grid>
          <h4>
                *The EPDS is a valid and reliable screening tool for measuring the presence of symptoms of depression and anxiety in women during pregnancy and the postpartum period. For more information see the following publication: 
          </h4>
          <h5><a style={{color: "gray",}} href="https://pubmed.ncbi.nlm.nih.gov/3651732/">
                Detection of postnatal depression. Development of the 10-item Edinburgh Postnatal Depression Scale 
          </a></h5>
          </Grid>
        </Grid>
      </Container>
    </>
    //<h1>{currSurvey.survey_name}</h1>
    // Hard coded the survey name as a temp solution because back-end changes are not being reflected on the webpage
  );
};

export default Survey;
