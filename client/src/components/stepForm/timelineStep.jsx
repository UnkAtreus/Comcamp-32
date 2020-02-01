import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Steps } from 'antd';


function getSteps() {
  return ['เอกสาร', 'ข้อมูลทั่วไป', 'การศึกษา','สิ่งที่แพ้', 'ที่อยู่', 'ความสนใจ','ความถนัด', 'การเดินทาง', 'คำถาม', 'เสร็จสิ้น'];
}

function StepForm(props) {

  const {currentStep, maxStep} = props
  const { Step } = Steps

  // const classes = useStyles();
  // const [activeStep, setActiveStep] = React.useState(0);
  // const [completed, setCompleted] = React.useState(new Set());
  // const steps = getSteps();

  // function isStepComplete(step) {
  //   return completed.has(step);
  // }

  // useEffect( () => {
  //   console.log("props", props)
  //   const newCompleted = new Set([...Array(maxStep).keys()])
  //   newCompleted.delete(currentStep)
  //   console.log(newCompleted)
  //   setCompleted(newCompleted)
  //   setActiveStep(currentStep);
  // }, [props])

  return (
    <div>
      {/* <Stepper alternativeLabel nonLinear activeStep={currentStep}>
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
      </Stepper> */}
      <Steps current={currentStep}>
        {
          getSteps().map( (step) => <Step key={step} title={step} />)
        }
      </Steps>
    </div>
  );
}

export default StepForm