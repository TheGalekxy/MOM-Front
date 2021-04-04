import React, { useContext, useState } from "react";
import { getAnswersByPersonID } from '../actions/answerActions';
import { AppContext } from "../context";
import image_1 from "../assets/swingmom.png";
import {
    LinearProgress,
    Container,
    Grid,
    Button,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import {Link} from 'react-router-dom';

const CompletedSurvey = ({ match }) => {
    const [progress, setProgress] = useState(100);
    const [answers, setAnswers] = useState(1);

    const { surveys, person } = useContext(AppContext);

    const currSurveyIndex = match.params.index;
    const currSurvey = surveys[currSurveyIndex];

    return (
        <div>
            <Button style={{
                color: 'purple',
                fontFamily: 'Quicksand',
                textTransform: 'none',
                marginTop: 20,
                marginLeft: 20
            }}
                variant="text"
                startIcon={<ChevronLeftIcon fontSize="large" />}
            >
                Back to main menu
            </Button>
        <Container maxWidth="md" className="completed-survey-page">
            <h1>{currSurvey.survey_name}</h1>
            <p className="completed-survey-page__progress-text">{progress}% complete</p>
            <LinearProgress variant="determinate" value={progress} style={{marginBottom: 20}} />
            <Grid container direction="column" justify="center" alignItems="center" >
                <Grid item xs={12} sm={10} md={9}>
                    <p className="completed-survey-page__title-text" style={{textAlign: 'center'}}>Woohoo!</p>
                    <p className="completed-survey-page__description-text">You're almost done this survey, would you like to review your answers?</p>
                    <img src={image_1} alt="swing"/>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" component={Link} to={`/review/${currSurveyIndex}`}>Review Answers</Button>
                </Grid>
            </Grid>
        </Container>
        </div>
    );
};

export default CompletedSurvey;
