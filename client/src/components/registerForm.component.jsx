import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { Row, Col, Steps, Popover } from 'antd'
import { fetchUserAction } from '../actions/myaction'


import Navbar from './navbar.component'

// import step form
import StepForm from './stepForm/timelineStep'
import StepForm0 from './stepForm/step0'
import StepForm1 from './stepForm/step1'
import StepForm2 from './stepForm/step2'
import StepForm3 from './stepForm/step3'
import StepForm4 from './stepForm/step4'
import StepForm5 from './stepForm/step5'
import StepForm6 from './stepForm/step6'
import StepForm7 from './stepForm/step7'
import StepForm8 from './stepForm/step8'
import StepForm9 from './stepForm/step9'

function RegisterForm(props) {
    console.log("prop user", props.user)

    const [finished, setFinished] = useState(false)
    const [currentStep, setCurrentStep] = useState(0);
    const [maxStep, setMaxStep] = useState(0);
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)

    // useEffect( () => {
    //     console.log("test", test)
    // }, [currentStep])

    useEffect(() => {
        props.fetch_user()
    }, [currentStep])

    function checkStep(user) {
        console.log("user", user)
        let newStep = 0
        if(user != null) {
            // Refactorize from this
            // if(user.hasOwnProperty("...")) {
            //    newStep++
            // }
            // ...
            [
                "step0",
                "general",
                "school",
                "disease",
                "address",
                "future",
                "ability",
                "location",
                "question"
              ].reduce((step, next) => step + user.hasOwnProperty(next));
            if(user.hasOwnProperty("tracking_number")) {
                setFinished(true)
            }
        }
        //go to page
        // newStep = 9
        setCurrentStep(newStep)
        setMaxStep(newStep)
    }
    
    // useEffect( ()=> {
    //     if(props.user === false) {
    //         props.history.push('/')
    //     }
    //     if(user != null && props.user) {
    //         setUser(props.user)
    //         setLoading(false)
    //     }
    // }, [props])

    useEffect(() => {
        checkStep(user)
    }, [loading, user])




    function prev() {
        setCurrentStep(currentStep - 1)
        console.log(currentStep)
    }

    function next() {
        if (currentStep + 1 >= maxStep) {
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

    if (loading) {
        return <h1>Is Loading...</h1>
    }

    return (
        <div>
            <Navbar user={user}/>
            <AlertProvider template={AlertTemplate}{...options} >
                <Row>
                    <Col span={18} offset={3}>
                        <StepForm currentStep={currentStep} maxStep={maxStep} />
                        {currentStep === 0 && <StepForm0 currentStep={currentStep} handlePrev={prev} handleNext={next} />}
                        {currentStep === 1 && <StepForm1 currentStep={currentStep} handlePrev={prev} handleNext={next} user={user} />}
                        {currentStep === 2 && <StepForm2 currentStep={currentStep} handlePrev={prev} handleNext={next} user={user} />}
                        {currentStep === 3 && <StepForm3 currentStep={currentStep} handlePrev={prev} handleNext={next} user={user} />}
                        {currentStep === 4 && <StepForm4 currentStep={currentStep} handlePrev={prev} handleNext={next} user={user} />}
                        {currentStep === 5 && <StepForm5 currentStep={currentStep} handlePrev={prev} handleNext={next} user={user} />}
                        {currentStep === 6 && <StepForm6 currentStep={currentStep} handlePrev={prev} handleNext={next} user={user} />}
                        {currentStep === 7 && <StepForm7 currentStep={currentStep} handlePrev={prev} handleNext={next} user={user} />}
                        {currentStep === 8 && <StepForm8 currentStep={currentStep} handlePrev={prev} handleNext={next} user={user} />}
                        {currentStep === 9 && <StepForm9 currentStep={currentStep} handlePrev={prev} handleNext={next} user={user} finished={finished} />}
                    </Col>
                </Row>
            </AlertProvider>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth,
        // fetch_user:()=>{dispatch(fetchUserAction())}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetch_user: () => { dispatch(fetchUserAction()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)