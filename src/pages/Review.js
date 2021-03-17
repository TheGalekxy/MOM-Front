import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";
import { LinearProgress, Container, Grid, Button } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { getAnswersByPersonID } from '../actions/answerActions';

const Review = ({ history, match }) => {
  const { surveys, person } = useContext(AppContext);

  const [answers, setAnswers] = useState([]);

  const currSurveyIndex = match.params.index;
  const currSurvey = surveys[currSurveyIndex];

  const handleOptionClick = () => {

  }

  useEffect(()=>{
      fetchAnswers();
  }, []);

  const fetchAnswers = async () => {
    const answers = await getAnswersByPersonID(person.person_id);
    setAnswers(answers);
  }

  const getAnswerIndexOfQuestion = question => {
    for (let i = 0; i < question.options.length; i++){
      const option = question.options[i];
      if ( answers.includes(option.option_id) ) return i;
    }
    return -1;
  }

  const handleSubmitClick = () => {
    let route;
    console.log(currSurvey);
    if ( currSurvey.survey_name === "Anxiety"){
      route = "/gad7Results/"+currSurveyIndex;
    } else {
      route = "/epdsResults/"+currSurveyIndex;
    }
    history.push(route);
  }

  return (
    <>
      <Container maxWidth="md" className="review-page">
        <h1>Review {currSurvey && currSurvey.survey_name}</h1>
        <p className="review-page__progress-text">100% complete</p>
        <LinearProgress
          variant="determinate"
          value={100}
          style={{ marginBottom: 20 }}
        />
        <Grid container direction="row" justify="center" alignItems="center">
          {currSurvey &&
            currSurvey.questions.map((question, i) => (
              <Grid item xs={12} sm={10} md={9} key={question.question_id}>
                <div className="review-page__question-text">
                  <p className="review-page__question-header">Question {i+1}</p>
                  <p>{question.question}</p>
                </div>
                <ToggleButtonGroup
                  style={{ display: "grid" }}
                  value={getAnswerIndexOfQuestion(question)}
                  exclusive
                >
                  {question.options &&
                    question.options.map((option, j) => (
                      <ToggleButton
                        className={j % 2 === 0 ? "grid-1" : "grid-2"}
                        value={j}
                        key={option.option_id}
                        onClick={() => handleOptionClick()}
                      >
                        {option.description}
                      </ToggleButton>
                    ))}
                </ToggleButtonGroup>
              </Grid>
            ))}

          <Grid item xs={12}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <p
                  className="review-page__submit-text"
                >
                  Confident in the accuracy of the answers given?
                </p>
                <Button variant="contained" onClick={handleSubmitClick}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      
    </>
  );
};

export default Review;
