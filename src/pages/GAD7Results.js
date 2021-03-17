import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../context";
import EmailDialog from "../components/EmailDialog";
import image_1 from "../assets/swingmom.png";
import image_2 from "../assets/chairmom.png";
import image_3 from "../assets/flying_kite.png";
import {
  Divider,
  Container,
  Grid,
  Button,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { getAnswersByPersonID } from '../actions/answerActions';
import {Link} from "react-router-dom";

const GAD7Results = ({match}) => {
  const [dialog, setDialog] = useState(false);
  const [score, setScore] = useState([]);

  const { person, surveys } = useContext(AppContext)

  const currSurveyIndex = match.params.index;
  const currSurvey = surveys[currSurveyIndex];

  useEffect(()=>{
    window.scrollTo(0,0,);
      getScore();
  }, []);

  const getScore = async () => {
    const answers = await getAnswersByPersonID(person.person_id);

    let score = 0;
    for (let i = 0; i < currSurvey.questions.length; i++){
      const options = currSurvey.questions[i].options;
      for (let j = 0; j < options.length; j++){
        if (answers.includes(options[j].option_id)){
          score += options[j].score;
        }
      }
    }
    setScore(score);
  }

  const openDialog = () => {
    setDialog(true);
  };

  const closeDialog = () => {
    setDialog(false);
  };

  let message = "You have a low chance of having anxiety";
  if (score >= 5) message = "you may have mild levels of anxiety"
  if (score >= 10) message = "you have moderate levels of anxiety"
  if (score >= 15) message = "you have severe levels of anxiety"

  return (
    <>
    <Container maxWidth="md" className="results-page">
      <Grid container direction="row" justify="space-around" alignItems="center">
        <h1>GAD-7 Results</h1>
        <Button
          variant="text"
          component={Link} to="/gad7nextsteps"
          endIcon={<ChevronRightIcon fontSize="large" />}
        >
          Next Steps
        </Button>
      </Grid>
      <Divider />

      <Grid container alignItems="center" justify="center" direction="row">
        <Grid item xs={11} sm={12} md={7}>
          <Grid item xs={12} sm={10} md={12} className="results-page__info-box">
            <p>Your Results</p>
            <p>Your total score is {score}. Based on this score, {message}.</p>
          </Grid>
          <Grid item xs={12} sm={10} md={12} >
            <p className="results-page__info-title">What is Postpartum Anxiety?</p>
            <Divider />
            <p className="results-page__info-text">
              Postpartum anxiety (PPA) is the one of most common complications of pregnancy and childbirth, affecting up to 1 in 4 women.
            </p>
            <p className="results-page__info-text">
              While up to 75 % of mothers experience the“ baby blues” after childbirth (mood swings (including anxiety), crying spells, anxiety, difficulty sleeping) for up to two weeks, some can experience more significant symptoms of worry and feeling on edge.Postpartum anxiety is marked by persistent and excessive anxiety about a range of things that causes significant distress and/or impairment in a mom’ s functioning (e.g., managing the household, taking care of infants and other children, etc).
            </p>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5} className="results-page__image-container">
          <img src={image_1} alt="swing" className="swing" />
        </Grid>
      
        <Grid item xs={0} md={5} className="results-page__image-container">
          <img src={image_2} alt="mom in wheelchair" className="chairmom" />
        </Grid> 
        <Grid item xs={10} sm={10} md={7}>
          <p className="results-page__info-title">Symptoms of Postpartum Anxiety</p>
          <Divider />
          <div className="results-page__info-text"> 
          <p>Postpartum Anxiety signs and symptoms may include:</p>
            <li>Excessive worry about everyday matters</li>
            <li>Feelings of dread</li>
            <li>Increased irritability and impatience</li>
            <li>Restlessness, agitation</li>
            <li>Racing thoughts</li>
            <li>Trouble concentrating</li>
            <li>Difficulty sleeping</li>
            <li>Rapid heartbeat</li>
            <li>Muscle tension</li>
            <li>Dry mouth</li>
          </div> 
        </Grid>

        <Grid item xs={11} sm={10} md={7}>
          <p className="results-page__info-title">Possible Consequences of Postpartum Anxiety</p>
          <Divider />
          <p className="results-page__info-text">
            Left untreated, PPA can increase the risk of anxiety problems that continue well into the future as well as affect your infants, other children, and your relationship with your partner.          
          </p>
          <p className="results-page__info-text">
            Unfortunately, PPA can disrupt mother–infant bonding and attachment, increase your risk of developing postpartum depression, interfere with breastfeeding, and adversely affect the cognitive and social development of your infant and other children.
          </p>
        </Grid>
        <Grid item xs={12} md={5} className="results-page__image-container">
          <img src={image_3} alt="flying kite" />
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Button component={Link} to="/gad7nextsteps" variant="contained">Next Steps</Button>
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    <EmailDialog showDialog={dialog} closeDialog={closeDialog} />
    </>
  );
};

export default GAD7Results;
