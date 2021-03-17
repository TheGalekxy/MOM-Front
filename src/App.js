import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";
import Survey from "./pages/Survey";
import Review from "./pages/Review";
import NavBar from "./components/NavBar";
import EPDSResults from './pages/EPDSResults';
import GAD7Results from './pages/GAD7Results';
import { AppProvider } from "./context";

import "./styles/App.scss";
import CompletedSurvey from "./pages/CompletedSurvey";
import DemographicSurvey from "./pages/DemographicSurvey";
import EPDSNextSteps from "./pages/EPDSNextSteps";
import GAD7NextSteps from "./pages/GAD7NextSteps";

// for testing
import { mockQuestions, mockSurveys, mockAnswers } from "./mockData";

import { getSurveys } from './actions/surveyActions';
import { getPersonByID } from './actions/userActions';

const App = () => {
  const [surveys, setSurveys] = useState(null);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetchServerData();
  }, []);

  const fetchServerData = async () => {
    const personID = window.localStorage.getItem("person_id");
    if (personID !== null) {
      const person = await getPersonByID(personID);
      console.log(person);
      setPerson(person);
    }
    const surveys = await getSurveys();
    console.log(surveys);
    setSurveys(surveys);
  }

  if (surveys === null) return <div> Loading </div>

  return (
    <>
      <AppProvider
        value={{
          surveys,
          person, setPerson,
        }}
      >
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/survey/:index" component={Survey} />
            <Route path="/review/:index" component={Review} />
            <Route path="/epdsResults/:index" component={EPDSResults} />
            <Route path="/gad7Results/:index" component={GAD7Results} />
            <Route path="/epdsNextSteps" component={EPDSNextSteps} />
            <Route path="/gad7NextSteps" component={GAD7NextSteps} />
            <Route path="/surveyComplete/:index" component={CompletedSurvey} />
          </Switch>
        </Router>
      </AppProvider>
    </>
  );
};

export default App;
