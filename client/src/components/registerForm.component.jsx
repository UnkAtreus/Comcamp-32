import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Steps, Popover } from 'antd'
import { fetchUserAction } from '../actions/myaction'
import logo from '../asset/logo-big.png';
import btn_left from '../asset/Button_left.png';
import btn_right from '../asset/Button_right.png';


import Navbar from './navbar.component'

// import step form
import StepForm from './stepForm/timelineStep'
import StepForm0 from './stepForm/step0'
import StepFormP from './stepForm/stepP'
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
    const [loading, setLoading] = useState(true)

    // useEffect( () => {
    //     console.log("test", test)
    // }, [currentStep])

    useEffect(() => {
        props.fetch_user()
    }, [currentStep])

    async function checkStep(user) {
        console.log("user", user)
        let newStep = 0
        if(user != null) {
            // Refactorize from this
            // if(user.hasOwnProperty("...")) {
            //    newStep++
            // }
            // ...
            newStep = await [
                "step0",
                "general",
                "school",
                "disease",
                "address",
                "future",
                "ability",
                "location",
                "question"
              ].reduce((step, next) => step + Number(user.hasOwnProperty(next)), 0);
            if(user.hasOwnProperty("tracking_number") && user.hasOwnProperty("personal")) {
                setFinished(true)
            }
        }

        //go to page

        // newStep = 0
        if(user.hasOwnProperty("step0") && !user.hasOwnProperty("personal")) {
            newStep = 'P';
        }
        setCurrentStep(newStep)
        setMaxStep(newStep)
    }

    useEffect( () => {
        if(finished === true) {
            window.location = 'https://comcamp.io/summary'
        }
    }, [finished])
   
    useEffect( ()=> {
        if(props.user === false) {
            window.location = 'https://comcamp.io'
        }
        if(user != null && props.user) {
            setUser(props.user)
            setLoading(false)
        }
    }, [props])

    useEffect(() => {
        checkStep(user)
    }, [loading])




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

    if (loading) {
        return <div></div>
    }

    const back = () => {
        window.location = 'https://comcamp.io'
    }

    if(!loading && !finished) {
        return (
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%"}}>
                <img src={logo} alt="" srcset="" style={{width: "100%"}}/>
                <h1 style={{color: "#ff4d29", fontSize: "5vh"}}>ระบบปิดรับสมัครแล้ว</h1>
                <br />
                <div className="Button-Column left">
                    <div className="Button-Left-Image">
                        <img
                            src={btn_left}
                            alt="Left button decoration"
                        />
                    </div>
                    <div className="Button-Right-Image">
                        <img
                            src={btn_right}
                            alt="Right button decoration"
                        />
                    </div>
                    <div className="Button-BorderImage"></div>
                    <button className="Button-Background" onClick={back}>
                        <span className="Markdown">Back</span>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div>
                <Row>
                    <Col span={18} offset={3}>
                        <StepForm currentStep={currentStep} maxStep={maxStep} />
                        {currentStep === 0 && <StepForm0 currentStep={currentStep} handlePrev={prev} handleNext={next} />}
                        {currentStep === 'P' && <StepFormP currentStep={currentStep} handlePrev={prev} handleNext={next} />}
                        {currentStep === 1 && <StepForm1 currentStep={currentStep} handlePrev={prev} handleNext={next} user={user} />}
                        {currentStep === 2 && <StepForm2 currentStep={currentStep} handlePrev={prev} handleNext={next} user={user} />}
                        {currentStep === 3 && <StepForm3 currentStep={currentStep} handlePrev={prev} handleNext={next} user={user} />}
                        {currentStep === 4 && <StepForm4 currentStep={currentStep} handlePrev={prev} handleNext={next} user={user} />}
                        {currentStep === 5 && <StepForm5 currentStep={currentStep} handlePrev={prev} handleNext={next} user={user} />}
                        {currentStep === 6 && <StepForm6 currentStep={currentStep} handlePrev={prev} handleNext={next} user={user} />}
                        {currentStep === 7 && <StepForm7 currentStep={currentStep} handlePrev={prev} handleNext={next} user={user} />}
                        {currentStep === 8 && <StepForm8 currentStep={currentStep} handlePrev={prev} handleNext={next} user={user} />}
                        {currentStep === 9 && <StepForm9 currentStep={currentStep} handlePrev={prev} handleNext={next} user={user} finished={finished} step9={true} fetch_user={props.fetch_user}/>}
                    </Col>
                </Row>
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
