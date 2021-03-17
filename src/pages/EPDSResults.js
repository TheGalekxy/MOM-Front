import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../context";
import image_1 from "../assets/swingmom.png";
import image_2 from "../assets/chairmom.png";
import image_3 from "../assets/flying_kite.png";
import { Divider, Container, Grid, Button } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { getAnswersByPersonID } from '../actions/answerActions';
import {Link} from "react-router-dom";
import CollapsibleSection from "../components/CollapsibleSection";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Box } from "@material-ui/core";
import * as values from "./EPDSResultsContent";

const EPDSResults = ({match}) => {

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

  const [readMore1, setreadMore1] = useState(false);

  const down = <ExpandMoreIcon fontSize="small" />;
  const up = <ExpandLessIcon fontSize="small" />;

  let message = "it is unlikely that you may have postpartum depression. If you are struggling, you may wish to review our setions on the things that you can do to improve your mood.";
  //if (score >= 9) message = "it is possible that you have depression"
  //if (score >= 12) message = "there is a fairly high possibility that you have depression"
  //if (score >= 15) message = "it is probable that you have depression"
  if (score >= 10) message = "it is possible that you may have pospartum depression"

  let scoreMessage = "under 10"
  
  if (score >= 10) scoreMessage = "10 or above"

  return (
    <Container maxWidth="md" className="results-page">
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <h1></h1>
        <h1>Results</h1>
        <Button variant="text" component={Link} to="/epdsNextSteps" endIcon={<ChevronRightIcon fontSize="large" />}>
          Next Steps
        </Button>
      </Grid>
      <Divider />

      <Grid container alignItems="center" justify="center" direction="row">
        <Grid item xs={11} sm={12} md={7}>
          <Grid item xs={12} sm={10} md={12} className="results-page__info-box">
            <p className="results-page__result">Your total score is {scoreMessage}.</p>
            <p>
              Based on this score, {message}.
            </p>
          </Grid>
          <Grid item xs={12} sm={10} md={12}>
            <p className="results-page__info-title">
              What is Postpartum Depression?
            </p>
            <Divider />
            <p className="results-page__info-text">
              Postpartum depression (PPD) is the most common complication of childbirth and affects up to 1 in 5 women. 
            </p>
            <p className="results-page__info-text">
            While up to 75% of new moms experience the postpartum "baby blues" after childbirth 
            (briefer mood swings, crying spells, anxiety, insomnia) for up to two weeks, these 
            symptoms do not last most of the day every day, or for more than two weeks. However, 
            some mothers will experience more persistent and severe symptoms that cause substantial distress, 
            are present most of the day every day, and last for two weeks or more. 
            </p>
            {readMore1 && values.Content_1}
            <a
                onClick={() => {
                  setreadMore1(!readMore1);
                }}
              >
                <Box
                  display="flex"
                  className="results-page__info-dropdown"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <p>{readMore1 ? "Read Less" : "Read More"}</p>
                  {readMore1 ? up : down}
                </Box>
            </a>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5} className="results-page__image-container">
          <img src={image_1} alt="swing" className="swing" />
        </Grid>

        <Grid item xs={10} sm={12} md={12}>
          <div>
              <CollapsibleSection title="Symptoms of Postpartum Depression">
                <div>
                  <div className="results-page__info-text">
                    <p>Signs and symptoms of PPD may include:</p>
                    <ul>
                      <li>Depressed mood</li>
                      <li>Feeling that you're not a good mother or guilt that you’re doing a terrible job</li>
                      <li>Difficulty bonding with baby</li>
                      <li>
                        Reduced interest and pleasure in activities you used to enjoy
                      </li>
                      <li>Anxiety</li>
                      <li>Inability to sleep (insomnia) or sleeping way more than usual (hypersomnia)</li>
                      <li>Loss of appetite or eating a lot more than usual</li>
                      <li>Irritability/anger</li>
                      <li>Trouble concentrating and/or making decisions</li>
                      <li>Social withdrawal</li>
                    </ul>
                    <p>You can overcome PPD. International treatment guidelines suggest that most women 
                      with PPD should start with lifestyle interventions (e.g., exercise/nutrition, 
                      using your supports). If these are not effective then formal psychotherapies 
                      should be tried, and then medications if psychotherapy is not effective or is not 
                      available. Click through to see what you can do to recover and reclaim your life.
                    </p>
                  </div>
                </div>
                <div>
                </div>
              </CollapsibleSection>
          </div>
        </Grid>

        <Grid item xs={11} sm={12} md={12}>

            <div>
              <CollapsibleSection title="Possible Negative Effects of PPD">
                <div>
                  <div className="results-page__info-text">
                    <p>
                      Moms:
                    </p>
                    <ul>
                        <li>Increased risk of developing depression again in the future</li>
                        <li>Poorer mother-infant attachment</li>
                        <li>Reduced likelihood of returning to work after baby</li>
                        <li>Less breastfeeding</li>
                        <li>More struggles with parenting</li>
                    </ul>
                    <p>
                      Offspring:
                    </p>
                    <ul>
                        <li>More behavioural problems (like ADHD (attention-deficit/hyperactivity disorder) and oppositional defiant disorder</li>
                        <li>Higher rates of depression and anxiety</li>
                        <li>Poorer grades in school</li>
                    </ul>
                    <p>
                      Partners:
                    </p>
                    <ul>
                        <li>Higher rates of PPD</li>
                        <li>More seperation and divorce</li>
                        <li>Poorer work performance</li>
                    </ul>
                    
                  </div>
                </div>
                <div>
                </div>
              </CollapsibleSection>
            </div>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Button component={Link} to="/epdsNextSteps" variant="contained">Next Steps</Button>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EPDSResults;
