import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { Row, Col } from 'antd'


import Navbar from './navbar.component'

// import step form
import StepForm from './stepForm/timelineStep'
import StepForm0 from './stepForm/step0'
import StepForm1 from './stepForm/step1'
import StepForm2 from './stepForm/step2'
import StepForm3 from './stepForm/step3'
import StepForm4 from './stepForm/step4'

function RegisterForm(props) {
    console.log("prop user", props.user)

    const [currentStep, setCurrentStep] = useState(0);
    const [maxStep, setMaxStep] = useState(0);
    const [user, setUser] = useState({})

    function checkStep(user) {
        console.log("user",user)
        let newStep = 0
        if(user != null) {
            if(user.hasOwnProperty("step0")) {
                newStep = 1
            }
            if(user.hasOwnProperty("general")) {
                newStep = 2
            }
            if(user.hasOwnProperty("school")) {
                newStep = 3
            }
        }
        setCurrentStep(newStep)
        setMaxStep(newStep)
    }
    
    useEffect( ()=> {
        if(props.user === false) {
            props.history.push('/')
        }
        if(user != null && props.user) {
            setUser(props.user)
        }
    }, [props])

    useEffect( () => {
        checkStep(user)
    }, [user])

    if(props.user === null) {
        return <h1>Is Loading...</h1>
    }

    function prev() {
        setCurrentStep(currentStep - 1)
        console.log(currentStep)
    }

    function next() {
        if(currentStep + 1>= maxStep) {
            setMaxStep(currentStep + 1)
        }
        setCurrentStep(currentStep + 1)
        console.log(currentStep)
    }

    // optional cofiguration
    const options = {
        // you can also just use 'bottom center'
        position: positions.BOTTOM_CENTER,
        timeout: 5000,
        offset: '30px',
        // you can also just use 'scale'
        transition: transitions.SCALE
     }

    return (
        <div>
            <Navbar />
            <AlertProvider template={AlertTemplate}{...options} >
                <Row>
                    <Col span={18} offset={3}>
                        <StepForm currentStep={currentStep} maxStep={maxStep}/>
                        {currentStep === 0 && <StepForm0 currentStep={currentStep} handlePrev={prev} handleNext={next}/>}
                        {currentStep === 1 && <StepForm1 currentStep={currentStep} handlePrev={prev} handleNext={next} user={user}/>}
                        {currentStep === 2 && <StepForm2 currentStep={currentStep} handlePrev={prev} handleNext={next}/>}
                        {currentStep === 3 && <StepForm3 currentStep={currentStep} handlePrev={prev} handleNext={next}/>}
                        {currentStep === 4 && <StepForm4 currentStep={currentStep} handlePrev={prev} handleNext={next}/>}
                        {currentStep === 5 && <StepForm5 currentStep={currentStep} handlePrev={prev} handleNext={next}/>}
                    </Col>
                </Row>
            </AlertProvider>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps)(RegisterForm)