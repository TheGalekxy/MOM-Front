import React, { useContext, useState } from "react";
import { AppContext } from "../context";
import { createUser } from '../actions/userActions';
import {
  LinearProgress,
  Container,
  Grid,
  Button,
  TextField
} from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const DemographicSurvey = ({ surveyIndex }) => {
  const [progress, setProgress] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [postPartumPeriod, setPostPartumPeriod] = useState(null);
  const [firstChild, setFirstChild] = useState(null);
  const [province, setProvince] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [education, setEducation] = useState("");
  const [therapyType, setTherapyType] = useState("");
  const [siteFound, setSiteFound] = useState("");

  const { surveys, setPerson } = useContext(AppContext);
  const currSurvey = surveys[surveyIndex];

  const insertPerson = async () => {
    const personObject = {
      firstname: firstName,
      email: email,
      age: age,
      postpartum_period: postPartumPeriod,
      first_child: firstChild,
      province: province,
      ethnicity: ethnicity,
      marital_status: maritalStatus,
      education: education,
      therapy_type: therapyType,
      site_found: siteFound,
    }

    try {
      const person = await createUser(personObject);
      setPerson(person);
      window.localStorage.setItem('person_id', person.person_id);
    } catch (err) {
      console.log(err);
    }
  }

  const renderFirstNameField = () => {
    return (
      <Grid item xs={12} sm={12} md={12} className="form-div">
        <p className="demographic-survey-page__question-num">
          What's your name? (optional)
        </p>
        <form>
          <TextField className="shadow" variant="outlined" label="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
        </form>
      </Grid>
    );
  }

  const renderEmailField = () => {
    return (
      <Grid item xs={12} sm={10} md={12} className="form-div">
        <p className="demographic-survey-page__question-num">
          What's your email? (optional)
        </p>
        <form>
          <TextField className="shadow" variant="outlined" label="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </form>
      </Grid>
    );
  }

  const renderAgeField = () => {
    return (
      <Grid item xs={12} sm={10} md={12} className="form-div">
        <p className="demographic-survey-page__question-num">
          What's your age? (optional)
        </p>
        <form>
          <TextField className="shadow" type="number" variant="outlined" value={age} onChange={(e)=>setAge(e.target.value)}/>
        </form>
      </Grid>
    );
  }

  const renderPostpartumPeriodField = () => {
    return (
      <Grid item xs={12} sm={10} md={12} className="form-div">
        <p className="demographic-survey-page__question-num">
        Are you in the postpartum period of childbirth (i.e., post-birth to 12 months after)
        </p>
        <form>
        <ToggleButtonGroup
              orientation="horizontal"
              value={postPartumPeriod}
              exclusive
              onChange={(e, new_ans) => {setPostPartumPeriod(new_ans)}}
            >
              <ToggleButton key={true} value={true}>
                Yes
              </ToggleButton>
              <ToggleButton key={false} value={false} >
                No
              </ToggleButton>
            </ToggleButtonGroup>
        </form>
      </Grid>
    );
  }

  const renderFirstChildField = () => {
    return (
      <Grid item xs={12} sm={10} md={12} className="form-div">
        <p className="demographic-survey-page__question-num">
        Is this your first child?
        </p>
        <form>
        <ToggleButtonGroup
          
              orientation="horizontal"
              value={firstChild}
              exclusive
              onChange={(e, new_ans) => {setFirstChild(new_ans)}}
            >
              <ToggleButton key={true} value={true} >
                Yes
              </ToggleButton>
              <ToggleButton key={false} value={false} >
                No
              </ToggleButton>
            </ToggleButtonGroup>
        </form>
      </Grid>
    );
  }

  const renderProvinceField = () => {
    return (
      <Grid item xs={12} sm={10} md={12} className="form-div">
        <p className="demographic-survey-page__question-num">
        What province or territory do you live in?
        </p>
        <form>
        <FormControl className="form-dropdown"> 
          <InputLabel id = "province-select-label">Province</InputLabel>
          <Select
              labelId="province-select-label"
              id = "province-select"
              value={province}
              
              // exclusive
              onChange={(e) => {setProvince(e.target.value)}}
          >
              <MenuItem key="Alberta" value="Alberta">
              Alberta
              </MenuItem>
              <MenuItem key="British Columbia" value="British Columbia">
              British Columbia
              </MenuItem>
              <MenuItem key="Manitoba" value="Manitoba">
              Manitoba
              </MenuItem>
              <MenuItem key="New Brunswick" value="New Brunswick">
              New Brunswick
              </MenuItem>
              <MenuItem key="Newfoundland and Labrador" value="Newfoundland and Labrador">
              Newfoundland and Labrador
              </MenuItem>
              <MenuItem key="Northwest Territories" value="Northwest Territories">
              Northwest Territories
              </MenuItem>
              <MenuItem key="Nova Scotia" value="Nova Scotia">
              Nova Scotia
              </MenuItem>
              <MenuItem key="Nunavut" value="Nunavut">
              Nunavut
              </MenuItem>
              <MenuItem key="Ontario" value="Ontario">
              Ontario
              </MenuItem>
              <MenuItem key="Prince Edward Island" value="Prince Edward Island">
              Prince Edward Island
              </MenuItem>
              <MenuItem key="Quebec" value="Quebec">
              Quebec
              </MenuItem>
              <MenuItem key="Saskatchewan" value="Saskatchewan">
              Saskatchewan
              </MenuItem>
              <MenuItem key="Yukon" value="Yukon">
              Yukon
              </MenuItem>
              <MenuItem key="I live outside of Canada" value="I live outside of Canada">
              I live outside of Canada
              </MenuItem>
              </Select>
            </FormControl>
        </form>
      </Grid>
    );
  }

  const renderEthnicityField = () => {
    return (
      <Grid item xs={12} sm={10} md={12} className="form-div">
        <p className="demographic-survey-page__question-num">
        What is your ethnicity?
        </p>
        <form>
        <ToggleButtonGroup
              orientation="horizontal"
              value={ethnicity}
              exclusive
              onChange={(e, new_ans) => {setEthnicity(new_ans)}}
            >
              <ToggleButton key="Caucasian" value="Caucasian">
              Caucasian
              </ToggleButton>
              <ToggleButton key="Latino‎/Hispanic" value="Latino‎/Hispanic">
              Latino‎/Hispanic
              </ToggleButton>
              <ToggleButton key="Middle Eastern" value="Middle Eastern">
              Middle Eastern
              </ToggleButton>
              <ToggleButton key="African" value="African">
              African
              </ToggleButton>
              <ToggleButton key="Caribbean" value="Caribbean">
              Caribbean
              </ToggleButton>
              <ToggleButton key="South Asian" value="South Asian">
              South Asian
              </ToggleButton>
              <ToggleButton key="East Asian" value="East Asian">
              East Asian
              </ToggleButton>
              <ToggleButton key="Mixed" value="Mixed">
              Mixed
              </ToggleButton>
            </ToggleButtonGroup>

            <TextField className="text-input" variant="outlined" label="Other" onChange={(e)=>setEthnicity(e.target.value)}/>

        </form>
      </Grid>
    );
  }

  const renderMaritalStatusField = () => {
    return (
      <Grid item xs={12} sm={10} md={12} className="form-div">
        <p className="demographic-survey-page__question-num">
        What is your marital status?
        </p>
        <form>
        <ToggleButtonGroup
              orientation="horizontal"
              value={maritalStatus}
              exclusive
              onChange={(e, new_ans) => {setMaritalStatus(new_ans)}}
            >
              <ToggleButton key="Single" value="Single">
                Single
              </ToggleButton>
              <ToggleButton key="Married" value="Married">
                Married
              </ToggleButton>
              <ToggleButton key="Common Law" value="Common Law">
                Common Law
              </ToggleButton>
              <ToggleButton key="Divorced or Separated" value="Divorced or Separated">
                Divorced or Separated
              </ToggleButton>
              <ToggleButton key="Widowed" value="Widowed">
                Widowed
              </ToggleButton>
            </ToggleButtonGroup>
        </form>
      </Grid>
    );
  }

  const renderEducationField = () => {
    return (
      <Grid item xs={12} sm={10} md={12} className="form-div">
        <p className="demographic-survey-page__question-num">
        What is the maximum level of education you have achieved?
        </p>
        <form>
        <FormControl className="form-dropdown">
        <InputLabel id="education-select-label">Education</InputLabel>
        <Select
              labelId="education-select-label"
              id="education-select"
              value={education}
              onChange={(e) => {setEducation(e.target.value)}}
        >
              <MenuItem key="Some Elementary School" value="Some Elementary School">
              Some Elementary School
              </MenuItem>
              <MenuItem key="Elementary School Completed" value="Elementary School Completed">
              Elementary School Completed
              </MenuItem>
              <MenuItem key="Some High School" value="Some High School">
              Some High School
              </MenuItem>
              <MenuItem key="High School Graduation Certificate or Equivalent" value="High School Graduation Certificate or Equivalent">
              High School Graduation Certificate or Equivalent
              </MenuItem>
              <MenuItem key="Diploma or Certificate from Trade, Technical Or Vocational School Or Business
College" value="Diploma or Certificate from Trade, Technical Or Vocational School Or Business
College">
              Diploma or Certificate from Trade, Technical Or Vocational School Or Business
College
              </MenuItem>
              <MenuItem key="University Certificate or Diploma Below Bachelor Level" value="University Certificate or Diploma Below Bachelor Level">
              University Certificate or Diploma Below Bachelor Level
              </MenuItem>
              <MenuItem key="Bachelor's Degree" value="Bachelor's Degree">
              Bachelor's Degree
              </MenuItem>
              <MenuItem key="Master's Degree" value="Master's Degree">
              Master's Degree
              </MenuItem>
              <MenuItem key="Doctoral Degree in Medicine, Dentistry, Veterinary Medicine or Optometry" value="Doctoral Degree in Medicine, Dentistry, Veterinary Medicine or Optometry">
              Doctoral Degree in Medicine, Dentistry, Veterinary Medicine or Optometry
              </MenuItem>
              <MenuItem key="Doctoral Degree (PhD, PsyD, etc)" value="Doctoral Degree (PhD, PsyD, etc)">
              Doctoral Degree (PhD, PsyD, etc)
              </MenuItem>
              </Select>
            </FormControl>
        </form>
      </Grid>
    );
  }

  const renderTherapyTypeField = () => {
    return (
      <Grid item xs={12} sm={10} md={12} className="form-div">
        <p className="demographic-survey-page__question-num">
        Have you ever received any type of talking therapy or psychotherapy? If yes, please
describe the type of therapy briefly.
        </p>
        <form className="previous-therapy-form">
        <TextField id="therapy-text" variant="outlined" label="Yes (Please specify)" onChange={(e)=>setTherapyType(e.target.value)}/>

        <ToggleButtonGroup
              orientation="horizontal"
              value={therapyType}
              exclusive
              onChange={(e, new_ans) => {setTherapyType(new_ans)}}
            >
            <ToggleButton key={false} value={false} className="therapy-no" >
              No
              </ToggleButton>
            </ToggleButtonGroup>
        </form>
      </Grid>
    );
  }

  const renderSiteFoundField = () => {
    return (
      <Grid item xs={12} sm={10} md={12} className="form-div">
        <p className="demographic-survey-page__question-num">
        How did you hear about us?
        </p>
        <form className="survey-button-group">
        <ToggleButtonGroup
              orientation="horizontal"
              value={siteFound}
              exclusive
              onChange={(e, new_ans) => {setSiteFound(new_ans)}}
            >
            <ToggleButton key="Facebook" value="Facebook">
              Facebook
            </ToggleButton>
            <ToggleButton key="Instagram" value="Instagram">
            Instagram
            </ToggleButton>
            <ToggleButton key="Twitter" value="Twitter">
            Twitter
            </ToggleButton>
            <ToggleButton key="LinkedIn" value="LinkedIn">
            LinkedIn
            </ToggleButton>
            <ToggleButton key="Radio" value="Radio">
            Radio
            </ToggleButton>
            <ToggleButton key="TV" value="TV">
            TV
            </ToggleButton>
            <ToggleButton key="Newspaper" value="Newspaper">
            Newspaper
            </ToggleButton>
            <ToggleButton key="Word of mouth" value="Word of mouth">
            Word of mouth
            </ToggleButton>
        </ToggleButtonGroup>

        <TextField className="text-input shadow" variant="outlined" label="Other (Please specify)" onChange={(e)=>setSiteFound(e.target.value)}/>
        </form>
      </Grid>
    );
  }

  const renderTestField = () => {
    return(
      <Grid item xs={12} sm={10} md={12} className="form-div">
      <p className="demographic-survey-page__question-num">
      How did you hear about us?
      </p>
      <form>
      <FormControl >
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={(e) => {setAge(e.target.value)}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </form>
    </Grid>
    )
  }

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Button
            variant="text"
            startIcon={<ChevronLeftIcon fontSize="large" />}
          >
            Back to main menu
          </Button>
        </Grid>
      </Grid>
      <Container maxWidth="md" className="demographic-survey-page">
        <h1>{currSurvey.survey_name}</h1>
        <p className="demographic-survey-page__progress-text">
          {progress}% complete
        </p>
        <LinearProgress variant="determinate" value={progress} />
        <Grid container direction="row" justify="center" alignItems="center">
          {renderFirstNameField()}
          {renderEmailField()}
          {renderAgeField()}
          {renderPostpartumPeriodField()}
          {renderFirstChildField()}
          {renderProvinceField()}
          {renderEthnicityField()}
          {renderMaritalStatusField()}
          {renderEducationField()}
          {renderTherapyTypeField()}
          {renderSiteFoundField()}
        </Grid>

        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Button variant="contained" onClick={insertPerson}>Next</Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="text"
                  endIcon={<ChevronRightIcon fontSize="large" />}
                >
                  Skip
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DemographicSurvey;
