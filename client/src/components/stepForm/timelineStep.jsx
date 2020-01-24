import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['เอกสาร', 'ข้อมูลทั่วไป', 'ระดับการศึกษา','ข้อมูลการติดต่อ', 'ข้อมูลผู้ปกครอง', 'กิจกรรม','ความถนัด', 'การเดินทาง', 'คำถาม', 'เสร็จสิ้น'];
}

function StepForm(props) {

  const {currentStep, maxStep} = props

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());
  const steps = getSteps();

  function isStepComplete(step) {
    return completed.has(step);
  }

  useEffect( () => {
    console.log("props", props)
    const newCompleted = new Set([...Array(maxStep).keys()])
    newCompleted.delete(currentStep)
    console.log(newCompleted)
    setCompleted(newCompleted)
    setActiveStep(currentStep);
  }, [props])

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={currentStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                completed={isStepComplete(index)}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}

export default StepForm