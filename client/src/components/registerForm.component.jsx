import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


import Navbar from './navbar.component'

// import step form
import StepForm from './stepForm/timelineStep'
import StepForm0 from './stepForm/step0'
import StepForm1 from './stepForm/step1'

function RegisterForm(props) {
    console.log("prop user", props.user)

    const [currentStep, setCurrentStep] = useState(0);
    const [maxStep, setMaxStep] = useState(0);
    const [user, setUser] = useState({})

    function checkStep(user) {
        console.log("user",user)
        if(user != null) {
            if(user.hasOwnProperty("step0")) {
                console.log("step0")
                setCurrentStep(1)
                setMaxStep(1)
            }
        }
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
                <StepForm currentStep={currentStep} maxStep={maxStep}/>
                <StepForm0 currentStep={currentStep} handlePrev={prev} handleNext={next}/>
                <StepForm1 currentStep={currentStep} handlePrev={prev} handleNext={next}/>
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