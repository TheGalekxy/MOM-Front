import React, { useContext, useState } from "react";
import { AppContext } from "../context";
import nutritionCarrot from "../assets/nutrition-carrot.png";
import stressReductionPlant from "../assets/stress-reduction-plant.png";
import willow from "../assets/willow.png";
import yogaMom from "../assets/yogaMom.png";
import Logo from "../assets/Logo.png";
import CanadaFoodGuideImage from "../assets/CanadaFoodGuide.png";
import CaffeineInformerImage from "../assets/CaffeineInformer.png";
import PostpartumSupportInternationalImage from "../assets/Postpartum-support-international.png";
import Covid19InnovationsImage from "../assets/COVID-19-Innovations-in-Healthcare.png";
import { Divider, Container, Grid, Button, Box } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import CollapsibleSection from "../components/CollapsibleSection";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Link } from "react-router-dom";
import * as values from "./NextStepsContent";

const EPDSNextSteps = ({ match }) => {
  const [progress, setProgress] = useState(50);
  const [answer, setAnswer] = useState(1);

  const handleAnswer = (event, newAnswer) => {
    setAnswer(newAnswer);
  };

  return (
    <Container maxWidth="md" className="next-steps-page">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Button component={Link} to="/epdsResults/1" variant="text" startIcon={<ChevronLeftIcon fontSize="large" />}>
          Back to Results
        </Button>
        <h1 class="next-steps-h1">Next Steps</h1>
        <Button component={Link} to="/" variant="text" endIcon={<ChevronRightIcon fontSize="large" />}>
          Go to Home
        </Button>
      </Grid>
      <br></br>
      <Divider />

      <h1>How You Can Start to Overcome PPD</h1>

      <Grid container alignItems="center" justify="center" direction="row">
        <Grid
          item
          xs={12}
          sm={10}
          md={11}
          className="next-steps-page__info-box"
        >

          <p>
            Treatment recommendations authored by professional organizations
            from around the world suggest that mothers with PPD attempt
            lifestyle changes or low intensity (e.g., online) therapies
            prior to attempting more intensive treatments like formal psychotherapy or medications.
          </p>
          <p>
            Below you will find a range of lifestyle approaches based on cutting-edge research that can help improve PPD and reduce its symptoms.            
          </p>
          <p>
            The Lifestyle steps that you can take to overcome PPD are easier to remember if you use the NEST-S approach to self-care:
          </p>
          <ul>
            <li>Nutrition</li>
            <li>Exercise</li>
            <li>Sleep</li>
            <li>Time for yourself</li>
            <li>Support</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={12} md={12} >
          <h2 className="next-steps-page__info-title">Step 1: Lifestyle Changes</h2>
          <Divider />

          <Grid item xs={12} sm={12} md={12}>

          <CollapsibleSection title="Nutrition">
            <div className="inside">
              <div className="next-steps-page__info-text">
                <h4>How Is Nutrition Linked to Postpartum Depression?</h4>
                <ul>
                  <li>After birth, women are so busy that they may not notice that they are hungry or struggle to consume a healthy, balanced diet</li>
                  <li>Food and fluids are your brain’s fuel and are required for it to operate properly</li>
                  <li>Without these, low mood, anxiety, and irritability can develop</li>
                </ul>

                <h4>What You Can Do:</h4>
                <ul>
                  <li>Keep a full container of water nearby and sip from it when you can</li>
                  <li>Have easy, healthy snacks that available/accessible (e.g., baby carrots, cherry
                      tomatoes, fruits, nuts, and bagged salad)</li>
                  <li>Sit down to eat three times per day</li>
                  <li>Have others prepare meals/snacks for you and drop them off</li>
                  <li>Attempt to follow the Canada food guide</li>
                  <li>Carefully monitor caffeine intake – it can make anxiety/irritability worse if overused.
                      Visit       <a
                  href="https://www.caffeineinformer.com/death-by-caffeine"
                  target="_blank"
                  rel="noopener noreferrer"
                >Caffeine Calculator </a> 
                  to see how much caffeine you should have per day</li>
                  <li>Gradually reduce tobacco intake with an eye toward quitting over time Visit this       
                    <a
                      href="https://www.canada.ca/en/health-canada/services/smoking-tobacco/quit-smoking/tips-help-someone-quit-smoking/you-can-quit-smoking-we-can-help.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Government of Canada article
                    </a> 
                  to see your quitting options</li>
                  <li>Avoid recreational substances such as alcohol and cannabis if you feel depressed as they interfere with your diet, memory, and mood</li>
                </ul>
                <div class="nutritionTextAndImage">
                  <div>
                    <h5>Resources</h5>
                    <ul style={{ "list-style-type": "none" }}>
                      <li>
                        <a
                          href="https://food-guide.canada.ca/en/?wbdisable=true"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Canada's Food Guide
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.caffeineinformer.com/death-by-caffeine"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          Caffeine Calculator
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.canada.ca/en/health-canada/services/smoking-tobacco/quit-smoking/tips-help-someone-quit-smoking/you-can-quit-smoking-we-can-help.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          Government of Canada Article on Tobacco Cessation
                        </a>
                      </li>
                                        <li>
                        <a
                          href="https://www.canada.ca/en/health-canada/services/smoking-tobacco/quit-smoking/tips-help-someone-quit-smoking/you-can-quit-smoking-we-can-help.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          Postpartum Diet Plan: Tips for Healthy Eating After Giving Birth
                        </a>
                      </li>
                                                          <li>
                        <a
                          href="https://www.canada.ca/en/health-canada/services/smoking-tobacco/quit-smoking/tips-help-someone-quit-smoking/you-can-quit-smoking-we-can-help.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          Nutrition and Mental Health
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="nutritionImage">
                    <img src={nutritionCarrot} alt="Carrot" className="carrot" />
                  </div>
                </div>
                
              </div>
            </div>

            <div className="outside">
              <div class="imageContainer">
                <img src={CanadaFoodGuideImage} alt="Carrot" className="swing" />
                <img src={CaffeineInformerImage} alt="Carrot" className="swing" />
              </div>

              <div class="outsideText">
                <h3>See also:</h3>
                  <ul style={{ "list-style-type": "none" }}>
                    <li>
                      <a
                        href="https://www.canada.ca/en/health-canada/services/smoking-tobacco/quit-smoking/tips-help-someone-quit-smoking/you-can-quit-smoking-we-can-help.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        Government of Canada Article on Tobacco Cessation
                      </a>
                    </li>
                                      <li>
                      <a
                        href="https://www.canada.ca/en/health-canada/services/smoking-tobacco/quit-smoking/tips-help-someone-quit-smoking/you-can-quit-smoking-we-can-help.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        Postpartum Diet Plan: Tips for Healthy Eating After Giving Birth
                      </a>
                    </li>
                                                        <li>
                      <a
                        href="https://www.canada.ca/en/health-canada/services/smoking-tobacco/quit-smoking/tips-help-someone-quit-smoking/you-can-quit-smoking-we-can-help.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        Nutrition and Mental Health
                      </a>
                    </li>
                  </ul>
              </div>
            </div>
          </CollapsibleSection>
          </Grid>
        </Grid>
        

        <Grid item xs={11} sm={12} md={12}>

          <CollapsibleSection title="Exercise">
            <div>
              <div className="next-steps-page__info-text">
                <h5>How Is Physical Activity Linked to Postpartum Depression?</h5>
                <ul>
                  <li> Following birth, it can be really challenging to exercise. However, even just a little
     regular physical activity can help improve your mood, sleep, and anxiety
                  </li>
                </ul>

                <h5>What You Can Do:</h5>
                <ul>
                  <li>Choose exercise that is easy (and even enjoyable if possible)</li>
                  <li>Try exercising at home or trying to do things that you did before baby </li>
                  <li>Start small! For example, try to walk for 10-15 minutes, three times per week
     (and then increase by 2 minutes each week)</li>
                  <li>Involve someone you like (e.g., another new mom) to help you to meet your
            goals</li>

                </ul>


                
                <h5>Some other potential exercises that you can do can be found here.</h5>
                <ul>
                  <li>Prioritize yourself and your health and be consistent if you can (e.g., 3 times a week)</li>
                  <li>Take your baby with you to exercise or find childcare For examples of exercises you can do with baby, look here.</li>
                  <li>Exercise at home using work-out videos on YouTube</li>
                  <li> Yoga has been demonstrated to be an effective exercise program for reducing PPD </li>

                </ul>
              
              </div>
            </div>
            <div>
              {null}
            </div>
          </CollapsibleSection>
        </Grid>

        <Grid item xs={11} sm={12} md={12}>

          <CollapsibleSection title="Sleep">
            <div>
              <div className="next-steps-page__info-text">
                <h5>How Is Sleep Linked to Postpartum Depression?</h5>
                <ul>
                  <li> Adequate rest and sleep are vital to your mental and physical health, especially after
baby. 
                  </li>
                  <li> 
                    Research suggests that getting more than 3 continuous hours of sleep per day can reduce your risk of PPD substantially
                  </li>
                  <li> 
                    In the postpartum period, it can be difficult to get the quality and quantity of sleep that you need
                  </li>
                  <li> 
                    Practicing good sleep routines and using relaxation techniques can help
                  </li>
                </ul>

                <h5>What Can I Do to Help?</h5>
                <ul>
                  <li>Have your partner take the feed after you go to bed (or the last one of the night if they are an early riser)</li>
                  <li>Nap or rest when your baby naps if you can </li>
                  <li>Create a bedtime routine or ritual</li>
                  <li>Consider a nightly program to follow before bed such as taking a hot bath, doing some light reading, and/or relaxation exercises</li>
                  <li>Make sure that your bedroom is only for sleeping</li>
                  <li>Try to ensure that your bedroom is dark and cool</li>
                  <li>Go to bed at the same hour every night if you can (consistency is key)</li>
                  <li>Ask for help to complete your tasks before bed</li>
                  <li>Avoid caffeine after 4 pm.</li>
                  <li>Avoid eating too much after 7 pm</li>
                  <li>Avoid alcohol, smoking, and screen time (including phones) in the last hour before bed as these all disrupt sleep</li>
                  <li>Relaxation techniques such as Progressive Muscle Relaxation or Box Breathing or Guided Imagery may help you fall asleep faster</li>
                </ul>
              
              </div>
            </div>
            <div>
              {null}
            </div>
          </CollapsibleSection>
        </Grid>

        <Grid item xs={11} sm={12} md={12}>

          <CollapsibleSection title="Time For Yourself/Stress Reduction">
            <div>
              <div className="next-steps-page__info-text">
              
                <h4>How does not having time for yourself lead to PPD?</h4>
                <ul>
                  <li> One area that is highly neglected by mothers is time for yourself </li>
                  <li> This is partly because others have such high demands and because you may feel
                        guilty doing something for you </li>
                  <li> However, if you think of the oxygen mask demonstrations on airplanes, remember
       why you have to put your mask on before your children. If you don’t have the air you
       need, you can’t meet their needs </li>
                </ul>
              <div class="nutritionTextAndImage">
                <div>
                  <h4>What Can I Do to Help?</h4>
                <ul>
                  <li>
                      Take at least one or two periods of downtime 
                      that is just for you each day
                  </li>
                  <li>
                      Do at least one thing each day that you enjoy. 
                      It’s hard to overcome depression if you aren’t 
                      doing things that make you happy! 
                  </li>
                  <li>
                  Try your old hobbies like listening to music, 
                  watching a favorite show,
                  reading or gardening
                  </li>
                  <li>
                      Spend time in places in nature such as by a beach, 
                      forest, river, or park as natural
                      environments tend 
                      to reduce stress levels
                  </li>
                  <li>
                    Get your hair done, paint your nails, or buy yourself your favourite dessert
                  </li>
                  <li>
                    Relaxation techniques such as Progressive Muscle Relaxation and Box Breathing may
                    help relax your body
                  </li>
                </ul>
                </div>
                
                <div className="nutritionImage2">
                    <img src={stressReductionPlant} alt="Mom's In Mind Logo" className="carrot" />
                </div>
                </div>
                
                <h4>Resources</h4>
                <ul>
                <li>
                    <a
                      href="https://www.todaysparent.com/baby/postpartum-care/self-care-hacks-for-newbie-parents/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      28 Self-Care Hacks for Newbie Parents
                    </a>
                  </li>
                                    <li>
                    <a
                      href="https://www.rookiemoms.com/activities-for-new-moms-52-weekly-challenges/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      52 Weekly Challenges for New Moms
                    </a>
                  </li>
                                                      <li>
                    <a
                      href="https://www.anxietycanada.com/articles/how-to-do-progressive-muscle-relaxation/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      How to do Progressive Muscle Relaxation
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="outside">
              <div class="outsideText">
                <h3>Resources:</h3>
                <ul>
                  <li>
                    <a
                      href="https://www.todaysparent.com/baby/postpartum-care/self-care-hacks-for-newbie-parents/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      28 Self-Care Hacks for Newbie Parents
                    </a>
                  </li>
                                    <li>
                    <a
                      href="https://www.rookiemoms.com/activities-for-new-moms-52-weekly-challenges/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      52 Weekly Challenges for New Moms
                    </a>
                  </li>
                                                      <li>
                    <a
                      href="https://www.anxietycanada.com/articles/how-to-do-progressive-muscle-relaxation/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      How to do Progressive Muscle Relaxation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Using Supports">
            <div>
              <div className="next-steps-page__info-text">
                <h4>How Can A Lack of Help and Support Affect Postpartum Depression?</h4>
                <ul>
                  <li> Raising an infant without help can be very difficult </li>
                  <li> Engaging your supports can help you adapt to life with a baby more easily </li>
                  <li> Good relationships play an important role in protecting new moms against mental
     health problems and help them in their recovery
                  </li>
                </ul>

                <h4>What Types of Support Can Be Helpful?</h4>
                <ul>
                  <li>
                      Emotional supports, such as a close friend who you can talk to about your feelings,
     provide you with a sense of how valuable you are as an individual.
                  </li>
                  <li>
                      Some possible sources of emotional support may include a close friend (new
     or old!), your partner, and your family
                  </li>
<br></br>
                  <li>
                    Social supports, include groups and people that help you feel like you belong
                  </li>
                  <li>
                    Some possible sources of social support may include a online postpartum
                        support groups found on Postpartum Support International or even a
                        networking app like Peanut
                  </li>
                  <br></br>
                  <li>
                    Practical supports, such as a family member or friend can help you complete
     everyday chores and errands
                  </li>
                  <li>
                      Some possible sources of practical support may also include neighbours,
                          other relatives, grocery pickup, cleaning services
                  </li>
                  <br></br>
                  <li>
                      Informational supports can include healthcare providers who provide reliable and
                          accurate information.
                  </li>
                  <li>
                      Some possible sources of informational support may include a public health
                          nurse, a family doctor or other general practitioner a psychiatrist or
                      psychologist, and mental 
                          health organization.
                  </li>
                </ul>
                
                <h5>Resources</h5>
                <ul>
                  <li>      
                    <a
                      href="https://www.postpartum.net/get-help/psi-online-support-meetings/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    Postpartum Support International
                    </a></li>
                    <li>
                    <a
                      href="https://www.parents.com/parenting/moms/mom-groups-worth-joining-on-facebook/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      20 Mom Groups Worth Joining on Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.peanut-app.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Peanut – Connecting Women Across Fertility and Motherhood
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="outside">
              <Grid item xs={12} md={12} lg={12} className="next-steps-page__image-container">
                <img src={PostpartumSupportInternationalImage} alt="Post Partum Support International Logo" className="swing" />
              </Grid>

              <div class="outsideText">
                <h3>See also:</h3>
                <ul>
                  <li>
                    <a
                      href="https://www.parents.com/parenting/moms/mom-groups-worth-joining-on-facebook/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      20 Mom Groups Worth Joining on Facebook
                    </a>
                  </li>
                                    <li>
                    <a
                      href="https://www.peanut-app.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Peanut – Connecting Women Across Fertility and Motherhood
                    </a>
                  </li>
                </ul>
              </div>
              
            </div>
          </CollapsibleSection>
        </Grid>

        {/* <Grid item xs={12} md={12} className="next-steps-page__image-container">
          <img
            style={{ maxWidth: "30%" }}
            src={image_3}
            alt="mom in wheelchair"
          />
        </Grid> */}

        <Grid item xs={11} sm={12} md={12}>

          <h2 className="next-steps-page__info-title">Step 2: Psychotherapy </h2>
          <Divider />

          <CollapsibleSection title="Low Intensity Psychotherapy (Self-Guided)">
            <div>
              <div className="next-steps-page__info-text">
                <h4>What is Low Intensity Psychotherapy?</h4>
                <p>
                  Psychotherapy or talk therapy refers to the various ways that speaking with another person can help
                  with psychological or psychiatric problems. Psychotherapy can help women shift their thinking and
                  feelings and recover from PPD.
                </p>
                <p>
                  Low intensity psychotherapy refers to talking therapies like Cognitive Behavioural Therapy (CBT)
                  that are not guided or supported directly by a trained mental health professional. These include online
                  resources like moodgym, self-help books like Mind Over Mood, and mobile health applications or
                  apps like MomsInMind.
                </p>
                <h4>How Can Low Intensity Psychotherapy Help Me?</h4>
                <p>
                In the postpartum period, Low Intensity Psychotherapy may help you overcome difficulties with
                depression (i.e., low mood), worry and anxiety.
                </p>
                <div class="nutritionTextAndImage">
                  <div>
                    <h5>Some of the best resources are listed below:</h5>
                    <ul>
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
                      <li>
                          <a
                            href="https://woebothealth.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                          Woebot
                          </a>
                      </li>
                      <li>
                        <a
                            href="https://www.mindovermood.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Mind Over Mood
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="imageContainer">
                    <img src={Logo} alt="Mom's In Mind Logo" className="swing" />
                    <img src={willow} alt="animal name willow" className="swing" />
                  </div>
                </div>
              </div>
            </div>

            <div className="outside">
              <div class="imageContainer">
                <img src={Logo} alt="Mom's In Mind Logo" className="swing" />
                <img src={Covid19InnovationsImage} alt="Mom's In Mind Logo" className="swing" />
              </div>
              <div class="outsideText">
                <h3>See also:</h3>
                <ul style={{ "list-style-type": "none" }}>
                <li>
                    <a href="https://moodgym.com.au/" target="_blank" rel="noopener noreferrer">
                        moodgym
                    </a>
                  </li>
                  <li>
                      <a
                        href="https://woebothealth.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                      Woebot
                      </a>
                  </li>
                  <li>
                    <a
                        href="https://www.mindovermood.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mind Over Mood
                    </a>
                  </li>
                </ul>
              </div>
              
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Formal Psychotherapy">
            <div>
              <div className="next-steps-page__info-text">
                <h4>What is Formal Psychotherapy?</h4>
                <p>
                  Formal psychotherapy is a form of talking therapy that can be provided by a psychiatrist,
                  psychologist, social worker, nurse, registered psychotherapist, or other mental health professional.
                  If your symptoms of PPD interfere with your functioning (i.e., taking care of baby, maintaining your
                  household), it may also be worth exploring formal psychotherapy with a trained professional. This
                  should also be considered if one’s problems don’t seem to get better despite lifestyle changes
                  including the support of one’s family of friends.
                </p>
                <h4>How can Formal Psychotherapy help me?</h4>
                <p>
                This type of therapy can help you talk through your concerns and develop better ways to cope with
                negative feelings, set tangible goals, and respond to situations in a positive manner.
                Research suggests that over half of women who receive a full-course of Cognitive Behavioural
                Therapy (CBT) or Interpersonal Therapy (IPT) will have their symptoms completely resolve (i.e.,
                remit). Another 25% will notice a big improvement 
                </p>
                <h4>Resources</h4>
                <p id="no-margin">
                Listed below are types of psychotherapies that mothers commonly receive for the treatment of PPD:
                </p>
                <ul>
                  <li>
                  Cognitive Behavioural Therapy (CBT)
                  </li>
                  <li>
                  Interpersonal Psychotherapy (IPT)
                  </li>
                </ul>
                <p class="margin-top">
                If you would like to get in touch with a Therapist, please visit the 
                  <a
                          href="https://www.psychologytoday.com/ca"
                          target="_blank"
                          rel="noopener noreferrer"
                  > Psychology Today website relevant to your area.
                  </a>
                </p>
              </div>
            </div>
            <div>
              {null}
            </div>
          </CollapsibleSection>
        </Grid>

        <Grid item xs={11} sm={12} md={12}>

          <h2 className="next-steps-page__info-title">Step 3: Medications and Complementary 
and Alternative Medicines</h2>
          <Divider />

          <CollapsibleSection title="Medications">
            <div>
              <div className="next-steps-page__info-text">
                <h4>What Are Antidepressants?</h4>
                <p>
                  These are medications that have been studied and shown to be effective and safe in clinical trials.
They may be used on their own or in combination with other treatment options such as psychotherapy
to treat moms who have more significant symptoms of PPD. Antidepressants work by changing levels neurotransmitters in the brain. Of the antidepressants, the
most commonly used for PPD are selective serotonin reuptake inhibitors (SSRIs).
                </p>
                <h4>Should I Take Antidepressants?</h4>
                <p>
                  The decision of whether or not to pursue medications as a treatment method for PPD is a challenging
one. Their benefits must be weighed against their side effects and their passage into breast milk. All
pass into breast milk, but some pass in very small amounts
                </p>
                <p>If you wish to explore the possible consequences of pharmacotherapy during lactation, please visit the
                links below and/or consult your healthcare professional.
                </p>
                <p>To learn more about taking antidepressants while breastfeeding, please visit this
                  <a
                            href="https://www.camh.ca/en/health-info/mental-illness-and-addiction-index/antidepressant-medications"
                            target="_blank"
                            rel="noopener noreferrer"
                    > CAMH page.
                  </a> 
                </p>
              </div>
            </div>
            <div>
              {null}
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Complementary and Alternative Medicines">
            <div>
              <div className="next-steps-page__info-text">
                <p>
                Although the research evidence for complementary and alternative treatments for PPD, is less
                extensive than for psychotherapy and medications, they can be helpful for many women, either alone
                or in combination with these more traditional treatments:
                </p>
                <h4>Bright Light Therapy (BLT)</h4>
                <ul>
                  <li>
                  BLT involves being near a light therapy box that mimics the positive effects of
                  natural sunlight
                  </li>
                </ul>
                <h5>
                  What you can do
                </h5>
                <ul>
                  <li>
                  It has been shown to be an effective treatment for PPD with relatively few side effects
                  </li>
                  <li>
                  Research suggests that sitting in front of a light that provides a dose of 10,000 lux (a
                  measure of light intensity) for 30 minutes beginning within 10 minutes of waking can
                  help with PPD
                  </li>
                </ul>

                <p>
                To learn more about BLT, please visit the                   
                  <a
                              href="https://www.mayoclinic.org/tests-procedures/light-therapy/about/pac-20384604"
                              target="_blank"
                              rel="noopener noreferrer"
                      > Light Therapy Mayo Clinic page.
                  </a> 
                </p>

                <h4>Yoga</h4>
                <ul>
                  <li>
                  Yoga is a combination of physical and mental exercises that can calm and strengthen
        the body and mind
                  </li>
                </ul>
                <h5>
                What you can do
                </h5>
                <ul>
                  <li>
                  Engaging regularly in yoga can help reduce symptoms of PPD in women with lower
        levels of symptoms. Taking two one-hour classes per week for eight weeks delivered
        by a certified yoga instructor has been shown to be effective
                  </li>
                </ul>
                <p>
                To learn more about Yoga, please visit the 
                  <a
                              href="https://www.camh.ca/en/camh-news-and-stories/spring-cleaning-for-your-mental-health"
                              target="_blank"
                              rel="noopener noreferrer"
                      > CAMH page.
                  </a> 
                </p>

              <div class="imageContainer">
                <img src={yogaMom} alt="swing" className="swing" />
              </div>


                <h4>Massage Therapy</h4>
                <ul>
                  <li>
                  Massage therapy is a traditional technique in which a trained therapist manipulates
                  your muscles and other soft tissues to promote relaxation
                  </li>
                </ul>
                <h5>
                What you can do:
                </h5>
                <ul>
                  <li>
                  Massage Therapy has been shown to effectively treat mild PPD with few side effects.
        Evidence suggests eight weekly sessions of 20 minutes duration provided by a trained
        and certified massage therapist can be effective
                  </li>
                </ul>
                <p>
                To learn more about Massage Therapy, please visit this 
                <a
                              href="https://www.healthline.com/health/depression/massage-therapy"
                              target="_blank"
                              rel="noopener noreferrer"
                      > Healthline article.
                  </a> 
                </p>

                <h4>Omega-3-Fatty Acids</h4>
                <ul>
                  <li>
                  Omega-3 fatty acids are contained in fish and the natural oils that are derived from
        fish. Two particularly important types of Omega-3 fatty acids that may have positive
        effects on mood include eicosapentanoic acid (EPA) and docosahexanoic acid (DHA)
                  </li>
                </ul>
                <h5>
                What you can do:
                </h5>
                <ul>
                  <li>
                  Omega-3 fatty acids may be an effective treatment for mild PPD. Evidence suggests
        taking supplements with at least 1 gram of EPA per day could help
                  </li>
                </ul>
                <p>
                To learn more about Omega-3-Fatty Acid Therapy, please visit this
                <a
                              href="https://www.healthline.com/health/depression/massage-therapy"
                              target="_blank"
                              rel="noopener noreferrer"
                      > Women’s Mental Health
                      article.
                  </a> 
                </p>

                <p>
                *Disclaimer: This information is not meant to be used as a medical recommendation - only a trained
                healthcare professional should recommend specific treatment plans. If you have any concerns
                regarding any of the information presented here, please consult your primary healthcare professional.
                </p>
              </div>
            </div>
            <div>
              {null}
            </div>
          </CollapsibleSection>
        </Grid>


        {/* <Grid item xs={12} md={5} className="next-steps-page__image-container">
          <img src={image_4} alt="swing" className="swing" />
        </Grid> */}

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

export default EPDSNextSteps;
