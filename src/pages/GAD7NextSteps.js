import React, { useContext, useState } from "react";
import { AppContext } from "../context";
import image_1 from "../assets/swingmom.png";
import image_2 from "../assets/flying_kite.png";
import image_3 from "../assets/chairmom.png";
import image_4 from "../assets/back_to_school.png";
import image_5 from "../assets/uppiesmom.png";
import image_6 from "../assets/foodmom.png";

import { Divider, Container, Grid, Button, Box } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Link } from "react-router-dom";
import * as values from "./NextStepsContent";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const GAD7NextSteps = () => {
  // const { currSurvey, currQuestion, setCurrQuestion } = useContext(AppContext);
  const [progress, setProgress] = useState(50);
  const [answer, setAnswer] = useState(1);
  const [readMore1, setreadMore1] = useState(false);
  const [readMore2, setreadMore2] = useState(false);
  const [readMore3, setreadMore3] = useState(false);
  const [readMore4, setreadMore4] = useState(false);
  const [readMore5, setreadMore5] = useState(false);
  const [readMore6, setreadMore6] = useState(false);
  const [readMore7, setreadMore7] = useState(false);
  const [readMore8, setreadMore8] = useState(false);
  const [readMore9, setreadMore9] = useState(false);
  const [readMore10, setreadMore10] = useState(false);
  const [readMore12, setreadMore12] = useState(false);
  const down = <ExpandMoreIcon fontSize="small" />;
  const up = <ExpandLessIcon fontSize="small" />;



  const handleAnswer = (event, newAnswer) => {
    setAnswer(newAnswer);
  };

  return (
    <Container maxWidth="md" className="next-steps-page">
      <Grid
        className="next-steps-nav"
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Button component={Link} to="/gad7Results/1" variant="text" startIcon={<ChevronLeftIcon fontSize="large" />}>
          Back to Results
        </Button>
        <h1>Next Steps</h1>
        <Button component={Link} to="/" variant="text" endIcon={<ChevronRightIcon fontSize="large" />}>
          Go to Home
        </Button>
      </Grid>
      <br></br>
      <Divider style={{ marginBottom: 40 }} />

      <Grid container alignItems="center" justify="center" direction="row">
        <Grid
          item
          xs={12}
          sm={10}
          md={12}
          className="next-steps-page__info-box"
        >
          <p>
            Treatment recommendations authored by professional organizations
            from around the world suggest that mothers with mild anxiety attempt
            lifestyle changes or low intensity (e.g., online) talking therapies
            (also known as psychotherapy) prior to attempting more intensive
            treatments like formal psychotherapy or medications.
          </p>
          <br></br>
          <br></br>
          <p>
            Below we outline some potential, scientific-based approaches to
            reducing the symptoms of PPA. We suggest modifying lifestyle changes
            first, followed by psychotherapy second, and complementary
            alternative medicines third.
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <p className="next-steps-page__info-title">Lifestyle Changes</p>
          <Divider />
          <div className="next-steps-page__info-text">
            <p>
              Mental health professionals from around the world recommend that
              women attempt to make lifestyle changes (e.g., nutrition,
              exercise, sleep) first in an attempt to decrease PPA.
            </p>
          </div>
        </Grid>
        <Grid item xs={11} sm={12} md={7}>
          <Grid item xs={12} sm={12} md={12}>
            <div className="next-steps-page__info-text">
              <h3>Nutrition</h3>
              <h4>How is Nutrition Linked to Postpartum Anxiety?</h4>
              <li>
                Following birth, many women are so busy that they may not notice
                being hungry or find it difficult to regularly eat a healthy,
                balanced diet
              </li>
              {readMore4 && values.extraContent_4_5}

              <h4>How can nutrition help?</h4>
              <li>
                Keep a water bottle nearby so that you can at least maintain
                your fluid intake throughout the day{" "}
              </li>
              {(readMore4 && values.extraContent_4) ||
                (!readMore4 && values.Content_4)}
              <a
                onClick={() => {
                  setreadMore4(!readMore4);
                }}
              >
                <Box
                  display="flex"
                  className="next-steps-page__info-dropdown"
                  alignItems="center"
                >
                  <p>{readMore4 ? "Read Less" : "Read More"}</p>
                  {readMore4 ? up : down}
                </Box>
              </a>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5} className="next-steps-page__image-container">
          <img src={image_1} alt="swing" className="swing" />
        </Grid>

        <Grid item xs={11} sm={12} md={12}>
          <div className="next-steps-page__info-text">
            <h3>Physical Activity</h3>

            <h4>How is Nutrition Linked to Postpartum Anxiety?</h4>
            <p style={{ paddingLeft: 30 }}>
              Following birth, it can be really difficult for new mothers to fit
              exercise into their daily routines. However, doing any physical
              activity on a regular basis is important to maintaining and
              improving your mental health.
            </p>

            <br></br>

            <h4>How Can Exercise help?</h4>
            <li>
              Choose exercise that is easy and/or that you enjoy so that you can
              do it on a regular basis
            </li>
            {(readMore5 && values.extraContent_5) ||
              (!readMore5 && values.Content_5)}
            <a
              onClick={() => {
                setreadMore5(!readMore5);
              }}
            >
              <Box
                display="flex"
                className="next-steps-page__info-dropdown"
                alignItems="center"
              >
                <p>{readMore5 ? "Read Less" : "Read More"}</p>
                {readMore5 ? up : down}
              </Box>
            </a>
          </div>
        </Grid>

        <Grid item xs={0} md={5} className="next-steps-page__image-container">
          <img src={image_2} alt="flying a kite" />
        </Grid>
        <Grid item xs={10} sm={10} md={7}>
          <div className="next-steps-page__info-text">
            <h3>Sleep</h3>

            <h4>How is Sleep linked to Postpartum Anxiety?</h4>
            <p style={{ paddingLeft: 30 }}>
              Adequate rest and sleep are vital to your mental and physical
              health, especially after having baby.{" "}
              {readMore1 && (
                <>
                  Or course, in the postpartum period, it can be difficult to
                  get the quality and quantity of sleep that you need.
                  Practicing good sleep routines can benefit those with mood
                  disorders as poor sleep can affect mood, leading to
                  irritability and sometimes depression.
                </>
              )}
            </p>

            <br></br>

            <h4>What Changes are Evidence-Based?</h4>
            <li>
              Create a bedtime routine or ritual. Make a wind down period for
              you to follow every night before bed such as taking a hot bath,
              light reading, or doing relaxation exercises
            </li>
            {readMore1 && values.extraContent_1}
            <a
              onClick={() => {
                setreadMore1(!readMore1);
              }}
            >
              <Box
                display="flex"
                className="next-steps-page__info-dropdown"
                alignItems="center"
              >
                <p>{readMore1 ? "Read Less" : "Read More"}</p>
                {readMore1 ? up : down}
              </Box>
            </a>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className="next-steps-page__info-text">
            <h3>Stress Reduction</h3>
            <h4>How is Stress Reduction linked to Postpartum Anxiety?</h4>
            <p style={{ paddingLeft: 30 }}>
              An area in your life that could become neglected during the
              postpartum period is stress reduction.{" "}
              {readMore2 && (
                <>
                  {" "}
                  Learning to take time for yourself can be very difficult for a
                  lot of moms as feelings of guilt may appear during leisure
                  time. Becoming aware of what triggers anxiety and feelings of
                  sadness can help you reduce the stress you feel on a daily
                  basis.
                </>
              )}
            </p>

            <h4>What Changes are Evidence-Based?</h4>
            <li>
              Take some time to learn and practice relaxation techniques such as
              Progressive Muscle Relaxation and Box Breathing
            </li>
            {readMore2 && values.extraContent_2}
            <a
              onClick={() => {
                setreadMore2(!readMore2);
              }}
            >
              <Box
                display="flex"
                className="next-steps-page__info-dropdown"
                alignItems="center"
              >
                <p>{readMore2 ? "Read Less" : "Read More"}</p>
                {readMore2 ? up : down}
              </Box>
            </a>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className="next-steps-page__info-text">
            <h3>Using Supports</h3>

            <h4>How are Supports linked to Postpartum Anxiety?</h4>
            <p style={{ paddingLeft: 30 }}>
              Engaging your supports (i.e., emotional, practical, social
              network, and informational) allows one to adapt to life with a
              baby more smoothly and easily.{" "}
              {readMore3 && (
                <>
                  Healthy relationships can play an important role in protecting
                  new moms against mental health disorders and help them in
                  their recovery from postpartum anxiety.
                </>
              )}
            </p>

            <h4>What types of support can be helpful?</h4>
            <li>
              Emotional support, such as a close friend who you can talk to
              about your feelings, provides you with a sense of how valuable you
              are as an individual. Some possible sources of emotional support
              may include a close friend, your partner, and your family.
            </li>
            {(readMore3 && values.extraContent_3) ||
              (!readMore3 && values.Content_3)}
            <a
              onClick={() => {
                setreadMore3(!readMore3);
              }}
            >
              <Box
                display="flex"
                className="next-steps-page__info-dropdown"
                alignItems="center"
              >
                <p>{readMore3 ? "Read Less" : "Read More"}</p>
                {readMore3 ? up : down}
              </Box>
            </a>
          </div>
        </Grid>

        <Grid item xs={12} md={12} className="next-steps-page__image-container">
          <img
            style={{ maxWidth: "30%" }}
            src={image_3}
            alt="mom in wheelchair"
          />
        </Grid>

        <Grid item xs={11} sm={12} md={7}>
          <Grid item xs={12} sm={12} md={12}>
            <p className="next-steps-page__info-title">Psychotherapy</p>
            <Divider />
            <div className="next-steps-page__info-text">
              <h3>Low Intensity Psychotherapy</h3>
              <p>
                Low intensity psychotherapy refers to Cognitive Behavioural
                Therapy (CBT) that is not guided directly by a trained mental
                health professional. CBT is a type of psychotherapy. It focuses
                on the present – on the problems that come up in day-to-day
                life. CBT helps people examine how they make sense of their
                thoughts, feelings, and behaviours, as well as how these three
                concepts interact and influence one another. CBT can be used to
                improve the mental health of mothers through low intensity
                methods that are not guided by mental health experts or by
                formal methods that are guided by mental health experts.
              </p>
              <p>
                Clinical practice guidelines recommend evidence-based
                psychotherapies such as CBT as 1st-line treatments for the
                majority of women with PPD. Furthermore, CBT has been shown to
                be more effective in reducing short and long terms symptoms of
                PPD than traditional therapy methods such as medications.
              </p>
              <p>
                Due to the structure, problem-focused, and goal-oriented nature
                of CBT, mothers are able to better manage their own mental
                health problems by learning about CBT coping strategies and
                skills through a variety of resources. Some of the best
                resources are listed below:
                <div style={{ color: "purple" }}>
                  <li>
                    <a href="https://llettonna.com/" target="_blank" rel="noopener noreferrer">
                      MomsInMind
                    </a>
                  </li>
                  <li>
                    <a href="https://moodgym.com.au/" target="_blank" rel="noopener noreferrer">
                      moodgym
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://play.google.com/store/apps/details?id=bot.touchkin&amp;hl=en_CA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wysa
                    </a>
                  </li>
                </div>
                <br></br>
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5} className="next-steps-page__image-container">
          <img src={image_4} alt="swing" className="swing" />
        </Grid>

        <Grid
          item
          xs={12}
          sm={10}
          md={12}
          className="next-steps-page__info-box2"
        >
          <p className="next-steps-page__info-title">
            Subscribe to our MomsInMind App
          </p>
          <Divider />
          <p>
            Our Team at lleTTonna is currently developing MomsInMind, a mobile
            and web application that supports new mothers’ mental health through
            the postpartum period.
          </p>
          <p>
            Designed in consultation with physicians, psychologists, nurses,
            social workers, and women who have recovered from postpartum anxiety
            and depression, MomsInMind provides access to clinically proven
            Cognitive Behavioral Therapy strategies and tools created
            specifically for women to reduce negative thoughts, improve mood,
            and maximize engagement with infants and families. To learn more
            about MomsInMind and other lleTTonna products, please visit our{" "}
            <a href="https://llettonna.com/" target="_blank" rel="noopener noreferrer">
              website
            </a>
            .
          </p>
        </Grid>

        <Grid item xs={11} sm={12} md={12}>
          <div className="next-steps-page__info-text">
            <h3>Formal Psychotherapy</h3>
            <p>
              Formal psychotherapy can be provided by a psychiatrist,
              psychologist, social worker, nurse, registered psychotherapist, or
              other mental health professional. This type of therapy can help
              you talk through your concerns and develop better ways to cope
              with negative feelings, set tangible goals, and respond to
              situations in a positive manner.{" "}
              {readMore6 && (
                <>
                  Listed below are types of psychotherapies that mothers
                  commonly receive for the treatment of PPD:
                </>
              )}
            </p>
            {(readMore6 && values.extraContent_6) ||
              (!readMore6 && values.Content_6)}
            <a
              onClick={() => {
                setreadMore6(!readMore6);
              }}
            >
              <Box
                display="flex"
                className="next-steps-page__info-dropdown"
                alignItems="center"
              >
                <p>{readMore6 ? "Read Less" : "Read More"}</p>
                {readMore6 ? up : down}
              </Box>
            </a>
            {/* LAST NO */}
          </div>
        </Grid>

        <Grid item xs={11} sm={12} md={7}>
          <Grid item xs={12} sm={12} md={12}>
            <p className="next-steps-page__info-title">
              Complementary and Alternative Medicines
            </p>
            <Divider />
            <div className="next-steps-page__info-text">
              <h3>Bright Light Therapy (BLT)</h3>
              <h4>What is it?</h4>
              <p>
                BLT involves sitting or working near a light therapy box that
                emits a bright light that mimics sunlight.
              </p>
              {(readMore7 && values.extraContent_7) ||
                (!readMore7 && values.Content_7)}
              <a
                onClick={() => {
                  setreadMore7(!readMore7);
                }}
              >
                <Box
                  display="flex"
                  className="next-steps-page__info-dropdown"
                  alignItems="center"
                >
                  <p>{readMore7 ? "Read Less" : "Read More"}</p>
                  {readMore7 ? up : down}
                </Box>
              </a>

              <br></br>

              <h3>Yoga</h3>
              <p>
                Yoga is a combination of physical and mental exercises that are
                used to calm and strengthen the body and mind.
              </p>
              {(readMore8 && values.extraContent_8) ||
                (!readMore8 && values.Content_8)}
              <a
                onClick={() => {
                  setreadMore8(!readMore8);
                }}
              >
                <Box
                  display="flex"
                  className="next-steps-page__info-dropdown"
                  alignItems="center"
                >
                  <p>{readMore8 ? "Read Less" : "Read More"}</p>
                  {readMore8 ? up : down}
                </Box>
              </a>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5} className="next-steps-page__image-container">
          <img src={image_5} className="swing" alt="swing"/>
        </Grid>

        <Grid item xs={12} md={5} className="next-steps-page__image-container">
          <img src={image_6} className="swing" alt="swing"/>
        </Grid>
        <Grid item xs={11} sm={12} md={7}>
          <Grid item xs={12} sm={12} md={12}>
            <div className="next-steps-page__info-text">
              <h3>Massage Therapy</h3>
              <p>
                Massage therapy is a traditional therapy technique in which a
                therapist manipulates your muscles and other soft tissues to
                promote relaxation.
              </p>
              {(readMore9 && values.extraContent_9) ||
                (!readMore9 && values.Content_9)}
              <a
                onClick={() => {
                  setreadMore9(!readMore9);
                }}
              >
                <Box
                  display="flex"
                  className="next-steps-page__info-dropdown"
                  alignItems="center"
                >
                  <p>{readMore9 ? "Read Less" : "Read More"}</p>
                  {readMore9 ? up : down}
                </Box>
              </a>

              <br></br>

              <h3>Omega-3-Fatty Acids</h3>
              <p>
                Omega-3 fatty acids are contained in fish and fish oil. Two
                important types of Omega-3 fatty acids include eicosapentanoic
                acid (EPA) and docosahexanoic acid (DHA).
              </p>
              {(readMore10 && values.extraContent_10) ||
                (!readMore10 && values.Content_10)}
              <a
                onClick={() => {
                  setreadMore10(!readMore10);
                }}
              >
                <Box
                  display="flex"
                  className="next-steps-page__info-dropdown"
                  alignItems="center"
                >
                  <p>{readMore10 ? "Read Less" : "Read More"}</p>
                  {readMore10 ? up : down}
                </Box>
              </a>
            </div>
          </Grid>
        </Grid>

        <Grid item xs={11} sm={12} md={12}>
          <Grid item xs={12} sm={12} md={12}>
            <p className="next-steps-page__info-title">Medications</p>
            <Divider />
            <div className="next-steps-page__info-text">
              <p>
                Pharmacotherapy (Medications) may be used in combination with a
                variety of alternative treatment options or psychotherapy to
                treat moms who have severe symptoms of PPA.
              </p>
              {readMore12 && values.extraContent_12}
              <a
                onClick={() => {
                  setreadMore12(!readMore12);
                }}
              >
                <Box
                  display="flex"
                  className="next-steps-page__info-dropdown"
                  alignItems="center"
                >
                  <p>{readMore12 ? "Read Less" : "Read More"}</p>
                  {readMore12 ? up : down}
                </Box>
              </a>
              {/*  */}

              <p>
                External Resources:
                <div style={{ color: "purple" }}>
                  <li>
                    <a href="https://www.anxietycanada.com/" target="_blank" rel="noopener noreferrer" >
                      Anxiety Canada
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.camh.ca/en/health-info/mental-illness-and-addiction-index/postpartum-depression"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Centre for Addiction and Mental Health (CAMH)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.postpartum.net/get-help/locations/international/canada/">
                      Postpartum Support International
                    </a>
                  </li>
                </div>
              </p>
              <p style={{ paddingLeft: 50, marginTop: 50 }}>
                *Disclaimer: This information is not meant to be used as a
                medical recommendation - only a trained healthcare professional
                should recommend specific treatment plans. If you have any
                concerns regarding any of the information presented here, please
                consult your primary healthcare professional.
              </p>
            </div>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Button variant="contained" component={Link} to="/">
                Back to Home
              </Button>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GAD7NextSteps;
