import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import { motion } from 'framer-motion';
import StepButton from "@material-ui/core/StepButton";
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor,client } from '../../client';

import './Education.scss';
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));


const Education = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());
  const [skipped, setSkipped] = React.useState(new Set());
  const [education, setEducation] = useState([]);
  const [filterEducation, setFilterEducation] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  useEffect(() => {
    const query = '*[_type == "education"]';
    
    client.fetch(query).then((data) => {
      setEducation(data || []);
      //setFilterEducation(data || []);
      handleEducationFilter("Matriculation");
      setActiveStep(-1);
    });
  }, []);

  const handleEducationFilter = (item) => {
    setTimeout(() => {
      console.log(item);
      setFilterEducation(education.filter((edu) => edu.degree?.includes(item)));
    }, 500);
  };

  function totalSteps() {
    return education.length;
  }

  function skippedSteps() {
    return skipped.size;
  }

  function completedSteps() {
    return completed.size;
  }

  function allStepsCompleted() {
    return completedSteps() === totalSteps() - skippedSteps();
  }

  function isLastStep() {
    return activeStep === totalSteps() - 1;
  }

  // function handleNext() {
  //   const newActiveStep =
  //     isLastStep() && !allStepsCompleted()
  //       ? // It's the last step, but not all steps have been completed
  //         // find the first step that has been completed
  //         education.findIndex((step, i) => !completed.has(i))
  //       : activeStep + 1;

  //   setActiveStep(newActiveStep);
  // }

  const handleStep = (step) => {
    setActiveStep(step);
    console.log("step: " + step);
  };

  function isStepSkipped(step) {
    return skipped.has(step);
  }

  function isStepComplete(step) {
    return completed.has(step);
  }

  return (
    <div className={classes.root}>
      <Stepper  nonLinear activeStep={activeStep} className="education__stepper">
        {education.map((edu, index) => {
          const stepProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            
              <Step key={index} {...stepProps} className="education__step">
                <StepButton
                  onClick={() => {handleStep(index); handleEducationFilter(edu?.degree);
                    // checking the type of degree to get initial data.
                    console.log(edu?.degree.type);}}
                  completed={isStepComplete(index)}
                
                >
                  {edu?.degree}
                </StepButton>
              </Step>
        
          );
        })}
      </Stepper>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterEducation.map((edu, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={urlFor(edu?.imageurl)} alt={edu?.institute} />
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{edu.institute}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{edu.field}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{edu.grade}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
       {/* <div className="app__testimonial-item app__flex">
              
       <img src={ 'https://cdn.sanity.io/images/8pnizolv/production/a8a00f6f454afb25d2bb9669d773eb55bad5d5b9-900x900.jpg?w=2000&fit=max&auto=format'} alt={filterEducation[0]?.institute} />

        <div className="app__testimonial-content">
          <h4>{filterEducation[0]?.degree}</h4>
          <p className="p-text">{filterEducation[0]?.field}</p>
          <div>
             <h4 className="bold-text">{filterEducation[0]?.institute}</h4>
            <h5 className="p-text">{filterEducation[0]?.grade}</h5> 
          </div>
        </div> 
      </div>   */}
      
    </div>
  );
}

export default AppWrap(
    MotionWrap(Education, 'app__education'),
    'education',
    'app__whitebg',
  );
